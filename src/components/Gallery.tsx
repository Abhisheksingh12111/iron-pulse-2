import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';
import { Eye, X, ZoomIn, Camera, MapPin } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Zones' },
    { id: 'weights', label: 'Free Weights & Platforms' },
    { id: 'cardio', label: 'Sprint Turf & Conditioning' },
    { id: 'yoga', label: 'Mind & Mobility Studio' },
    { id: 'recovery', label: 'Cold Plunge & Recovery' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Subtle Section Transition Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Fade-in and Slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#ccff00] font-mono font-bold uppercase tracking-widest text-xs inline-block mb-3 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
            // VISUAL ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tighter">
            THE <span className="text-[#ccff00]">ARENA</span> IN ACTION
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            15,000 square feet of competition-grade iron, athletic sprint turf, and restorative contrast therapy suites.
          </p>

          {/* Interactive Filter Pills with Hover Animations */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: activeCategory === cat.id ? '0 0 20px rgba(204, 255, 0, 0.4)' : '0 0 15px rgba(255, 255, 255, 0.1)',
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#ccff00] text-black shadow-md shadow-[#ccff00]/25'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Animated Image Grid - Staggered Scroll Animation with Hover Scale + Glow Shadow */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.025,
                boxShadow: '0 25px 45px -12px rgba(0, 0, 0, 0.95), 0 0 25px rgba(204, 255, 0, 0.2)',
                borderColor: '#3f3f46',
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer shadow-lg transition-colors duration-300 h-72 sm:h-80"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-115"
                loading="lazy"
              />

              {/* Ambient overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top pill badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#ccff00] border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Center hover inspect button icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-[#ccff00] text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom text info */}
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-base font-heading font-black text-white uppercase tracking-tight group-hover:text-[#ccff00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-1 font-light">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery bottom callout */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
            <Camera className="w-4 h-4 text-[#ccff00]" />
            <span>Documented on-site at IronPulse Apex Arena. Tag #IronPulseTrained to feature.</span>
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveLightboxItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-zinc-900 rounded-3xl border border-zinc-700 overflow-hidden shadow-2xl"
            >
              <div className="relative max-h-[75vh] overflow-hidden">
                <img
                  src={activeLightboxItem.imageUrl}
                  alt={activeLightboxItem.title}
                  className="w-full h-full max-h-[70vh] object-cover"
                />
                <button
                  onClick={() => setActiveLightboxItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-[#ccff00] hover:text-black transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-zinc-900">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-zinc-800 text-[#ccff00] border border-zinc-700">
                      {activeLightboxItem.category} Zone
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-sm text-zinc-300 mt-1">
                    {activeLightboxItem.caption}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 shrink-0">
                  <MapPin className="w-4 h-4 text-[#ccff00]" />
                  <span>Downtown Arena Campus</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

