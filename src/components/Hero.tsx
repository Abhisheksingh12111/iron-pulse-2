import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flame, Shield, CheckCircle2, ChevronDown, Award } from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const scrollToPrograms = () => {
    const el = document.querySelector('#programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Hero Primary Enclosure */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl min-h-[560px] lg:min-h-[620px] flex flex-col justify-end p-6 sm:p-10 lg:p-14 group"
        >
          {/* Background Image with Dark Gradient & Vignette */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
              alt="IronPulse Gym High Performance Arena"
              className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 saturate-90 group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />
          </div>

          {/* Peak Capacity Bento Equalizer Widget (Top Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(204,255,0,0.15)' }}
            className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 z-20 hidden sm:block transition-colors hover:border-[#ccff00]/40"
          >
            <div className="flex gap-1.5 items-end h-6">
              <motion.div
                animate={{ height: ['8px', '18px', '10px', '20px', '8px'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 bg-[#ccff00] rounded-full"
              />
              <motion.div
                animate={{ height: ['16px', '8px', '22px', '14px', '16px'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 bg-[#ccff00] rounded-full"
              />
              <motion.div
                animate={{ height: ['10px', '24px', '8px', '18px', '10px'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 bg-[#ccff00] rounded-full"
              />
              <motion.div
                animate={{ height: ['22px', '12px', '24px', '8px', '22px'] }}
                transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 bg-[#ccff00] rounded-full"
              />
              <motion.div
                animate={{ height: ['12px', '20px', '14px', '24px', '12px'] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 bg-[#ccff00] rounded-full"
              />
            </div>
            <span className="text-[10px] font-mono uppercase font-bold text-zinc-400 mt-2 block tracking-wider">
              Floor Capacity: 38%
            </span>
          </motion.div>

          {/* Content Layer */}
          <div className="relative z-20 max-w-2xl">
            {/* Tag / Monospace Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="text-[#ccff00] font-mono text-xs font-bold tracking-widest uppercase">
                // ESTABLISHED 2024 • APEX STRENGTH
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-white uppercase leading-[0.95] mb-4"
            >
              FORGE YOUR <span className="text-[#ccff00]">LEGACY.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed mb-8"
            >
              Premium competition equipment, elite strength coaching, and an uncompromising community built on grit. Experience 15,000 sq ft of pure athletic biomechanics.
            </motion.p>

            {/* CTA Action Buttons with Hover Scale & Glow Shadow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                id="hero-join-now-btn"
                onClick={onOpenJoinModal}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(204, 255, 0, 0.5)',
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="bg-[#ccff00] text-black px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-lg shadow-[#ccff00]/25 cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>

              <motion.button
                id="hero-explore-programs-btn"
                onClick={scrollToPrograms}
                whileHover={{
                  scale: 1.04,
                  borderColor: '#ccff00',
                  boxShadow: '0 0 20px rgba(204, 255, 0, 0.2)',
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="border border-zinc-700 hover:border-[#ccff00] bg-black/40 backdrop-blur-sm text-white px-7 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider transition-colors cursor-pointer"
              >
                <span>View Disciplines</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bento Sub-row: 4 Compact Bento Pods with Staggered Entrance + Hover Scale/Shadow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            {
              icon: Shield,
              tag: 'Access',
              title: '24/7 Biometric Entry',
              delay: 0.7,
            },
            {
              icon: Award,
              tag: 'Hardware',
              title: 'Eleiko & Rogue',
              delay: 0.78,
            },
            {
              icon: Flame,
              tag: 'Recovery',
              title: '38°F Cold Plunge',
              delay: 0.86,
            },
            {
              icon: CheckCircle2,
              tag: 'Terms',
              title: 'Zero Lock-In',
              delay: 0.94,
            },
          ].map((pod) => {
            const IconComponent = pod.icon;
            return (
              <motion.div
                key={pod.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pod.delay, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(204, 255, 0, 0.15)',
                  borderColor: '#3f3f46',
                }}
                className="bg-zinc-900/90 rounded-3xl p-5 border border-zinc-800 flex items-center gap-3.5 cursor-default transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-[#ccff00] shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">{pod.tag}</p>
                  <p className="text-sm font-bold text-white uppercase font-heading tracking-tight">{pod.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="text-zinc-600 hover:text-[#ccff00] transition-colors flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest cursor-pointer py-1 px-3 rounded-full hover:bg-zinc-900/60"
          >
            <span>Scroll to Explore</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#ccff00]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

