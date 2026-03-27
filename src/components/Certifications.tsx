'use client';

import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Google Ads Search',
    issuer: 'Google',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    verifyLink: '#'
  },
  {
    name: 'Inbound Marketing',
    issuer: 'HubSpot',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#ff7a59">
        <path d="M21.4 11.6c0-.4 0-.8-.1-1.2l3.4-2c.3-.2.4-.6.3-1s-.4-.6-.8-.6h-3.9c-.3-1.4-1.5-2.5-3-2.5-1.1 0-2.1.6-2.6 1.5L10.5 4c-.2-.3-.5-.4-.8-.4-.6 0-1 .4-1 1s.4 1 1 1c.1 0 .2 0 .3-.1l4.2 1.8c-.1.4-.1.8-.1 1.2s0 .8.1 1.2l-4.2 1.8c-.1 0-.2-.1-.3-.1-.6 0-1 .4-1 1s.4 1 1 1c.3 0 .6-.2.8-.4l4.2-1.8c.5.9 1.5 1.5 2.6 1.5 1.5 0 2.7-1.1 3-2.5h3.9c.4 0 .7-.3.8-.6s0-.8-.3-1l-3.4-2c.1.4.1.8.1 1.2zM17.4 13c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
      </svg>
    ),
    verifyLink: '#'
  },
  {
    name: 'SEO Fundamentals',
    issuer: 'Semrush',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#ff642d">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6H11V7zm0 8h2v2H11v-2z"/>
      </svg>
    ),
    verifyLink: '#'
  },
  {
    name: 'Meta Blueprint',
    issuer: 'Meta',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#0668E1">
        <path d="M15.5 6.5C13.5 6.5 11.5 7.5 10 9C8.5 7.5 6.5 6.5 4.5 6.5C2 6.5 0 8.5 0 11C0 13.5 2 15.5 4.5 15.5C6.5 15.5 8.5 14.5 10 13C11.5 14.5 13.5 15.5 15.5 15.5C18 15.5 20 13.5 20 11C20 8.5 18 6.5 15.5 6.5ZM4.5 13.5C3.1 13.5 2 12.4 2 11C2 9.6 3.1 8.5 4.5 8.5C5.9 8.5 7 9.6 7 11C7 12.4 5.9 13.5 4.5 13.5ZM15.5 13.5C14.1 13.5 13 12.4 13 11C13 9.6 14.1 8.5 15.5 8.5C16.9 8.5 18 9.6 18 11C18 12.4 16.9 13.5 15.5 13.5Z"/>
      </svg>
    ),
    verifyLink: '#'
  }
];

export default function Certifications() {
  return (
    <section className="py-24 bg-[#121212] px-8 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-tech text-indigo-400 text-sm tracking-widest uppercase mb-2 block">
              Global Standards
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Professional Certifications.
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-sm italic">
            "Verified via Accredible & Credly."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm transition-all hover:bg-white/10 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
                  {cert.logo}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                <p className="text-sm text-zinc-500 mb-6">{cert.issuer}</p>
                
                <motion.a 
                  href={cert.verifyLink}
                  initial={{ opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Verify Certificate
                </motion.a>
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
