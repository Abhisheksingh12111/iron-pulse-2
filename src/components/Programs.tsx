import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAMS_DATA } from '../data/gymData';
import { Program } from '../types';
import { Dumbbell, Flame, Zap, Compass, CheckCircle2, Clock, Activity, ArrowRight, X, User } from 'lucide-react';

interface ProgramsProps {
  onOpenJoinModal: (programName?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenJoinModal }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredPrograms = activeFilter === 'All'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || p.intensity.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="programs" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Subtle Section Transition Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Scroll-triggered fade-in and slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#ccff00] font-mono font-bold uppercase tracking-widest text-xs inline-block mb-3 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
            // DISCIPLINE MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tighter">
            PRECISION <span className="text-[#ccff00]">PROGRAMS.</span> ELITE OUTPUT.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Engineered for maximal neural drive, structural hypertrophy, and metabolic longevity. Choose your domain of mastery.
          </p>

          {/* Bento Filter Pills with Hover Animations */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['All', 'Heavy Iron', 'Cardio Engine', 'Restoration', 'Custom Performance'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: activeFilter === category ? '0 0 20px rgba(204, 255, 0, 0.4)' : '0 0 15px rgba(255, 255, 255, 0.1)',
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 ${
                  activeFilter === category
                    ? 'bg-[#ccff00] text-black shadow-md shadow-[#ccff00]/25'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 4 Program Cards with Hover Animation: Scale Up + Glow Shadow Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPrograms.map((program, index) => {
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -8,
                  scale: 1.025,
                  boxShadow: '0 25px 45px -12px rgba(0, 0, 0, 0.95), 0 0 25px rgba(204, 255, 0, 0.18)',
                  borderColor: '#3f3f46',
                }}
                className="group relative rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between overflow-hidden shadow-lg transition-colors duration-300"
              >
                {/* Top Image Banner with Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                  
                  {/* Category & Intensity Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/10">
                      {program.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ccff00] text-black">
                      {program.intensity}
                    </span>
                  </div>

                  {/* Micro stats strip */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center gap-3 text-[11px] font-mono text-zinc-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-[#ccff00]" />
                      {program.caloriesBurn}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-zinc-900">
                  <div>
                    <h3 className="text-lg font-heading font-black text-white uppercase tracking-tight group-hover:text-[#ccff00] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-[#ccff00] font-mono mt-1">
                      {program.tagline}
                    </p>
                    <p className="text-xs text-zinc-400 mt-2.5 line-clamp-3 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Benefit Checklist */}
                    <div className="mt-4 pt-3.5 border-t border-zinc-800 space-y-1.5">
                      {program.benefits.slice(0, 3).map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                      <User className="w-3 h-3 text-[#ccff00]" />
                      <span className="truncate max-w-[100px]">{program.trainer}</span>
                    </div>

                    <motion.button
                      onClick={() => setSelectedProgram(program)}
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#ccff00] hover:text-white flex items-center gap-1 group/btn cursor-pointer py-1 px-2.5 rounded-md hover:bg-zinc-800 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Program Consultation Bento Note with Hover Scale + Shadow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            y: -3,
            scale: 1.01,
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.85), 0 0 20px rgba(204, 255, 0, 0.12)',
            borderColor: '#3f3f46',
          }}
          className="mt-6 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-colors duration-300"
        >
          <div>
            <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold tracking-widest block mb-1">
              // COACHING DIRECTORY
            </span>
            <h4 className="text-base font-heading font-black text-white uppercase tracking-tight">
              Unsure which discipline aligns with your current biomechanics?
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Every membership tier includes a comprehensive 1-on-1 functional movement assessment.
            </p>
          </div>
          <motion.button
            onClick={() => onOpenJoinModal('Movement Assessment')}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(204, 255, 0, 0.45)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 px-6 py-3 rounded-full bg-zinc-800 hover:bg-[#ccff00] hover:text-black border border-zinc-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Claim Free Assessment
          </motion.button>
        </motion.div>
      </div>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-3xl shadow-2xl overflow-hidden text-left"
            >
              <div className="relative h-56">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#ccff00] hover:text-black transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-mono uppercase font-bold px-3 py-1 rounded-full bg-[#ccff00] text-black">
                    {selectedProgram.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight mt-1.5">
                    {selectedProgram.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedProgram.description}
                </p>

                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Duration</span>
                    <span className="text-sm font-bold text-white">{selectedProgram.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Intensity</span>
                    <span className="text-sm font-bold text-[#ccff00]">{selectedProgram.intensity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Est. Burn</span>
                    <span className="text-sm font-bold text-white">{selectedProgram.caloriesBurn}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">Program Curriculum & Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProgram.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-xs text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">Head Coach: <strong className="text-white">{selectedProgram.trainer}</strong></span>
                  <button
                    onClick={() => {
                      const name = selectedProgram.title;
                      setSelectedProgram(null);
                      onOpenJoinModal(name);
                    }}
                    className="px-6 py-3 rounded-full bg-[#ccff00] hover:scale-105 text-black font-bold uppercase text-xs tracking-wider transition-all cursor-pointer"
                  >
                    Select This Program & Join
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

