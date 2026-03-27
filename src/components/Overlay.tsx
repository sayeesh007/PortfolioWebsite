'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Intro - Now stays visible longer as it's the solo overlay
  const opacity1 = useTransform(scrollYProgress, [0.85, 0.98], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0.85, 0.98], [0, -60]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Section 1: Intro */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8">
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="text-center w-full max-w-4xl"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-xl">
            Sayeesh Naik
          </h1>
          <p className="text-lg md:text-3xl text-zinc-300 font-light drop-shadow-lg">
            Digital Marketer.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
