import { motion } from 'motion/react';
import { Camera, Film, Layers, Zap } from 'lucide-react';

const expertiseList = [
  {
    icon: <Camera size={24} className="text-white" strokeWidth={1.5} />,
    title: "Cinematography",
    desc: "Shot intimately on iPhone 16 Pro. Leveraging Apple ProRes and Log color spaces for dynamic range that rivals cinema cameras."
  },
  {
    icon: <Zap size={24} className="text-white" strokeWidth={1.5} />,
    title: "Advanced Speedramps",
    desc: "Flawlessly calculated time remapping. Smooth transitions from 4K 120fps slow-motion to hyper-speed establishing shots."
  },
  {
    icon: <Film size={24} className="text-white" strokeWidth={1.5} />,
    title: "Premium Edits",
    desc: "Two years of deep CapCut mastery. Precision cuts, bespoke sound design, and color grading tailored for high-end demographics."
  },
  {
    icon: <Layers size={24} className="text-white" strokeWidth={1.5} />,
    title: "Motion Graphics",
    desc: "Engaging 3D text tracking, dynamic typography, and sleek visual overlays designed to retain viewer attention natively on social."
  }
];

export default function Expertise() {
  return (
    <section className="relative w-full py-32 px-6 sm:px-12 bg-[#030303]/80 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mb-4">Mastery of the Craft</h2>
          <p className="font-sans text-gray-400 text-lg font-light max-w-xl">Combining high-level hardware agility with heavy-weight post-production techniques to deliver uncompromised visual fidelity.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {expertiseList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="md:col-span-6 lg:col-span-3 bg-zinc-900/30 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:bg-zinc-800/40 transition-colors"
            >
              <div className="mb-6 p-2 bg-zinc-800 rounded-lg w-fit inline-block border border-zinc-700/50">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-medium mb-2 tracking-tight">{item.title}</h3>
                <p className="font-sans font-light text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
