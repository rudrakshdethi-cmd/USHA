import { motion } from 'framer-motion';

const telChataiImg = 'https://images.pexels.com/photos/8064204/pexels-photo-8064204.jpeg?auto=compress&cs=tinysrgb&w=800';
const dairyFarmImg = 'https://images.pexels.com/photos/40075567/pexels-photo-40075567.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dairy-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cream-200/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-600">Our Story</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mt-2">
            From Tel Chatai to <span className="text-gradient-dairy">Milk Agency</span>
          </h2>
          <p className="text-stone-500 mt-4 max-w-2xl mx-auto text-lg">
            A story of resilience, family bonds, and the courage to dream bigger.
          </p>
        </motion.div>

        {/* Chapter 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/15">
              <img src={telChataiImg} alt="Traditional dairy churning" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-dairy-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-gold-500 text-white px-6 py-4 rounded-2xl shadow-xl">
              <div className="font-display text-2xl font-bold">The Beginning</div>
              <div className="text-xs opacity-90">Early 2000s</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-1 bg-gold-500 rounded-full" />
              <span className="text-sm font-bold uppercase tracking-wider text-gold-600">Chapter One</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-stone-800 mb-4">
              The Tel Chatai Business
            </h3>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Long before the milk agency, our family's story began with a humble <strong className="text-dairy-700">tel chatai (oil pressing)</strong> business, led by <strong className="text-dairy-700">Bharat Khan</strong>. It was a small operation — pressing mustard seeds for oil, serving the local community with honesty and hard work. But it was more than just a business; it was the foundation upon which everything else was built.
              </p>
              <p>
                Bharat Khan's tel chatai taught the family the value of <strong className="text-dairy-700">purity, consistency, and trust</strong>. Every drop of oil that left the press was a promise to the community. And those same values — purity, consistency, and trust — became the soul of Usha Doodhwalli.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Chapter 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-1 bg-dairy-500 rounded-full" />
              <span className="text-sm font-bold uppercase tracking-wider text-dairy-600">Chapter Two</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-stone-800 mb-4">
              Usha's Dream Takes Shape
            </h3>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                When the tel chatai business eventually wound down, Usha found herself at a crossroads. But the lessons from Bharat Khan's business — the discipline, the customer relationships, the unwavering commitment to quality — lived on in her. She saw a gap in the community: <strong className="text-dairy-700">families deserved milk they could trust</strong>.
              </p>
              <p>
                With the support of her family, especially her father — <strong className="text-dairy-700">the grandfather of her son Dhruv</strong> — who always believed in her potential, Usha took a bold step. She opened her own milk agency, bringing the same purity and dedication from the tel chatai days into every drop of milk she delivered.
              </p>
              <p>
                What started with a few families quickly grew to hundreds. Word spread: <em>"Usha's milk is different. It's honest milk."</em>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group order-1 md:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/15">
              <img src={dairyFarmImg} alt="Dairy cow in green pasture" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tl from-dairy-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-dairy-600 text-white px-6 py-4 rounded-2xl shadow-xl">
              <div className="font-display text-2xl font-bold">2009</div>
              <div className="text-xs opacity-90">Milk Agency Opens</div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative bg-white rounded-3xl p-10 shadow-2xl shadow-dairy-900/10 border border-cream-200">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-display">"</span>
            </div>
            <p className="font-display text-xl sm:text-2xl text-stone-700 italic leading-relaxed">
              The milk business isn't just about selling milk. It's about being the family your community trusts with their children's health. That trust was earned by Bharat Khan, and I carry it forward every single day.
            </p>
            <p className="mt-5 text-sm font-semibold text-dairy-700">— Usha Doodhwalli</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
