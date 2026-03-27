'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212]">
      {/* 
        The ScrollyCanvas now internally manages the 500vh scroll and text overlays
        to ensure both are perfectly in sync.
      */}
      <ScrollyCanvas />

      {/* Main Content Sections - Sitting underneath the scrolly intro */}
      <div className="relative z-10 bg-[#121212] flex flex-col items-center">
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
