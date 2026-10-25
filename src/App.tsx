import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Story from '@/components/Story';
import Products from '@/components/Products';
import Family from '@/components/Family';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-dairy-400 via-dairy-500 to-gold-500 z-50 origin-left"
      style={{ scaleX }}
    />
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-dairy-600 to-dairy-800 text-white flex items-center justify-center shadow-xl shadow-dairy-900/30 hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Story />
        <Products />
        <Family />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
