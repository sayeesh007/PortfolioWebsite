'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BarChart, 
  Settings, 
  Globe, 
  Share2, 
  TrendingUp, 
  MessageSquare, 
  Zap, 
  Cpu, 
  Bot, 
  Link as LinkIcon,
  Layers
} from 'lucide-react';

const categories = ['All', 'SEO', 'Social', 'AI'];

const skills = [
  { name: 'Keyword Research', category: 'SEO', icon: Search },
  { name: 'Technical SEO', category: 'SEO', icon: Settings },
  { name: 'Google Search Console', category: 'SEO', icon: Globe },
  { name: 'Link Building', category: 'SEO', icon: LinkIcon },
  { name: 'Meta Ads', category: 'Social', icon: Share2 },
  { name: 'Growth Hacking', category: 'Social', icon: TrendingUp },
  { name: 'Content Strategy', category: 'Social', icon: MessageSquare },
  { name: 'Social Listening', category: 'Social', icon: BarChart },
  { name: 'Prompt Engineering', category: 'AI', icon: Bot, isAI: true },
  { name: 'LLM-Assisted Copy', category: 'AI', icon: Cpu, isAI: true },
  { name: 'Workflow Automation', category: 'AI', icon: Zap, isAI: true },
  { name: 'Data Analysis', category: 'AI', icon: Layers, isAI: true },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-24 bg-[#121212] px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-tech text-indigo-400 text-sm tracking-widest uppercase mb-2 block">
              The Toolkit
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Marketing & Data Skills.
            </h2>
            <p className="text-zinc-400 font-light">
              Mastering the intersection of traditional growth and modern intelligence.
            </p>
          </div>

          {/* Category Tabs - Scrollable on mobile */}
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex items-center gap-4 p-5 rounded-2xl glass-card group hover:z-10 neon-accent"
                >
                  <div className="p-3 rounded-xl bg-white/5 transition-colors group-hover:bg-indigo-500/10 text-indigo-400">
                    <Icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-base">{skill.name}</span>
                    <span className="text-xs text-zinc-500 font-tech uppercase tracking-tight">{skill.category}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
