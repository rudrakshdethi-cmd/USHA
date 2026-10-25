import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Milk } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Family', href: '#family' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-dairy-900/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dairy-400 to-dairy-700 flex items-center justify-center shadow-lg shadow-dairy-600/30 group-hover:scale-110 transition-transform duration-300">
              <Milk className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-500 rounded-full animate-pulse" />
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-lg text-dairy-800 block">Usha Doodhwalli</span>
            <span className="text-[10px] text-stone-500 tracking-widest uppercase">Pure Milk, Family Legacy</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-stone-700 hover:text-dairy-700 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-dairy-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-dairy-600 to-dairy-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-dairy-600/30 hover:shadow-xl hover:shadow-dairy-600/40 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-stone-700 rounded-lg hover:bg-cream-200 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-cream-200"
          >
            <ul className="px-5 py-4 space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-stone-700 hover:bg-cream-200 hover:text-dairy-700 rounded-xl transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-3 bg-gradient-to-r from-dairy-600 to-dairy-700 text-white rounded-xl font-semibold"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
