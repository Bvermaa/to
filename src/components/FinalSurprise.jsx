import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sparkles, Heart, ChevronUp, Stars, Utensils, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalSurprise() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleReveal = () => {
    setShowEasterEgg(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#EFA9C4', '#FFE8A3', '#C66C91', '#FFF4E5', '#EAE3FA'],
      });
    } catch (e) {}
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="surprise" className="relative py-24 px-4 overflow-hidden">
      {/* Night Sky Card Wrapper */}
      <div className="max-w-4xl mx-auto relative rounded-[40px] bg-gradient-to-b from-[#2E202B] via-[#452D3E] to-[#59394E] text-[#FFF7FA] p-8 sm:p-14 md:p-18 border border-[#C66C91]/30 shadow-2xl overflow-hidden">
        {/* Nighttime Elements: Glowing Crescent Moon, Stars, Pink Clouds */}
        <div className="absolute top-10 right-10 sm:right-16 select-none">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-5xl sm:text-6xl filter drop-shadow-[0_0_20px_rgba(255,232,163,0.6)]"
          >
            🌙
          </motion.div>
        </div>

        {/* Floating Pink Clouds */}
        <motion.div
          animate={{ x: [-20, 20, -20], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-8 text-4xl select-none"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [20, -20, 20], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 right-12 text-3xl select-none"
        >
          ☁️
        </motion.div>

        {/* Scattered Twinkling Stars */}
        {[
          { top: '15%', left: '18%', delay: 0 },
          { top: '28%', left: '42%', delay: 1.5 },
          { top: '48%', right: '22%', delay: 0.8 },
          { top: '70%', left: '12%', delay: 2.2 },
          { top: '82%', right: '35%', delay: 1.2 },
        ].map((star, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-200 select-none text-xs"
            style={{ top: star.top, left: star.left, right: star.right }}
            animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 3.5, delay: star.delay, repeat: Infinity }}
          >
            ✦
          </motion.div>
        ))}

        {/* Chapter Header */}
        <div className="relative z-10 text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-[#EFA9C4] font-medium mb-3">
            <Stars className="w-3.5 h-3.5 text-amber-300" />
            The Final Page • Goodnight Warmth
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
            One last thing...
          </h2>
        </div>

        {/* Emotional Message */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-6 text-base sm:text-lg text-white/90 leading-relaxed font-body text-center">
          <p>
            Maybe I can't always be available at every single second.
          </p>

          <p>
            Especially on the days when your tummy is hurting, your energy feels depleted, and the cramps make you just want to curl up and hide away from the world.
          </p>

          <p className="font-serif text-xl sm:text-2xl text-[#EFA9C4] italic font-semibold">
            "Please don't ever think you have to suffer alone or stop sharing your world with me."
          </p>

          <p>
            Keep telling me about your day. Even when you're cranky. Even when you're crying for no reason.
          </p>

          <p className="font-semibold text-white">
            Especially then.
          </p>

          <p>
            And when you feel like I have disappeared into my work, remind me that there's someone waiting to be listened to, cared for, and comforted.
          </p>

          <p>
            I will always make time for you. Because your heart, your comfort, and your little stories are irreplaceable to me.
          </p>

          <p className="text-[#FFE8A3] font-medium text-lg sm:text-xl">
            Rest your eyes now. Keep your tummy warm. Tomorrow will be gentler on you.
          </p>

          <p className="font-serif text-3xl text-[#EFA9C4] pt-2">
            ♡
          </p>
        </div>

        {/* Interactive "One more thing?" Button */}
        <div className="relative z-10 text-center mt-12">
          {!showEasterEgg ? (
            <button
              onClick={handleReveal}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C66C91] to-[#EFA9C4] text-white font-medium text-sm sm:text-base shadow-glow-pink hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>One more thing?</span>
              <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg text-center"
            >
              <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-300/40 mx-auto mb-3 flex items-center justify-center text-xl">
                ♨️
              </div>
              <p className="font-serif text-xl sm:text-2xl text-amber-200 font-bold mb-2">
                "Did you reheat your heating pad? And did you drink warm water?"
              </p>
              <p className="font-handwritten text-xl text-[#EFA9C4] mt-3">
                Now pull that blanket all the way up, eat a chocolate, and rest. I'll be right here when you wake up. 😂🤍
              </p>
            </motion.div>
          )}

          {/* Dedicated Subtext */}
          <div className="mt-10 pt-8 border-t border-white/15 text-center">
            <p className="font-handwritten text-2xl text-[#EFA9C4] mb-2">
              Made with infinite care, just for you. ♡
            </p>
            <p className="text-xs text-white/60 tracking-wider">
              A tiny permanent corner of the internet for your pain, your comfort, and your endless stories
            </p>
          </div>
        </div>

        {/* Tiny glowing flowers along bottom */}
        <div className="absolute -bottom-2 inset-x-0 flex justify-around text-lg opacity-75 select-none pointer-events-none">
          <span>🌸</span>
          <span>✨</span>
          <span>♨️</span>
          <span>✨</span>
          <span>🌸</span>
        </div>
      </div>

      {/* Back to top button */}
      <div className="text-center mt-12">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#9B8491] hover:text-[#C66C91] bg-white/70 px-4 py-2 rounded-full border border-[#FCEBF2] shadow-xs transition-colors"
        >
          <ChevronUp className="w-4 h-4" />
          <span>Back to beginning</span>
        </button>
      </div>
    </section>
  );
}
