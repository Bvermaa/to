import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Music, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WelcomeGate({ onEnter, isUnlocked }) {
  const [opening, setOpening] = useState(false);

  if (isUnlocked) return null;

  const handleOpenWorld = () => {
    setOpening(true);

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#EFA9C4', '#FCEBF2', '#C66C91', '#FFF4E5', '#3b82f6'],
      });
    } catch (e) {}

    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        onClick={handleOpenWorld}
        className="fixed inset-0 z-50 bg-gradient-to-b from-[#FFF7FA] via-[#FCEBF2] to-[#FFF4E5] flex flex-col items-center justify-center p-6 text-center select-none cursor-pointer overflow-hidden"
      >
        {/* Soft background floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 left-12 text-3xl opacity-50"
        >
          🌸
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-12 text-3xl opacity-50"
        >
          💙
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/3 right-16 text-xl"
        >
          ✨
        </motion.div>

        {/* Centerpiece Envelope */}
        <motion.div
          animate={opening ? { scale: 1.1, y: -10 } : { y: [0, -8, 0] }}
          transition={opening ? { duration: 0.4 } : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative max-w-sm w-full bg-white/90 backdrop-blur-md rounded-[36px] p-8 sm:p-10 border-2 border-[#EFA9C4]/60 shadow-soft-lg flex flex-col items-center"
        >
          {/* Wax Heart Seal */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#C66C91] to-[#EFA9C4] border-4 border-white shadow-md flex items-center justify-center text-white mb-5 animate-pulse-heart">
            <Heart className="w-8 h-8 fill-white" />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C66C91] mb-2">
            A Little Corner Of The Internet
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#594451] mb-3">
            Made Just For You ♡
          </h2>

          <p className="font-handwritten text-xl sm:text-2xl text-[#9B8491] mb-6">
            "Turn on your sound & tap anywhere to enter..."
          </p>

          {/* Music Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF4E5] border border-amber-200 text-xs font-medium text-[#594451] mb-6 shadow-2xs">
            <Music className="w-3.5 h-3.5 text-[#3b82f6] animate-bounce" />
            <span>Playing: blue • yung kai 💙</span>
          </div>

          {/* CTA Button */}
          <button
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#C66C91] to-[#EFA9C4] text-white font-serif font-bold text-base shadow-soft hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Open My Little World</span>
            <Volume2 className="w-4 h-4 ml-1" />
          </button>
        </motion.div>

        <p className="mt-8 text-xs text-[#9B8491] font-mono">
          Tap anywhere on the screen to begin ♡
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
