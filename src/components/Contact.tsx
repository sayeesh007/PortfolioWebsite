import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Code, FileText, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/mnjonopz', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('submitted');
        setFormData({ name: '', email: '', message: '' });
        // Reset status after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again later.');
      setStatus('idle');
    }
  };

  return (
    <section className="relative bg-[#121212] py-24 px-8 md:px-20 overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info & Socials */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="font-tech text-indigo-400 text-sm tracking-widest uppercase mb-4 block">Let's Connect</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Ready to Scale?</h2>
            <p className="text-xl text-zinc-400 max-w-md font-light leading-relaxed mb-12">
              Combining SEO strategy with AI automation to future-proof your growth. Let's discuss your next project.
            </p>
          </div>

          <div className="space-y-12">
            {/* Resume Button */}
            <motion.a 
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 w-fit px-8 py-4 bg-transparent border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all"
            >
              <FileText className="text-indigo-400" />
              <span>Download PDF Resume (2024 Version)</span>
            </motion.a>

            {/* Social Links */}
            <div className="flex gap-8">
              <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                  <Globe size={20} />
                <span className="font-tech text-xs uppercase tracking-widest">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                  <Code size={20} />
                <span className="font-tech text-xs uppercase tracking-widest">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 md:p-12 glass-card rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence>
              {status === 'submitted' && (
                <motion.div 
                  initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                  animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-indigo-600/10 text-white"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-indigo-600 p-4 rounded-full mb-4"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-indigo-200">I'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-tech uppercase text-indigo-400 ml-1">Name</label>
              <input 
                required
                type="text" 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-tech uppercase text-indigo-400 ml-1">Email</label>
              <input 
                required
                type="email" 
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-tech uppercase text-indigo-400 ml-1">Message</label>
              <textarea 
                required
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600 resize-none"
              />
            </div>

            <motion.button 
              type="submit"
              disabled={status === 'submitting'}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:opacity-50 text-white font-bold p-5 rounded-2xl transition-all shadow-lg overflow-hidden relative"
            >
              {status === 'submitting' ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Send size={18} />
                </motion.div>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
