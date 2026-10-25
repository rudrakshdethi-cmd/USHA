import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroImg = 'https://images.pexels.com/photos/66917/drip-milk-pour-liquid-66917.jpeg?auto=compress&cs=tinysrgb&w=1600';
const cowImg = 'https://images.pexels.com/photos/10829198/pexels-photo-10829198.jpeg?auto=compress&cs=tinysrgb&w=800';
const splashImg = 'https://images.pexels.com/photos/28948741/pexels-photo-28948741.jpeg?auto=compress&cs=tinysrgb&w=800';

const stats = [
  { value: '15+', label: 'Years of Trust' },
  { value: '500+', label: 'Happy Families' },
  { value: '100%', label: 'Pure & Fresh' },
  { value: '24/7', label: 'Delivery' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-cream-50/40" />
      </div>

      {/* Floating decorative blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-20 w-72 h-72 bg-dairy-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-cream-300/40 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid md:grid-cols-2 gap-8 items-center py-16">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-dairy-100 text-dairy-700 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-forest-600 rounded-full animate-pulse" />
            Delivering Fresh Milk Since 2009
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-stone-800"
          >
            Pure Milk,
            <br />
            <span className="text-gradient-dairy">Family Legacy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-lg text-stone-600 max-w-md leading-relaxed"
          >
            From a small tel chatai business to a thriving milk agency — Usha's journey is one of courage, community, and a commitment to purity that touches every glass we deliver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="px-7 py-3.5 bg-gradient-to-r from-dairy-600 to-dairy-700 text-white font-semibold rounded-full shadow-xl shadow-dairy-600/30 hover:shadow-2xl hover:shadow-dairy-600/40 hover:scale-105 transition-all duration-300"
            >
              Explore Our Products
            </a>
            <a
              href="#story"
              className="px-7 py-3.5 glass text-dairy-800 font-semibold rounded-full border border-dairy-200 hover:bg-dairy-50 hover:scale-105 transition-all duration-300"
            >
              Read Our Story
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-12 grid grid-cols-4 gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-center"
              >
                <div
                  className="font-display text-2xl sm:text-3xl font-bold text-gradient-dairy"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right images */}
        <div className="relative hidden md:block h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-0 right-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl shadow-dairy-900/20"
          >
            <img src={cowImg} alt="Cow grazing in green pasture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dairy-900/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-0 left-0 w-56 h-72 rounded-3xl overflow-hidden shadow-2xl shadow-dairy-900/20"
          >
            <img src={splashImg} alt="Fresh milk splash" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-40 left-32 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center"
          >
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-gradient-dairy">100%</div>
              <div className="text-[9px] text-stone-500">Pure</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-dairy-400" />
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#fdfbf7"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
