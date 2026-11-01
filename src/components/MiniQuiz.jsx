import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, CheckCircle2, RotateCcw, ArrowRight, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizQuestions, quizResult } from '../data/quiz';

export default function MiniQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizQuestions[currentIndex];

  const handleSelectOption = (option) => {
    if (showAnswerFeedback) return;
    setSelectedOption(option);
    setShowAnswerFeedback(true);

    try {
      confetti({
        particleCount: 20,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#EFA9C4', '#FCEBF2', '#C66C91', '#FFF4E5'],
      });
    } catch (e) {}
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowAnswerFeedback(false);
    } else {
      setIsFinished(true);
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#FFE8A3', '#EFA9C4', '#C66C91', '#FFF4E5', '#EAE3FA'],
          ticks: 300,
        });
      } catch (e) {}
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowAnswerFeedback(false);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="py-20 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FCEBF2] shadow-xs text-xs font-medium text-[#C66C91] mb-3"
        >
          <span>🏆</span> Chapter Six • Evaluation Time
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#594451] tracking-tight mb-3"
        >
          Okay, one important question...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9B8491] max-w-md mx-auto"
        >
          A highly scientific 3-question inquiry into your daily broadcast habits.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            /* Question Card */
            <motion.div
              key={currentQ.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-[#FCEBF2] shadow-soft-lg relative"
            >
              {/* Top Progress */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C66C91]">
                  {currentQ.questionNumber}
                </span>
                <div className="flex items-center gap-1.5">
                  {quizQuestions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? 'w-6 bg-[#C66C91]'
                          : i < currentIndex
                          ? 'w-2 bg-[#EFA9C4]'
                          : 'w-2 bg-[#FCEBF2]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#594451] mb-2">
                "{currentQ.question}"
              </h3>
              <p className="text-xs text-[#9B8491] mb-6">
                {currentQ.subtitle}
              </p>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option) => {
                  const isSelected = selectedOption?.id === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      disabled={showAnswerFeedback}
                      className={`w-full p-4 rounded-2xl text-left text-sm sm:text-base transition-all duration-200 border flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#FDEFF4] border-[#C66C91] text-[#594451] shadow-xs font-medium'
                          : showAnswerFeedback
                          ? 'bg-[#FFF7FA] border-[#FCEBF2] text-[#9B8491] opacity-70'
                          : 'bg-white hover:bg-[#FFF7FA] border-[#FCEBF2] text-[#594451] hover:border-[#EFA9C4]'
                      }`}
                    >
                      <span>{option.text}</span>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-[#C66C91] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Reveal Box */}
              <AnimatePresence>
                {showAnswerFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-5 rounded-2xl bg-[#FFF4E5] border border-[#FDECD2] mb-6 space-y-2"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#C66C91] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      Official Verdict
                    </div>
                    <p className="text-sm sm:text-base text-[#594451] font-medium leading-relaxed">
                      {currentQ.funnyResponse}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {showAnswerFeedback && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C66C91] hover:bg-[#EFA9C4] text-white font-medium text-sm transition-all shadow-soft"
                  >
                    <span>
                      {currentIndex === quizQuestions.length - 1
                        ? 'Reveal Official Title 🏆'
                        : 'Next Question'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            /* Celebration End Screen */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF8FA] to-[#FFF4E5] rounded-3xl p-8 sm:p-12 border-2 border-[#EFA9C4] shadow-soft-lg text-center relative overflow-hidden"
            >
              {/* Confetti Ribbon Visual */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FFE8A3] to-[#FFF4E5] border-2 border-amber-300 mx-auto mb-4 flex items-center justify-center text-3xl shadow-soft">
                🏆
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold tracking-wider mb-3">
                {quizResult.badge}
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#594451] mb-4">
                Congratulations!
              </h3>

              <div className="p-6 rounded-2xl bg-white/90 border border-[#FCEBF2] shadow-xs mb-6 max-w-lg mx-auto">
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#C66C91] mb-3">
                  "You've officially been appointed CEO of Random Updates."
                </p>
                <p className="text-xs sm:text-sm text-[#594451] leading-relaxed">
                  {quizResult.description}
                </p>
                <p className="font-handwritten text-xl text-[#9B8491] mt-3">
                  {quizResult.signature}
                </p>
              </div>

              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#FCEBF2] border border-[#FCEBF2] text-[#594451] text-xs font-medium transition-colors shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#C66C91]" />
                <span>Retake Quiz</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
