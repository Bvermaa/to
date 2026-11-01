import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Sun, Cloud, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { flowersData } from '../data/flowers';

export default function FlowerGarden() {
  const [activeFlower, setActiveFlower] = useState(null);
  const [wateredCount, setWateredCount] = useState(0);

  const handleFlowerClick = (flower) => {
    setActiveFlower(flower);
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.65 },
        colors: [flower.color, '#FFF4E5', '#EAE3FA', '#A8D5BA'],
        shapes: ['circle'],
      });
    } catch (e) {}
  };

  const showerPetals = () => {
    setWateredCount(prev => prev + 1);
    try {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.3 },
        colors: ['#FFC6D9', '#EFA9C4', '#F8D7E3', '#FFE8A3', '#C5B3E6'],
        gravity: 0.6,
        ticks: 250,
      });
    } catch (e) {}
  };

  return (
    <section id="garden" className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FCEBF2] shadow-xs text-xs font-medium text-[#C66C91] mb-3"
        >
          <span>🌷</span> Chapter Five • Little Sanctuary
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#594451] tracking-tight mb-3"
        >
          A Little Garden
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9B8491] max-w-md mx-auto"
        >
          Tap any flower to whisper its secret note.
        </motion.p>
      </div>

      {/* Garden Meadow Container */}
      <div className="relative rounded-3xl overflow-hidden border border-[#FCEBF2] shadow-soft-lg bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F8] to-[#E8F5EE] pt-10 pb-0">
        {/* Sky Elements: Warm Sun & Gentle Drifting Clouds */}
        <div className="absolute top-4 left-6 flex items-center gap-2 select-none opacity-80">
          <Cloud className="w-8 h-8 text-white/90 fill-white drop-shadow-xs" />
          <Cloud className="w-5 h-5 text-white/80 fill-white drop-shadow-xs hidden sm:block" />
        </div>

        {/* Warm Sunlight in upper right */}
        <div className="absolute top-4 right-8 flex items-center gap-2 select-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFE8A3] to-[#FFF4E5] flex items-center justify-center shadow-glow-pink"
          >
            <Sun className="w-6 h-6 text-amber-500/80" />
          </motion.div>
        </div>

        {/* Flying Butterfly */}
        <motion.div
          className="absolute text-xl pointer-events-none select-none z-10"
          animate={{
            x: [20, 180, 80, 260, 20],
            y: [40, 20, 80, 30, 40],
            rotate: [0, 15, -10, 20, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        >
          🦋
        </motion.div>

        {/* Interaction Bar at the top of the garden */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 mb-8">
          <div className="text-xs text-[#9B8491] bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#FCEBF2]">
            <span>🌱 Flowers in bloom: 6 of 6</span>
          </div>

          <button
            onClick={showerPetals}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-[#FFF4E5] border border-[#FDECD2] text-xs font-medium text-[#594451] shadow-xs transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Make petals rain 🌸</span>
            {wateredCount > 0 && <span className="text-[10px] text-[#C66C91]">({wateredCount})</span>}
          </button>
        </div>

        {/* Flowers Bed - Swaying in the breeze */}
        <div className="relative z-10 px-4 sm:px-8 pb-12 pt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-end justify-items-center">
            {flowersData.map((flower, idx) => {
              const isSelected = activeFlower?.id === flower.id;
              return (
                <div key={flower.id} className="flex flex-col items-center">
                  {/* Floating tooltip preview on hover */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFlowerClick(flower)}
                    className="cursor-pointer group flex flex-col items-center focus:outline-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect ${flower.name}`}
                  >
                    {/* Flower Head SVG / Illustration with gentle sway */}
                    <motion.div
                      animate={{
                        rotate: [idx % 2 === 0 ? -4 : 4, idx % 2 === 0 ? 5 : -5, idx % 2 === 0 ? -4 : 4],
                      }}
                      transition={{
                        duration: 3.5 + idx * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative p-2"
                    >
                      {/* Aura when selected */}
                      {isSelected && (
                        <motion.div
                          layoutId="flower-glow"
                          className="absolute inset-0 rounded-full blur-md"
                          style={{ backgroundColor: `${flower.color}80` }}
                        />
                      )}

                      {/* Flower Custom SVG */}
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 100 100"
                        className="filter drop-shadow-xs transition-transform duration-300 group-hover:scale-115"
                      >
                        {/* Petals */}
                        <circle cx="50" cy="28" r="16" fill={flower.color} opacity="0.9" />
                        <circle cx="70" cy="42" r="16" fill={flower.color} opacity="0.9" />
                        <circle cx="62" cy="66" r="16" fill={flower.color} opacity="0.9" />
                        <circle cx="38" cy="66" r="16" fill={flower.color} opacity="0.9" />
                        <circle cx="30" cy="42" r="16" fill={flower.color} opacity="0.9" />
                        {/* Core center */}
                        <circle cx="50" cy="48" r="13" fill="#FFF4E5" stroke={flower.accent} strokeWidth="2.5" />
                        <circle cx="50" cy="48" r="6" fill={flower.accent} opacity="0.8" />
                      </svg>
                    </motion.div>

                    {/* Stem & Leaves */}
                    <div className="flex flex-col items-center -mt-2">
                      <div className="w-1.5 h-14 bg-gradient-to-b from-[#82B89A] to-[#60997A] rounded-full relative">
                        {/* Tiny leaf */}
                        <div
                          className={`absolute ${
                            idx % 2 === 0 ? '-left-2 top-3 -rotate-30' : '-right-2 top-5 rotate-30'
                          } w-3.5 h-2 bg-[#82B89A] rounded-full`}
                        />
                      </div>
                    </div>

                    {/* Name tag on lawn */}
                    <div className="mt-2 text-center">
                      <span className="text-xs font-serif font-bold text-[#594451] block group-hover:text-[#C66C91] transition-colors">
                        {flower.name}
                      </span>
                      <span className="text-[10px] text-[#9B8491] font-mono">
                        tap to reveal
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Lush Grass Hill Base */}
        <div className="relative h-14 bg-gradient-to-t from-[#82B89A]/40 to-[#A8D5BA]/30 border-t border-[#82B89A]/30 flex items-center justify-center px-4">
          <p className="font-handwritten text-lg sm:text-xl text-[#594451]/80 text-center">
            "A garden where every petal carries a thought meant just for you."
          </p>
        </div>
      </div>

      {/* Flower Revealed Message Modal */}
      <AnimatePresence>
        {activeFlower && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFlower(null)}
              className="fixed inset-0 bg-[#594451]/30 backdrop-blur-2xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative w-full max-w-md bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-2 shadow-soft-lg z-10 text-center"
              style={{ borderColor: activeFlower.color }}
            >
              <button
                onClick={() => setActiveFlower(null)}
                aria-label="Close flower message"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-[#FCEBF2] flex items-center justify-center text-[#594451] hover:bg-[#FCEBF2]"
              >
                <X className="w-4 h-4" />
              </button>

              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-inner-soft"
                style={{ backgroundColor: `${activeFlower.color}35` }}
              >
                <span className="text-3xl">🌸</span>
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-[#9B8491] font-semibold">
                {activeFlower.name}
              </span>

              <div className="my-5 p-5 rounded-2xl bg-[#FFF7FA] border border-[#FCEBF2]">
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#594451] leading-relaxed">
                  "{activeFlower.message}"
                </p>
              </div>

              <p className="font-handwritten text-lg text-[#C66C91] mb-6">
                ~ {activeFlower.meaning} ~
              </p>

              <button
                onClick={() => setActiveFlower(null)}
                className="w-full py-2.5 rounded-full text-xs font-semibold text-white shadow-xs transition-colors"
                style={{ backgroundColor: activeFlower.accent }}
              >
                Place flower back in garden 🤍
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

