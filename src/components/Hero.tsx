import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center z-10 px-6 sm:px-12 pointer-events-none">
      <div className="max-w-5xl mx-auto text-center pointer-events-auto bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 md:p-16 relative overflow-hidden flex flex-col items-center">
        <div className="absolute top-0 right-0 p-6 opacity-20">
          <div className="w-16 h-16 border-t border-r border-zinc-400"></div>
        </div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: 'easeOut' }}
           className="mb-8 z-10"
        >
          <span className="text-[10px] bg-white text-black px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
            Showreel {new Date().getFullYear()}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-none z-10"
        >
          REDEFINING <br className="hidden md:block" />
          <span className="text-zinc-300">MOBILE OPTICS.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl mx-auto font-sans text-zinc-400 text-sm md:text-lg font-light mb-12 z-10"
        >
          Delivering premium storytelling, high-impact motion graphics, and flawlessly timed speedramps for high-end real estate, luxury weddings, and viral campaigns.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-6 z-10 w-full justify-between mt-auto pt-8 border-t border-zinc-800/50"
        >
          <div className="flex gap-4 opacity-70 scale-75 md:scale-100 origin-left">
            <div className="w-24 h-16 bg-zinc-800 rounded-lg border border-zinc-700 transform -rotate-6 shadow-2xl flex items-center justify-center text-[8px] text-zinc-500 font-mono">PROMOTIONAL</div>
            <div className="w-24 h-16 bg-zinc-800 rounded-lg border border-zinc-700 transform rotate-3 shadow-2xl flex items-center justify-center text-[8px] text-zinc-500 font-mono z-10">SPEEDRAMP</div>
            <div className="w-24 h-16 bg-zinc-800 rounded-lg border border-zinc-700 transform -rotate-3 shadow-2xl flex items-center justify-center text-[8px] text-zinc-500 font-mono">TRENDING</div>
          </div>
          <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
            WATCH MASTER REEL
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gray-500 hover:text-white transition-colors cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
