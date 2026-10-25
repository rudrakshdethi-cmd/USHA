import { motion } from 'framer-motion';
import { Milk, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-dairy-900 to-stone-900 text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path fill="#fdfbf7" d="M0,0L1440,0L1440,80L0,80Z M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,0Z" />
        </svg>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dairy-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dairy-400 to-dairy-600 flex items-center justify-center">
                <Milk className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-xl">Usha Doodhwalli</div>
                <div className="text-[10px] text-dairy-200 tracking-widest uppercase">Pure Milk, Family Legacy</div>
              </div>
            </div>
            <p className="text-sm text-dairy-100/70 leading-relaxed max-w-xs">
              From Bharat Khan's tel chatai to Usha's milk agency — a family legacy of purity, trust, and community service since 2009.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4 text-dairy-100">Quick Links</h4>
            <ul className="space-y-2 text-sm text-dairy-100/70">
              <li><a href="#home" className="hover:text-white hover:underline transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-white hover:underline transition-colors">Our Story</a></li>
              <li><a href="#products" className="hover:text-white hover:underline transition-colors">Products</a></li>
              <li><a href="#family" className="hover:text-white hover:underline transition-colors">Our Family</a></li>
              <li><a href="#contact" className="hover:text-white hover:underline transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4 text-dairy-100">Contact Us</h4>
            <ul className="space-y-3 text-sm text-dairy-100/70">
              <li>
                <a href="mailto:rudrakshdethi@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-gold-400" />
                  rudrakshdethi@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918077327957" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-gold-400" />
                  +91 80773 27957
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-dairy-100/50">
            &copy; {year} Usha Doodhwalli. All rights reserved.
          </p>
          <p className="text-xs text-dairy-100/50 flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" /> by the Doodhwalli family
          </p>
        </div>
      </div>
    </footer>
  );
}
