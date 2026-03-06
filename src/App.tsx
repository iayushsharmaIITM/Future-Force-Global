import { motion } from 'motion/react';
import PixelBackground from './components/PixelBackground';
import { ArrowRight, Briefcase, ChevronRight, Code2, Globe2, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black font-sans">
      <PixelBackground />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-4 h-4 bg-[#D4AF37] pixel-corners"></div>
            FUTURE FORCE
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-white/60">
            <a href="#expertise" className="hover:text-white transition-colors">EXPERTISE</a>
            <a href="#industries" className="hover:text-white transition-colors">INDUSTRIES</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>
          <a href="tel:+919667705580" className="hidden md:flex items-center gap-2 border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all font-mono text-sm">
            <Phone size={14} />
            <span>9667705580</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="font-mono text-[#D4AF37] mb-6 flex items-center gap-4 text-sm md:text-base">
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
            GLOBAL TALENT ACQUISITION
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-glow">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              THE FUTURE
            </span><br />
            OF WORK.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-12">
            Future Force Global Group is an elite recruitment agency connecting visionary companies with top-tier talent across IT and Non-IT sectors worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-mono font-bold uppercase tracking-wider overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Partner With Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </a>
            <a href="#expertise" className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 font-mono font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
              Explore Sectors
            </a>
          </div>
        </motion.div>
      </main>

      {/* Expertise Section */}
      <section id="expertise" className="relative z-10 py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-4">OUR EXPERTISE</h2>
              <p className="text-white/50 font-mono text-sm uppercase tracking-widest">Precision matching for specialized roles</p>
            </div>
            <div className="text-right font-mono text-8xl font-bold text-white/5 leading-none select-none">
              01
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IT Division */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8 md:p-12 hover:border-[#D4AF37]/50 transition-colors group relative overflow-hidden bg-[#050505]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full group-hover:bg-[#D4AF37]/20 transition-colors"></div>
              <Code2 size={48} className="text-[#D4AF37] mb-8" strokeWidth={1} />
              <h3 className="font-display text-3xl font-bold mb-4">IT Division</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Sourcing elite technical talent for the digital frontier. We understand the nuances of modern tech stacks and engineering cultures.
              </p>
              <ul className="space-y-4 font-mono text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37]"></div>
                  Permanent Hiring
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37]"></div>
                  Contract-to-Hire (C2H)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37]"></div>
                  Executive Tech Search
                </li>
              </ul>
            </motion.div>

            {/* Non-IT Division */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-white/10 p-8 md:p-12 hover:border-[#D4AF37]/50 transition-colors group relative overflow-hidden bg-[#050505]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors"></div>
              <Briefcase size={48} className="text-white mb-8" strokeWidth={1} />
              <h3 className="font-display text-3xl font-bold mb-4">Non-IT Division</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Comprehensive staffing solutions across diverse industries, finding the right leaders and operators for your business.
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-sm text-white/80">
                {['Retail', 'Aviation', 'EdTech', 'BFSI', 'FinTech', 'BPO', 'Real Estate', 'Healthcare'].map((industry) => (
                  <div key={industry} className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#D4AF37]" />
                    {industry}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="relative z-10 py-10 bg-[#D4AF37] text-black overflow-hidden flex items-center">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap font-display text-4xl font-bold tracking-tighter uppercase"
        >
          <span className="mx-8">Future Force Global Group</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Elite Talent</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Global Reach</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Future Force Global Group</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Elite Talent</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Global Reach</span>
          <span className="mx-8">•</span>
        </motion.div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                READY TO <br />SCALE?
              </h2>
              <p className="text-xl text-white/60 mb-12 max-w-md font-light">
                Connect with our talent specialists to discuss your hiring needs and discover how we can accelerate your growth.
              </p>
              
              <div className="space-y-8 font-mono">
                <a href="tel:+919667705580" className="flex items-center gap-6 group w-fit">
                  <div className="w-16 h-16 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1 uppercase tracking-widest">Direct Line</div>
                    <div className="text-2xl font-bold">+91 9667705580</div>
                  </div>
                </a>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Globe2 size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1 uppercase tracking-widest">Headquarters</div>
                    <div className="text-xl">Global Operations</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8 md:p-12 bg-black/50 backdrop-blur-sm"
            >
              <form className="space-y-6 font-mono" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">Company</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">Inquiry Type</label>
                  <select className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-[#D4AF37] transition-colors text-white/80 [&>option]:bg-black">
                    <option>IT Hiring</option>
                    <option>Non-IT Hiring</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <button className="w-full bg-white text-black py-4 font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors mt-8">
                  Initiate Contact
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Future Force Global Group. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
