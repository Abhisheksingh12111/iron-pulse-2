import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GYM_STATS } from '../data/gymData';
import { Target, Zap, HeartPulse, Award, Users, Check } from 'lucide-react';

interface AboutProps {
  onOpenJoinModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenJoinModal }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      icon: Target,
      title: 'Precision Biomechanics',
      description: 'Zero guesswork. Calibrated Olympic bars and optimized resistance curves to maximize muscle tension while protecting joints.'
    },
    {
      icon: Zap,
      title: 'High-Density Turf Arena',
      description: 'Dedicated 40-yard athletic sprint lanes, prowler sled tracks, Plyo boxes, and Assault bikes for cardiovascular power.'
    },
    {
      icon: HeartPulse,
      title: 'Contrast Hydrotherapy',
      description: '38°F chilled immersion plunge tanks and dry Finnish infrared saunas designed to optimize cellular repair and central nervous recovery.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Subtle Section Transition Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Scroll-Triggered Fade-In & Slide-Up Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#ccff00] font-mono font-bold uppercase tracking-widest text-xs inline-block mb-3 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
            // THE APEX PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tighter">
            BUILT FOR GRIT. <span className="text-[#ccff00]">ZERO COMPROMISE.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            IronPulse was engineered to eliminate everything broken with commercial gym chains: crowded dumbbell racks, broken cables, and ego lifting. We created an unyielding ground for driven athletes.
          </p>
        </motion.div>

        {/* Bento Grid: 2-Column Modular Cards with Hover Scale + Shadow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
          {/* Bento Block 1: Story & Interactive Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: '0 25px 40px -15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(204, 255, 0, 0.08)',
              borderColor: '#3f3f46',
            }}
            className="lg:col-span-7 bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-800 flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ccff00]">
                  <Award className="w-4 h-4" />
                  <span>The Standard of Excellence</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">ZONE 01 // OVERVIEW</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight mb-3">
                Engineered to eliminate friction from your training session.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                From Olympic drop platforms with acoustic dampening to calibrated steel plates machined to within 10 grams of exact spec.
              </p>

              {/* Pillars list with Hover Animations */}
              <div className="space-y-2.5">
                {pillars.map((pillar, idx) => {
                  const IconComponent = pillar.icon;
                  const isSelected = activePillar === idx;
                  return (
                    <motion.div
                      key={pillar.title}
                      onClick={() => setActivePillar(idx)}
                      whileHover={{
                        scale: 1.015,
                        x: 3,
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.6), 0 0 15px rgba(204,255,0,0.06)',
                      }}
                      whileTap={{ scale: 0.99 }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-800/90 border-[#ccff00]/60 shadow-lg shadow-[#ccff00]/5'
                          : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`p-2 rounded-xl shrink-0 ${
                          isSelected ? 'bg-[#ccff00] text-black' : 'bg-zinc-800 text-[#ccff00]'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className={`text-sm font-heading font-black uppercase tracking-wide ${
                            isSelected ? 'text-[#ccff00]' : 'text-white'
                          }`}>
                            {pillar.title}
                          </h4>
                          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <motion.button
                onClick={onOpenJoinModal}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(204, 255, 0, 0.45)',
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="bg-[#ccff00] text-black px-7 py-3 rounded-full font-bold uppercase text-xs shadow-md shadow-[#ccff00]/20 cursor-pointer"
              >
                Book Facility Walkthrough
              </motion.button>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <Users className="w-4 h-4 text-[#ccff00]" />
                <span>Capped capacity (Max 50 on floor)</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Block 2: Live Facility Status & Visual with Hover Scale + Shadow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: '0 25px 40px -15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(204, 255, 0, 0.08)',
              borderColor: '#3f3f46',
            }}
            className="lg:col-span-5 bg-zinc-900 rounded-3xl border border-zinc-800 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-colors duration-300 group"
          >
            <div className="relative rounded-2xl overflow-hidden h-72 w-full mb-6 border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
                alt="IronPulse Member Deadlifting"
                className="w-full h-full object-cover filter brightness-90 contrast-120 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-[#ccff00] uppercase font-bold">
                // OLYMPIC ZONE 02
              </div>
            </div>

            {/* Capacity Bento Module */}
            <div className="bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
                  Live Floor Occupancy
                </span>
                <span className="text-xs font-mono text-[#ccff00] font-bold">19 / 50 Active</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '38%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                  className="bg-[#ccff00] h-full"
                />
              </div>
              <p className="text-[11px] text-zinc-400 mt-3 font-normal">
                Real-time occupancy synced via RFID turnstiles. Never wait for a squat rack or deadlift platform.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bento Stats Row: 4 Bento Cards with Staggered Entrance and Hover Animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GYM_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                scale: 1.04,
                boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.85), 0 0 20px rgba(204, 255, 0, 0.16)',
                borderColor: '#3f3f46',
              }}
              className="bg-zinc-900 rounded-3xl p-6 flex flex-col justify-center items-center border border-zinc-800 text-center transition-all duration-300 cursor-default"
            >
              <div className="text-3xl sm:text-4xl font-heading font-black text-[#ccff00] tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest mt-1 font-mono">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

