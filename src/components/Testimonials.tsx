import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/gymData';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Play, Pause } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const current = TESTIMONIALS_DATA[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 28 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -250 : 250,
      opacity: 0,
      scale: 0.97,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-[#050505] relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Subtle Section Transition Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fade-in and Slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#ccff00] font-mono font-bold uppercase tracking-widest text-xs inline-block mb-3 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
            // MEMBER METRICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tighter">
            PROVEN BY <span className="text-[#ccff00]">ATHLETES</span> IN THE ARENA
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Quantifiable biological feedback and strength breakthroughs documented by our verified community.
          </p>
        </motion.div>

        {/* Carousel Bento Container */}
        <div className="max-w-4xl mx-auto relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              whileHover={{
                y: -4,
                scale: 1.01,
                boxShadow: '0 25px 45px -12px rgba(0, 0, 0, 0.95), 0 0 25px rgba(204, 255, 0, 0.12)',
                borderColor: '#3f3f46',
              }}
              className="w-full bg-zinc-900 rounded-3xl border border-zinc-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-8 w-20 h-20 text-white/5 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Side: Avatar, Member Info & Concrete Metric */}
                <div className="md:col-span-4 flex flex-col items-center text-center md:border-r md:border-zinc-800 md:pr-8">
                  <div className="relative mb-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#ccff00] shadow-lg shadow-[#ccff00]/20"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-black p-1.5 rounded-full border border-zinc-700 text-[#ccff00]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight">
                    {current.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {current.role}
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(current.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-[#ccff00] text-[#ccff00]" />
                    ))}
                  </div>

                  {/* Metric Bento Pod */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="mt-5 w-full p-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-center font-mono transition-transform"
                  >
                    <span className="text-[10px] uppercase font-bold text-zinc-500 block">
                      {current.metricLabel}
                    </span>
                    <span className="text-lg sm:text-xl font-heading font-black text-[#ccff00]">
                      {current.highlightMetric}
                    </span>
                  </motion.div>
                </div>

                {/* Right Side: Detailed Quote & Program Info */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-800 text-[#ccff00] border border-zinc-700">
                      {current.program}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">• {current.timeframe}</span>
                  </div>

                  <blockquote className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed italic">
                    "{current.content}"
                  </blockquote>

                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span className="text-[#ccff00]">● Verified Active Member</span>
                    <span className="text-zinc-600">ID #{current.id.replace('test-', '00')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-5 mt-6">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 20px rgba(204, 255, 0, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black text-white transition-colors duration-200 cursor-pointer shadow-lg"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => goToSlide(idx)}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 h-2 bg-[#ccff00] shadow-sm shadow-[#ccff00]/40'
                    : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 20px rgba(204, 255, 0, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black text-white transition-colors duration-200 cursor-pointer shadow-lg"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </motion.button>

          {/* Autoplay Pause/Resume Toggle */}
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full text-zinc-500 hover:text-[#ccff00] ml-1 transition-colors cursor-pointer"
            title={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

