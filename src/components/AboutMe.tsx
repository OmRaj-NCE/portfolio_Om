import { motion } from 'motion/react';
import { User, Crosshair, Sparkles, Navigation, Award } from 'lucide-react';

export default function AboutMe() {
  return (
    <section className="relative w-full py-32 px-6 sm:px-12 bg-black z-10 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 block mb-4">About Me</span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mb-4 text-white">
            Om Raj. <br/><span className="text-zinc-500">Student Freelancer.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-8 bg-zinc-900/30 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <User size={24} className="text-black" />
              </div>
              <h3 className="font-display text-2xl font-medium mb-4 text-white">The Journey</h3>
              <p className="font-sans text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
                I'm Om Raj, a student freelancer passionate about visual storytelling. Unbound by traditional agency overhead, I bring an agile, hungry, and modern approach to videography and editing. Over the past two years, I've mastered CapCut and advanced mobile cinematography on the iPhone 16 Pro to deliver stunning, platform-native content.
              </p>
              <p className="font-sans text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
                I specialize in creating high-retention UGC (User Generated Content) for cafes and restaurants that drives actual foot traffic. I also capture the essence of luxury real estate, cut high-impact promotional reels, and immortalize events with cinematic wedding documentaries.
              </p>
              <p className="font-sans text-zinc-300 font-medium leading-relaxed text-sm sm:text-base">
                Through my dedicated workflow, I've consistently helped brands secure more views, boost their digital presence, and significantly increase their chances of booking high-ticket clients.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 bg-zinc-900/30 rounded-2xl border border-zinc-800 p-8 flex flex-col justify-center"
          >
            <h3 className="font-display text-lg font-medium mb-6 text-white pb-4 border-b border-zinc-800">Currently Working With</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-zinc-400">
                <span className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center"><Sparkles size={14} className="text-white" /></span>
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider">Cafes & Restaurants</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-400">
                <span className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center"><Navigation size={14} className="text-white" /></span>
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider">Real Estate Firms</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-400">
                <span className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center"><Crosshair size={14} className="text-white" /></span>
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider">Wedding Planners</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-400">
                <span className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center"><Award size={14} className="text-white" /></span>
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider">Premium Banquets</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
