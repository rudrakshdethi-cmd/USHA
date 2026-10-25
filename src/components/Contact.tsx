import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, User, MessageSquare } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      if (!isSupabaseConfigured) {
        const mailto = `mailto:rudrakshdethi@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`)}`;
        window.location.href = mailto;
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
        return;
      }

      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rudrakshdethi@gmail.com',
      href: 'mailto:rudrakshdethi@gmail.com',
      color: 'from-dairy-400 to-dairy-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 80773 27957',
      href: 'tel:+918077327957',
      color: 'from-gold-400 to-gold-600',
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: 'Doorstep Delivery',
      href: '#',
      color: 'from-forest-600 to-forest-800',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-dairy-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cream-200/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-600">Get in Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-800 mt-2">
            Let's <span className="text-gradient-dairy">Connect</span>
          </h2>
          <p className="text-stone-500 mt-4 max-w-2xl mx-auto text-lg">
            Want to place an order, ask a question, or just say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-lg shadow-stone-900/5 hover:shadow-2xl hover:shadow-dairy-900/10 transition-all duration-300 border border-cream-200 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-stone-400">{c.label}</div>
                    <div className="text-lg font-semibold text-stone-800">{c.value}</div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-dairy-600 to-dairy-800 rounded-2xl p-7 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <h3 className="font-display text-xl font-bold mb-2 relative">Why Reach Out?</h3>
              <ul className="space-y-2 text-sm text-dairy-50 relative">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                  Place a custom dairy order
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                  Start a daily milk subscription
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                  Inquire about bulk supply for events
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                  Partner with us as a supplier
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-2xl shadow-stone-900/10 border border-cream-200"
          >
            <h3 className="font-display text-2xl font-bold text-stone-800 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-cream-300 bg-cream-50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-dairy-400 focus:border-transparent transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-cream-300 bg-cream-50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-dairy-400 focus:border-transparent transition-all"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="tel"
                  placeholder="Your Phone (optional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-cream-300 bg-cream-50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-dairy-400 focus:border-transparent transition-all"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-stone-400" />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-cream-300 bg-cream-50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-dairy-400 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-dairy-600 to-dairy-700 text-white font-semibold rounded-xl shadow-lg shadow-dairy-600/30 hover:shadow-xl hover:shadow-dairy-600/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 p-3 bg-forest-600/10 text-forest-700 rounded-xl text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5" />
                  Thank you! Your message has been sent. We'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium"
                >
                  Something went wrong. Please try calling us directly at +91 80773 27957.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
