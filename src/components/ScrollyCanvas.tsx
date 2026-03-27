'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 84;

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.083s.webp`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // We use ['start start', 'end end'] so scrollYProgress is 0 when the section enters
  // and 1 when the section is fully scrolled through.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!imagesLoaded || !canvasRef.current || !images[index]) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const img = images[index];

    const canvas = canvasRef.current;
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    renderFrame(Math.floor(latest));
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.floor(frameIndex.get()));
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (imagesLoaded) {
      renderFrame(Math.floor(frameIndex.get()));
    }

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [imagesLoaded, images]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '500vh' }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover -z-10 bg-[#121212]" />
        
        {/* Syncing Overlay with the SAME scroll progress as the canvas */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
