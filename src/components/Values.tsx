import { motion } from 'framer-motion';
import { Droplet, Heart, Award, Truck } from 'lucide-react';

const values = [
  {
    icon: Droplet,
    title: '100% Pure & Fresh',
    desc: 'No preservatives, no adulteration. Just milk the way nature intended.',
    color: 'from-dairy-400 to-dairy-600',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    desc: 'Every delivery carries the warmth of a family that cares about your health.',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    desc: 'Each batch is tested for purity and freshness before it reaches your doorstep.',
    color: 'from-forest-600 to-forest-800',
  },
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    desc: 'Fresh milk delivered to your home every single morning, right on time.',
    color: 'from-dairy-500 to-dairy-700',
  },
];

export default function Values() {
  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-600">Why Choose Us</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mt-2">
            The <span className="text-gradient-dairy">Usha Doodhwalli</span> Promise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-7 shadow-lg shadow-stone-900/5 hover:shadow-2xl hover:shadow-dairy-900/10 transition-all duration-300 border border-cream-200"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-stone-800 mb-2">{v.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
