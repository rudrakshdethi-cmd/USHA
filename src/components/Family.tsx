import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const ushaImg = 'https://images.pexels.com/photos/34799137/pexels-photo-34799137.jpeg?auto=compress&cs=tinysrgb&w=800';
const grandsonImg = 'https://images.pexels.com/photos/18302421/pexels-photo-18302421.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function Family() {
  return (
    <section id="family" className="py-24 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-dairy-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-600">The Family</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mt-2">
            The People Behind <span className="text-gradient-dairy">the Milk</span>
          </h2>
        </motion.div>

        {/* Usha */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/15 group">
              <img src={ushaImg} alt="Usha Doodhwalli" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dairy-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-display text-2xl font-bold">Usha Doodhwalli</div>
                <div className="text-sm opacity-90">Founder & Owner</div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gold-500 rounded-2xl shadow-xl flex items-center justify-center"
            >
              <Heart className="w-8 h-8 text-white fill-white" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl font-bold text-stone-800 mb-5">Usha</h3>
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
              <p>
                Usha is the heart and soul of Usha Doodhwalli. What began as a small milk agency in 2009 has grown into a trusted name across the community — all because of her tireless dedication to quality and service.
              </p>
              <p>
                Inspired by <strong className="text-dairy-700">Bharat Khan's</strong> tel chatai business and its legacy of purity, she brought those same values to dairy. She personally oversees sourcing, quality checks, and customer relationships — treating every family as her own.
              </p>
            </div>
            <div className="mt-6 flex gap-6">
              <div>
                <div className="font-display text-3xl font-bold text-gradient-dairy">500+</div>
                <div className="text-xs text-stone-500">Families Served</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-gradient-gold">15+</div>
                <div className="text-xs text-stone-500">Years of Service</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-forest-700">100%</div>
                <div className="text-xs text-stone-500">Quality Promise</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dhruv & Grandfather */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-gold-500" />
              <span className="text-sm font-bold uppercase tracking-wider text-gold-600">The Next Generation</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-stone-800 mb-5">
              Dhruv & His Grandfather
            </h3>
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
              <p>
                <strong className="text-dairy-700">Dhruv</strong> is Usha's son — a bright young boy who represents the future of Usha Doodhwalli. He often watches his mother manage the agency with wide-eyed admiration, already learning the values of hard work, honesty, and community service.
              </p>
              <p>
                Behind Dhruv stands his <strong className="text-dairy-700">grandfather-Rudraksh</strong> — the patriarch of the family, and the very person who guided Usha from the tel chatai days to the milk agency. He taught the family that <em>business is not about transactions, but about relationships</em>. His wisdom, patience, and unwavering belief in Usha's potential became the bedrock of everything the family has built.
              </p>
              <p>
                From Bharat Khan's tel chatai to Usha's milk agency to Dhruv's bright future — this is a story of a family that turned every challenge into an opportunity, one generation passing the torch of purity and trust to the next.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/15 group">
              <img src={grandsonImg} alt="Family and next generation" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-display text-2xl font-bold">Dhruv & Grandfather</div>
                <div className="text-sm opacity-90">Two generations, one legacy</div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-dairy-500 rounded-2xl shadow-xl flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
