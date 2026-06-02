import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, Video } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative w-full py-32 px-6 sm:px-12 bg-black z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-stretch">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-5/12 bg-white text-black rounded-2xl p-8 flex flex-col justify-between group"
        >
          <div>
            <div className="flex justify-between items-start mb-16">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Mail size={18} strokeWidth={2} className="text-white" />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase block tracking-widest text-zinc-800">Pitch Project</span>
                <span className="text-[8px] opacity-60 text-zinc-500 uppercase font-mono">Est. 24h Response</span>
              </div>
            </div>
            <h2 className="font-display text-5xl font-extrabold tracking-tighter mb-4 leading-none">LET'S <br/>ELEVATE.</h2>
            <p className="font-sans text-sm font-medium mb-12 max-w-sm text-zinc-800">
              Available for global projects. Mumbai / London / Dubai. Let's sculpt your narrative with uncompromising visual fidelity.
            </p>
          </div>
          
          <div className="space-y-4">
            <a href="mailto:contact@example.com" className="flex justify-between items-center bg-zinc-100 p-4 rounded-xl hover:bg-zinc-200 transition-colors">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-900">Email Direct</span>
              <ArrowRight size={16} className="text-black" />
            </a>
            <a href="#" className="flex justify-between items-center bg-zinc-100 p-4 rounded-xl hover:bg-zinc-200 transition-colors">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-900">Instagram DM</span>
              <Instagram size={16} className="text-black" />
            </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="md:w-7/12 w-full bg-zinc-900/30 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-medium">Brief Your Project</h3>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Form</span>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Your Name or Brand" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-zinc-500 transition-colors" />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-zinc-500 transition-colors" />
              </div>
              <div>
                <select defaultValue="" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm font-sans text-zinc-400 focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select Project Scope...</option>
                  <option value="reels">Short Form / Reels</option>
                  <option value="realestate">Luxury Real Estate</option>
                  <option value="wedding">Wedding Documentary</option>
                  <option value="other">Other / Custom</option>
                </select>
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full py-3 px-6 rounded-xl bg-white text-black font-bold text-sm tracking-tighter hover:scale-[1.02] transition-transform flex justify-center items-center gap-2">
                  <span>SUBMIT INQUIRY</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-32 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-600 tracking-widest uppercase">
        <span>© {new Date().getFullYear()} Cinematic Pro.</span>
        <span className="mt-4 sm:mt-0 flex items-center gap-2"><Video size={14} /> Shot on iOS</span>
      </div>
    </section>
  );
}
