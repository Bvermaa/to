import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, ChevronDown, Flame } from 'lucide-react';

export default function WelcomeScreen({ onOpenSurprise }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    // Soft pastel confetti burst (petals, hearts, sparkles)
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#EFA9C4', '#FCEBF2', '#C66C91', '#FFF4E5', '#EAE3FA'],
        shapes: ['circle'],
        ticks: 200,
        gravity: 0.8,
        scalar: 1.1,
      });
    } catch (e) {
      // fallback silent
    }

    setTimeout(() => {
      onOpenSurprise();
      setIsOpening(false);
    }, 650);
  };

  return (
    <section
      id="welcome"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden"
    >
      {/* Dreamy soft gradient glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-tr from-[#FCEBF2] via-[#EFA9C4]/25 to-[#FFF4E5]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating decorative elements around the center */}
      <motion.div
        className="absolute top-28 left-[10%] sm:left-[22%] text-2xl select-none"
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute top-36 right-[12%] sm:right-[20%] text-xl select-none"
        animate={{ y: [0, -12, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ♨️
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[14%] sm:left-[24%] text-lg select-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute bottom-28 right-[15%] sm:right-[25%] text-2xl select-none"
        animate={{ y: [0, -8, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      >
        🧸
      </motion.div>

      {/* Little polaroid tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#FCEBF2] shadow-xs mb-6 text-xs sm:text-sm text-[#C66C91] font-medium"
      >
        <span className="w-2 h-2 rounded-full bg-[#EFA9C4] animate-ping" />
        <Sparkles className="w-3.5 h-3.5 text-[#C66C91]" />
        A warm sanctuary for painful days & endless stories
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#594451] tracking-tight mb-4 max-w-3xl leading-tight"
      >
        Hey, you. <br />
        <span className="text-[#C66C91] italic font-serif">Yes, YOU!</span> ♡
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg sm:text-xl md:text-2xl text-[#594451]/85 font-medium max-w-xl mx-auto mb-3"
      >
        Someone made a warm, cozy corner of the internet just for you.
      </motion.p>

      {/* Small supporting text */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="font-handwritten text-xl sm:text-2xl text-[#9B8491] max-w-md mx-auto mb-8"
      >
        "Especially for the days your tummy hurts and you need gentle warmth."
      </motion.p>

      {/* Envelope Centerpiece Card with 3D feel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative my-4 cursor-pointer group"
        onClick={handleOpen}
      >
        {/* Soft shadow layer */}
        <div className="absolute inset-0 bg-[#EFA9C4]/30 rounded-3xl blur-xl group-hover:bg-[#EFA9C4]/50 transition-all duration-300" />

        {/* Envelope Container */}
        <motion.div
          animate={isOpening ? { scale: 1.05, y: -6 } : { y: [0, -6, 0] }}
          transition={isOpening ? { duration: 0.3 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-72 sm:w-88 h-48 sm:h-56 bg-gradient-to-b from-[#FFFDF9] to-[#FFF4E5] rounded-3xl border-2 border-[#FCEBF2] shadow-soft-lg p-6 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#EFA9C4]"
        >
          {/* Envelope flap triangle visual */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-48 sm:w-60 h-16 bg-[#FFF4E5] rounded-b-2xl border-b border-x border-[#FCEBF2] shadow-inner-soft flex items-center justify-center">
            {/* Wax seal heart stamp */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C66C91] to-[#EFA9C4] flex items-center justify-center shadow-md border-2 border-white text-white"
            >
              <Heart className="w-5 h-5 fill-white" />
            </motion.div>
          </div>

          {/* Envelope body message */}
          <div className="mt-8 text-center">
            <span className="font-handwritten text-2xl text-[#C66C91] block mb-1">
              To: The Girl Who Deserves All The Warmth 💌
            </span>
            <span className="text-xs text-[#9B8491] tracking-wider uppercase font-medium">
              Click to break the seal
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Primary CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="mt-6"
      >
        <button
          onClick={handleOpen}
          disabled={isOpening}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C66C91] to-[#EFA9C4] text-white font-medium text-base sm:text-lg shadow-soft-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#EFA9C4]/40"
        >
          <span>Open your little surprise</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform">♡</span>
        </button>
      </motion.div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 flex flex-col items-center gap-1 text-xs text-[#9B8491]"
      >
        <span>scroll down gently</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-[#C66C91]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
