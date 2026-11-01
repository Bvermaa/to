import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, RotateCcw, Sparkles, MailOpen, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    if (!isOpen) {
      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.55 },
          colors: ['#EFA9C4', '#FCEBF2', '#FFF4E5'],
        });
      } catch (e) {}
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="letter" className="relative py-20 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FCEBF2] shadow-xs text-xs font-medium text-[#C66C91] mb-3"
        >
          <span>💌</span> Chapter One
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#594451] tracking-tight mb-3"
        >
          Something I don't say enough...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-[#9B8491] max-w-md mx-auto"
        >
          Click the envelope below to unfold what's inside.
        </motion.p>
      </div>

      {/* Interactive Letter Paper Container */}
      <div className="relative mx-auto max-w-2xl">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Closed Envelope View */
            <motion.div
              key="closed-envelope"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              onClick={toggleLetter}
              className="group cursor-pointer mx-auto max-w-lg bg-gradient-to-b from-[#FFFDF9] to-[#FCEBF2] rounded-3xl p-8 sm:p-12 border-2 border-dashed border-[#EFA9C4]/60 shadow-soft-lg hover:shadow-glow-pink hover:-translate-y-1 transition-all duration-300 relative text-center"
            >
              {/* Envelope flap aesthetic */}
              <div className="w-16 h-16 rounded-full bg-[#FFF4E5] border-2 border-[#EFA9C4] mx-auto flex items-center justify-center text-[#C66C91] mb-5 shadow-inner-soft group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#594451] mb-2">
                A Letter For You
              </h3>

              <p className="font-handwritten text-xl text-[#9B8491] mb-6">
                "Tap here to break the seal and read..."
              </p>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C66C91] text-white text-sm font-medium shadow-xs group-hover:bg-[#EFA9C4] transition-colors">
                <MailOpen className="w-4 h-4" />
                <span>Open Letter</span>
              </div>

              {/* Decorative stamp on the top right */}
              <div className="absolute top-4 right-5 w-12 h-14 bg-white border-2 border-dashed border-[#C66C91]/50 rounded-sm p-1 rotate-3 flex flex-col items-center justify-center shadow-xs">
                <span className="text-xs">🌸</span>
                <span className="text-[8px] font-mono font-bold text-[#C66C91]">FOR HER</span>
              </div>
            </motion.div>
          ) : (
            /* Open Letter Stationery View */
            <motion.div
              key="open-letter"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-14 border border-[#FCEBF2] shadow-soft-lg letter-paper"
            >
              {/* Cute Washi Tape Strip at Top */}
              <div className="tape-strip" />

              {/* Stamp in upper corner */}
              <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center w-14 h-16 bg-white border-2 border-dashed border-[#EFA9C4] rounded-sm p-1.5 rotate-2 shadow-xs">
                <Heart className="w-5 h-5 fill-[#EFA9C4] text-[#EFA9C4]" />
                <span className="text-[9px] font-mono text-[#9B8491] mt-0.5">AIR MAIL</span>
              </div>

              {/* Salutation */}
              <div className="mb-6">
                <span className="font-handwritten text-3xl sm:text-4xl text-[#C66C91] block">
                  Hey, you.
                </span>
                <span className="text-xs text-[#9B8491] tracking-wider uppercase font-semibold">
                  A gentle thought from a busy mind
                </span>
              </div>

              {/* Letter Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-[#594451] leading-relaxed font-body">
                <p>
                  I know I get busy sometimes.
                </p>

                <p>
                  Sometimes I get so caught up in work and everything happening around me that I forget that someone is waiting to tell me about her entire day.
                </p>

                <p className="text-[#C66C91] font-medium">
                  And I know that can get frustrating.
                </p>

                <p>
                  I might not always be available at the exact moment you want to talk, but that doesn't mean your little stories are unimportant to me.
                </p>

                <p>
                  Your random updates, your complaints, your excitement about going somewhere, your silly questions...
                </p>

                <p className="font-serif italic text-lg sm:text-xl text-[#594451] pl-4 border-l-2 border-[#EFA9C4]">
                  "I want to hear them."
                </p>

                <p>
                  Even the 27-minute story about something that happened at the gym.
                </p>

                <p className="font-semibold text-[#C66C91]">
                  Especially that one. 😂
                </p>

                <p>
                  You don't have to wait for something special to happen to tell me about your day.
                </p>

                <p>
                  I hope you never feel like your little stories are too small to share with me.
                </p>
              </div>

              {/* Signoff */}
              <div className="mt-10 pt-6 border-t border-[#FCEBF2] flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-[#9B8491]">With lots of appreciation,</p>
                  <p className="font-handwritten text-2xl sm:text-3xl text-[#C66C91] mt-1">
                    Someone who enjoys your endless stories. ♡
                  </p>
                </div>

                {/* Read again action */}
                <button
                  onClick={toggleLetter}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-[#FFF4E5] text-[#594451] hover:bg-[#FDECD2] border border-[#FDECD2] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#C66C91]" />
                  <span>Fold back & read again</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

