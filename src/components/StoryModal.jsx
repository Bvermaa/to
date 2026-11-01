import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function StoryModal({ story, isOpen, onClose }) {
  const [reacted, setReacted] = useState(false);

  if (!isOpen || !story) return null;

  const handleReaction = () => {
    setReacted(true);
    try {
      confetti({
        particleCount: 20,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#EFA9C4', '#FCEBF2', '#C66C91', '#FFF4E5'],
      });
    } catch (e) {}
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#594451]/40 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border-2 border-[#FCEBF2] shadow-soft-lg overflow-hidden z-10 my-8"
        >
          {/* Top Decorative Banner */}
          <div className="bg-gradient-to-r from-[#FCEBF2] via-[#FFF4E5] to-[#EAE3FA] p-6 pb-4 border-b border-[#FCEBF2] relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close story dialog"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 border border-[#FCEBF2] flex items-center justify-center text-[#594451] hover:bg-[#FCEBF2] hover:text-[#C66C91] transition-all shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Episode Badge & Emoji */}
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2.5 rounded-2xl bg-white shadow-xs border border-[#FCEBF2]">
                {story.emoji}
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#C66C91]">
                  Episode {story.number} • {story.badge}
                </span>
                <p className="text-xs text-[#9B8491]">{story.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Her message bubble */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EAE3FA] flex items-center justify-center text-xs font-bold text-[#594451] shrink-0 mt-1">
                You
              </div>
              <div className="bg-[#FFF4E5] border border-[#FDECD2] rounded-2xl rounded-tl-xs p-4 max-w-[85%] shadow-xs">
                <span className="text-xs font-semibold text-[#9B8491] block mb-1">
                  Your text to me:
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#594451]">
                  "{story.title}"
                </p>
              </div>
            </div>

            {/* My direct reply */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-gradient-to-br from-[#FDEFF4] to-[#FCEBF2] border border-[#EFA9C4]/40 rounded-2xl rounded-tr-xs p-5 max-w-[88%] shadow-xs text-right">
                <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-[#C66C91] mb-1">
                  <span>My instant reaction</span>
                  <Heart className="w-3.5 h-3.5 fill-[#C66C91]" />
                </div>
                <p className="font-body text-base sm:text-lg text-[#594451] font-medium leading-relaxed">
                  {story.response}
                </p>
                {story.followUp && (
                  <p className="font-handwritten text-xl text-[#9B8491] mt-3 pt-3 border-t border-[#EFA9C4]/30">
                    "{story.followUp}"
                  </p>
                )}
              </div>
              <div className="w-8 h-8 rounded-full bg-[#EFA9C4] flex items-center justify-center text-xs font-bold text-white shrink-0 mt-1 shadow-xs">
                Me
              </div>
            </div>

            {/* Reaction area */}
            <div className="pt-4 border-t border-[#FCEBF2] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleReaction}
                className={`w-full sm:w-auto px-4 py-2 rounded-full text-xs font-medium border transition-all flex items-center justify-center gap-1.5 ${
                  reacted
                    ? 'bg-[#EAE3FA] text-[#594451] border-[#C5B3E6]'
                    : 'bg-white hover:bg-[#FCEBF2] text-[#C66C91] border-[#EFA9C4]'
                }`}
              >
                {reacted ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Story filed in the archives 📁</span>
                  </>
                ) : (
                  <>
                    <span>😂</span>
                    <span>"I am dramatic, I admit it"</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#594451] hover:bg-[#C66C91] text-white text-xs font-medium transition-colors shadow-xs"
              >
                Done reading
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
