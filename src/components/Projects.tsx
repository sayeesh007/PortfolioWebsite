'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Search, Zap, Cpu, BarChart } from 'lucide-react';

const projects = [
  {
    title: 'Local Cafe Search Dominance',
    situation: 'A well-loved local coffee shop was struggling to attract new customers who were searching for "best coffee" in their area.',
    task: 'Rank in the top 3 on Google Maps and increase weekend foot traffic by 25% within 3 months.',
    action: 'Fully optimized their Google Business Profile, addressed 20+ inconsistent local citations, and launched a "Hidden Gem" Instagram series that encouraged user-generated content.',
    result: '+30% Foot Traffic',
    tools: ['Google Maps', 'Canva', 'Instagram'],
    image: '/project_mockup.png',
  },
  {
    title: 'Pet Boutique Social Scaling',
    situation: 'A premium pet accessory brand had a great product but 0% conversion rate from their Instagram and Facebook pages.',
    task: 'Build a community of 5k+ followers and generate at least $2k in monthly revenue purely from organic social channels.',
    action: 'Implemented a high-frequency Reels strategy focusing on "Day in the Life" content and partnered with 10 micro-influencers for authentic product reviews.',
    result: '3.5x Monthly Revenue',
    tools: ['Instagram', 'CapCut', 'Shopify'],
    image: '/project_mockup.png',
  },
  {
    title: 'Wellness App Lead Machine',
    situation: 'A new meditation app was paying $15 per download on Facebook Ads, which was twice their target budget.',
    task: 'Reduce the Cost Per Acquisition (CPA) to under $7 while scaling monthly spend.',
    action: 'Redesigned the landing page for speed, launched a "7-Day Stress Relief" challenge as a lead magnet, and optimized ad copy for higher click-through rates.',
    result: '-55% Download Cost',
    tools: ['Meta Ads', 'Typeform', 'Mailchimp'],
    image: '/project_mockup.png',
  },
];

const ProjectCard = ({ project, index, scrollYProgress }: { project: any, index: number, scrollYProgress: any }) => {
  // We want the cards to stack on top of each other with a small offset.
  // Each card is stickily positioned and scales down as the NEXT cards come in.
  const targetScale = 1 - ((projects.length - 1 - index) * 0.05);
  // Range: Scale down as we scroll through the WHOLE section, but specifically after this card has "settled"
  const range = [index * 0.2, 1]; 
  
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);
  const stickyTop = `calc(12vh + ${index * 32}px)`; // Slightly more offset for readability
  
  return (
    <div 
      className="sticky flex items-center justify-center mb-20 w-full min-h-[70vh]"
      style={{ top: stickyTop, zIndex: index + 1 }}
    >
      <motion.div 
        style={{ scale }}
        className="relative w-full max-w-6xl flex flex-col md:flex-row bg-[#1a1a1a] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Visual Column */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent z-10 pointer-events-none" />
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          {/* Result Badge */}
          <div className="absolute top-8 left-8">
            <div className="bg-indigo-600/90 text-white px-6 py-2 rounded-full font-bold text-lg backdrop-blur-md border border-white/20 shadow-lg">
              {project.result}
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-tech text-indigo-400 text-xs tracking-widest uppercase">Case Study {index + 1}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">{project.title}</h3>

          <div className="grid grid-cols-1 gap-8 mb-10 overflow-y-auto max-h-[300px] no-scrollbar">
            <div>
              <h4 className="text-xs font-tech uppercase text-zinc-500 mb-2">The Problem & Task</h4>
              <p className="text-white/90 font-light leading-relaxed">
                <span className="text-zinc-500 font-semibold italic mr-2">S:</span> {project.situation}
              </p>
              <p className="text-white/90 font-light leading-relaxed mt-2">
                <span className="text-zinc-500 font-semibold italic mr-2">T:</span> {project.task}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-tech uppercase text-zinc-500 mb-2">The AI-Integrated Action & Result</h4>
              <p className="text-white/90 font-light leading-relaxed">
                <span className="text-zinc-500 font-semibold italic mr-2">A:</span> {project.action}
              </p>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap items-center gap-6">
            <span className="text-xs font-tech uppercase text-zinc-600">Tools Used:</span>
            <div className="flex gap-4">
              {project.tools.map((tool: string) => (
                <div key={tool} className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10" title={tool}>
                   {/* Simplified Icons for dynamic tools */}
                   <span className="text-xs text-zinc-400 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative z-10 bg-[#121212] py-20 px-4 md:px-12 w-full text-white min-h-[300vh]">
      <div className="max-w-7xl mx-auto mb-20 text-center sticky top-[10vh] h-[20vh] flex flex-col items-center justify-center">
        <span className="font-tech text-indigo-400 text-sm tracking-widest uppercase mb-4 block">Proven Performance</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Selected Works.</h2>
      </div>

      <div className="relative mt-20">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={index} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>
    </section>
  );
}
