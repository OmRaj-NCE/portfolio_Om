import { motion } from 'motion/react';

const tiers = [
  {
    name: "Social Base Retainer",
    price: "₹8k – ₹12k",
    desc: "Monthly bundle for Cafes, Real Estate, and Restaurants.",
    features: [
      "4 Professional Reels",
      "12 High-Converting Carousels",
      "Basic Motion Graphics",
      "Trending Audio Synchronization",
      "UGC & Promotional focus"
    ]
  },
  {
    name: "Social Pro Retainer",
    price: "₹12k – ₹18k",
    desc: "Aggressive monthly growth for Brands and Real Estate.",
    features: [
      "6 Premium Reels",
      "16 High-Converting Carousels",
      "Advanced Speedramping",
      "Custom Transitions & VFX",
      "Priority Revisions"
    ],
    highlight: true
  },
  {
    name: "Weddings & Events",
    price: "₹14k – ₹35k",
    desc: "Uncompromising storytelling for Wedding Planners & Banquets.",
    features: [
      "₹14k: Cinematic Highlight Reel",
      "₹22k: Short Film Documentary",
      "₹35k: Full Multiday Edit",
      "iPhone 16 Pro Logistics",
      "Premium Color Grading (Log)"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="relative w-full py-32 px-6 sm:px-12 bg-black z-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 block mb-4">Investment</span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mb-4">Affordable. Pitchable. Premium.</h2>
          <p className="font-sans text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto">
            My pricing depends on the exact scope of work, but as a student freelancer, I keep it accessible. Here are my reference rates for Real Estate, Cafes, Promotions, and Weddings.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row gap-4"
        >
          <div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-zinc-800/40 transition-colors">
            <div>
              <div className="text-white font-display text-lg font-medium">Single Professional Reel</div>
              <div className="text-zinc-500 text-sm font-light mt-1 w-full max-w-[200px]">Real Estate / Cafe UGC / Promo</div>
            </div>
            <div className="mt-4 sm:mt-0 text-lg sm:text-xl font-bold bg-white text-black px-4 py-1.5 rounded-full font-mono whitespace-nowrap">₹1,800 – ₹3,000</div>
          </div>
          <div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-zinc-800/40 transition-colors">
            <div>
              <div className="text-white font-display text-lg font-medium">14 Carousel Bundle</div>
              <div className="text-zinc-500 text-sm font-light mt-1 w-full max-w-[200px]">High-value informational posts</div>
            </div>
            <div className="mt-4 sm:mt-0 text-lg sm:text-xl font-bold bg-white text-black px-4 py-1.5 rounded-full font-mono whitespace-nowrap">Just ₹4,000</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`md:col-span-4 rounded-2xl p-6 flex flex-col justify-between ${tier.highlight ? 'bg-zinc-900/80 border border-zinc-700 relative shadow-2xl' : 'bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-800/40 transition-colors'}`}
            >
              {tier.highlight && (
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-white text-black font-mono text-[10px] uppercase tracking-tighter rounded-full font-bold">
                  Recommended
                </div>
              )}
              
              <div>
                <h3 className="font-display text-xl font-medium mb-2">{tier.name}</h3>
                <div className="text-zinc-400 text-sm font-light min-h-[48px] mb-6">{tier.desc}</div>
                
                <div className="mb-8 font-sans">
                  <span className="text-4xl font-extrabold text-white tracking-tight">{tier.price}</span>
                  {tier.name !== "Weddings & Events" && <span className="text-zinc-500 text-xs tracking-widest font-mono uppercase ml-2 block mt-1">/ Month</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-zinc-400 font-light leading-relaxed">
                      <span className="mr-3 text-zinc-600 mt-0.5 font-mono">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full py-3 rounded-xl font-bold text-sm tracking-tighter uppercase transition-transform hover:scale-[1.02] ${tier.highlight ? 'bg-white text-black' : 'bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700'}`}>
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
