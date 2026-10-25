import { motion } from 'framer-motion';
import { Milk, Droplet, Coffee, Cake, ShoppingBasket } from 'lucide-react';

const milkBottle = 'https://images.pexels.com/photos/36285401/pexels-photo-36285401.jpeg?auto=compress&cs=tinysrgb&w=600';
const dairyProducts = 'https://images.pexels.com/photos/37939302/pexels-photo-37939302.jpeg?auto=compress&cs=tinysrgb&w=600';
const milkPour = 'https://images.pexels.com/photos/2064365/pexels-photo-2064365.jpeg?auto=compress&cs=tinysrgb&w=600';
const milkCans = 'https://images.pexels.com/photos/9621275/pexels-photo-9621275.jpeg?auto=compress&cs=tinysrgb&w=600';
const milkBread = 'https://images.pexels.com/photos/11337258/pexels-photo-11337258.jpeg?auto=compress&cs=tinysrgb&w=600';
const milkJug = 'https://images.pexels.com/photos/4350051/pexels-photo-4350051.jpeg?auto=compress&cs=tinysrgb&w=600';

const products = [
  {
    name: 'Fresh Cow Milk',
    desc: 'Pure A2 cow milk, straight from local farms. No preservatives, delivered fresh every morning.',
    price: '₹60 / litre',
    img: milkBottle,
    icon: Milk,
    tag: 'Best Seller',
  },
  {
    name: 'Full Cream Milk',
    desc: 'Rich and creamy full-fat milk, perfect for tea, coffee, and making ghee at home.',
    price: '₹75 / litre',
    img: milkJug,
    icon: Droplet,
    tag: 'Premium',
  },
  {
    name: 'Toned Milk',
    desc: 'Lighter, healthier option — all the goodness of milk with less fat. Great for everyday use.',
    price: '₹50 / litre',
    img: milkPour,
    icon: Coffee,
    tag: 'Healthy',
  },
  {
    name: 'Curd & Dahi',
    desc: 'Thick, creamy, probiotic-rich curd set in traditional earthen pots for authentic taste.',
    price: '₹45 / 500g',
    img: dairyProducts,
    icon: Cake,
    tag: 'Fresh Daily',
  },
  {
    name: 'Pure Ghee',
    desc: 'Hand-churned ghee made using traditional methods. Aromatic, golden, and full of goodness.',
    price: '₹550 / litre',
    img: milkCans,
    icon: ShoppingBasket,
    tag: 'Traditional',
  },
  {
    name: 'Paneer & Dairy',
    desc: 'Soft, fresh paneer and assorted dairy products made to order, every single day.',
    price: '₹320 / kg',
    img: milkBread,
    icon: ShoppingBasket,
    tag: 'Made to Order',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-cream-100 to-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-600">Our Products</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mt-2">
            Fresh from <span className="text-gradient-dairy">Farm to Family</span>
          </h2>
          <p className="text-stone-500 mt-4 max-w-2xl mx-auto text-lg">
            Every product is sourced, tested, and delivered with the same care Usha has shown since day one.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-stone-900/5 hover:shadow-2xl hover:shadow-dairy-900/10 transition-all duration-300 border border-cream-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 text-dairy-700 text-xs font-semibold rounded-full backdrop-blur-sm">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-stone-800">{p.name}</h3>
                    <span className="text-sm font-bold text-gradient-gold">{p.price}</span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">{p.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-dairy-600 text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Order Now
                    <span className="w-5 h-5 rounded-full bg-dairy-100 flex items-center justify-center text-dairy-700 group-hover:bg-dairy-600 group-hover:text-white transition-colors">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
