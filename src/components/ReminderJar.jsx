import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, RefreshCw, BookmarkCheck, Trash2, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { remindersData } from '../data/reminders';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function ReminderJar({ onFavoritesChange }) {
  const [favorites, setFavorites] = useLocalStorage('for_you_favorite_reminders', []);
  const [drawnHistory, setDrawnHistory] = useLocalStorage('for_you_jar_drawn', []);
  const [currentNote, setCurrentNote] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showFavoritesList, setShowFavoritesList] = useState(false);

  // Sync favorite count up to parent navbar
  useEffect(() => {
    if (onFavoritesChange) {
      onFavoritesChange(favorites.length);
    }
  }, [favorites, onFavoritesChange]);

  const drawNote = () => {
    if (isDrawing) return;
    setIsDrawing(true);

    // Filter available notes that haven't been shown in this cycle
    let remaining = remindersData.filter(item => !drawnHistory.includes(item.id));

    // If all shown, reset cycle
    if (remaining.length === 0) {
      remaining = [...remindersData];
      setDrawnHistory([]);
    }

    // Pick random note from remaining
    const randomIndex = Math.floor(Math.random() * remaining.length);
    const chosenNote = remaining[randomIndex];

    try {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#EFA9C4', '#FFF4E5', '#EAE3FA', '#C66C91'],
      });
    } catch (e) {}

    setTimeout(() => {
      setCurrentNote(chosenNote);
      setDrawnHistory(prev => {
        const next = [...prev, chosenNote.id];
        return next.length >= remindersData.length ? [] : next;
      });
      setIsDrawing(false);
    }, 450);
  };

  const toggleFavorite = (note) => {
    if (favorites.some(f => f.id === note.id)) {
      setFavorites(favorites.filter(f => f.id !== note.id));
    } else {
      setFavorites([...favorites, note]);
      try {
        confetti({
          particleCount: 15,
          spread: 35,
          colors: ['#C66C91', '#EFA9C4'],
        });
      } catch (e) {}
    }
  };

  const isFavorited = (noteId) => favorites.some(f => f.id === noteId);

  return (
    <section id="jar" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FCEBF2] shadow-xs text-xs font-medium text-[#C66C91] mb-3"
        >
          <span>🫙</span> Chapter Four • Little Notes
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#594451] tracking-tight mb-3"
        >
          A jar full of little reminders.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9B8491] max-w-lg mx-auto"
        >
          Whenever you need a gentle word, reach into the jar. Tap to draw a folded note.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Side: Illustrated Glass Jar */}
        <div className="md:col-span-5 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={drawNote}
            className="group cursor-pointer relative w-64 h-80 sm:w-72 sm:h-92 flex flex-col items-center justify-end p-6 select-none"
            role="button"
            aria-label="Draw a reminder note from jar"
          >
            {/* Glowing Jar Aura */}
            <div className="absolute inset-x-8 inset-y-6 bg-gradient-to-t from-[#EFA9C4]/30 via-[#FFF4E5]/40 to-transparent rounded-full blur-2xl group-hover:bg-[#EFA9C4]/45 transition-all" />

            {/* Jar Lid with Ribbon & Tag */}
            <div className="relative z-10 w-44 sm:w-48 h-9 bg-gradient-to-b from-[#FFF4E5] to-[#FDECD2] rounded-t-xl border-2 border-amber-200/80 shadow-md flex items-center justify-center">
              {/* Wooden lid groove */}
              <div className="w-36 h-2 bg-amber-100 rounded-full" />
              {/* Ribbon tie */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 h-2.5 bg-[#C66C91] rounded-full shadow-xs flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#EFA9C4] border border-white" />
              </div>
            </div>

            {/* Glass Jar Body */}
            <div className="relative z-0 w-56 sm:w-64 h-64 sm:h-72 -mt-1 bg-white/40 backdrop-blur-md rounded-b-[42px] rounded-t-lg border-2 border-white/80 shadow-soft-lg flex flex-col justify-end p-5 overflow-hidden">
              {/* Glass reflections */}
              <div className="absolute top-4 left-4 w-2 h-36 bg-white/70 rounded-full blur-xs" />
              <div className="absolute top-4 right-4 w-1.5 h-24 bg-white/40 rounded-full blur-xs" />

              {/* Jar Tag on glass */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-xl bg-white/85 border border-[#FCEBF2] shadow-xs text-center z-10">
                <span className="font-handwritten text-lg text-[#C66C91] font-bold block leading-none">
                  For You ♡
                </span>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-[#9B8491]">
                  10 Folded Notes
                </span>
              </div>

              {/* Folded paper notes resting inside the jar */}
              <div className="relative z-0 flex flex-wrap gap-2 justify-center items-end pb-3 opacity-90">
                {remindersData.map((item, idx) => {
                  const colors = ['bg-[#FFF4E5]', 'bg-[#FCEBF2]', 'bg-[#EAE3FA]', 'bg-[#FDEFF4]'];
                  const color = colors[idx % colors.length];
                  const rotations = [-14, 8, -6, 12, -18, 5, -10, 15, -4, 9];
                  return (
                    <motion.div
                      key={item.id}
                      animate={isDrawing ? { y: [0, -8, 0], rotate: rotations[idx] * 1.2 } : {}}
                      transition={{ duration: 0.3 }}
                      style={{ transform: `rotate(${rotations[idx]}deg)` }}
                      className={`w-9 sm:w-10 h-7 sm:h-8 rounded-lg shadow-2xs border border-white/70 flex items-center justify-center text-xs ${color}`}
                    >
                      <span className="text-[10px]">{item.emoji}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom glass thickness */}
              <div className="absolute bottom-0 inset-x-0 h-4 bg-white/60 border-t border-white/50" />
            </div>

            {/* Click to draw label below jar */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#9B8491] group-hover:text-[#C66C91] font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C66C91]" />
              <span>Tap jar to pull a note</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Active Note Display & Saved Area */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {currentNote ? (
              /* Revealed Note Card */
              <motion.div
                key={currentNote.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#FCEBF2] shadow-soft-lg relative overflow-hidden"
              >
                {/* Washi tape strip */}
                <div className="tape-strip" />

                {/* Note Header */}
                <div className="flex items-center justify-between mb-6 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{currentNote.emoji}</span>
                    <span className="text-xs uppercase font-mono tracking-wider text-[#9B8491] font-bold">
                      {currentNote.category}
                    </span>
                  </div>

                  {/* Favorite Heart Button */}
                  <button
                    onClick={() => toggleFavorite(currentNote)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs transition-all duration-200"
                    style={{
                      backgroundColor: isFavorited(currentNote.id) ? '#FDEFF4' : '#FFFFFF',
                      borderColor: isFavorited(currentNote.id) ? '#EFA9C4' : '#FCEBF2',
                      color: isFavorited(currentNote.id) ? '#C66C91' : '#9B8491',
                    }}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorited(currentNote.id)
                          ? 'fill-[#C66C91] text-[#C66C91]'
                          : 'text-[#9B8491]'
                      }`}
                    />
                    <span>{isFavorited(currentNote.id) ? 'Saved' : 'Save note'}</span>
                  </button>
                </div>

                {/* The Message */}
                <div className="my-6">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#594451] leading-relaxed">
                    "{currentNote.text}"
                  </p>
                </div>

                {/* Action footer */}
                <div className="pt-4 border-t border-[#FCEBF2] flex flex-wrap items-center justify-between gap-3 text-xs text-[#9B8491]">
                  <span>
                    Note {drawnHistory.length} of {remindersData.length} in this cycle
                  </span>

                  <button
                    onClick={drawNote}
                    disabled={isDrawing}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFA9C4] hover:bg-[#C66C91] text-white font-medium transition-colors shadow-xs"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isDrawing ? 'animate-spin' : ''}`} />
                    <span>Draw another note</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Placeholder before first draw */
              <div className="bg-white/70 backdrop-blur-xs rounded-3xl p-8 sm:p-10 border border-dashed border-[#EFA9C4]/50 text-center">
                <span className="text-4xl block mb-3">✨</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#594451] mb-2">
                  The jar is waiting for your touch
                </h3>
                <p className="text-sm text-[#9B8491] max-w-sm mx-auto mb-6">
                  There are 10 little reminders folded inside. Click the jar or the button below to draw one.
                </p>
                <button
                  onClick={drawNote}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C66C91] hover:bg-[#EFA9C4] text-white font-medium shadow-soft transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Pick a folded note</span>
                </button>
              </div>
            )}
          </AnimatePresence>

          {/* Favorites Area Toggle */}
          <div className="mt-6 flex items-center justify-between px-2">
            <button
              onClick={() => setShowFavoritesList(!showFavoritesList)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C66C91] hover:text-[#594451] transition-colors"
            >
              <Heart className="w-4 h-4 fill-[#C66C91]" />
              <span>
                My favourite notes ({favorites.length}) {showFavoritesList ? '▲ Hide' : '▼ View saved'}
              </span>
            </button>
          </div>

          {/* Saved Favorites Drawer */}
          <AnimatePresence>
            {showFavoritesList && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white rounded-3xl p-5 border border-[#FCEBF2] shadow-soft overflow-hidden"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#FCEBF2] mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#9B8491]">
                    Saved into your heart
                  </span>
                  <span className="font-handwritten text-lg text-[#C66C91]">
                    {favorites.length} saved
                  </span>
                </div>

                {favorites.length === 0 ? (
                  <p className="text-xs text-[#9B8491] text-center py-4">
                    No notes saved yet. When you pull a note you like, tap the heart icon to save it here!
                  </p>
                ) : (
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {favorites.map((fav) => (
                      <div
                        key={fav.id}
                        className="p-3 rounded-2xl bg-[#FFF7FA] border border-[#FCEBF2] flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span>{fav.emoji}</span>
                          <span className="text-[#594451] font-medium font-serif">
                            "{fav.text}"
                          </span>
                        </div>
                        <button
                          onClick={() => toggleFavorite(fav)}
                          className="p-1 text-[#9B8491] hover:text-[#C66C91] transition-colors shrink-0"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
