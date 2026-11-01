import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Disc, ChevronUp, ChevronDown, Sparkles, Heart, Volume2, ListMusic } from 'lucide-react';
import { websiteConfig } from '../data/config';

export default function SpotifyPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  const tracks = websiteConfig.spotify.tracks;
  const currentTrack = tracks[selectedTrackIndex] || tracks[0];

  return (
    <>
      {/* Floating Spotify Music Dock in Bottom-Left corner */}
      <div className="fixed bottom-5 left-5 z-40 max-w-sm sm:max-w-md select-none">
        <AnimatePresence>
          {isOpen ? (
            /* Expanded Floating Music Player */
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border-2 border-[#FCEBF2] shadow-soft-lg w-[320px] sm:w-[380px] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#FCEBF2]">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#1DB954]/15 flex items-center justify-center text-emerald-600">
                    <Music className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#594451] flex items-center gap-1.5">
                      <span>Cozy Music</span>
                      <span className="text-xs text-[#C66C91]">🎧</span>
                    </h4>
                    <span className="text-[10px] text-[#9B8491] block">
                      Curated for your cramp days & quiet moments
                    </span>
                  </div>
                </div>

                {/* Minimize Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Minimize music player"
                  className="p-1.5 rounded-full hover:bg-[#FCEBF2] text-[#9B8491] hover:text-[#C66C91] transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Embedded Official Spotify Player */}
              <div className="rounded-2xl overflow-hidden shadow-inner-soft bg-black/5 mb-3">
                <iframe
                  title={`Spotify Player - ${currentTrack.title}`}
                  src={currentTrack.embedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-2xl"
                />
              </div>

              {/* Playlist Switcher */}
              <div>
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9B8491] font-bold flex items-center gap-1">
                    <ListMusic className="w-3 h-3 text-[#C66C91]" />
                    Comfort Playlist ({tracks.length})
                  </span>
                  <span className="text-[10px] font-handwritten text-[#C66C91] text-sm">
                    tap to switch 🤍
                  </span>
                </div>

                <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  {tracks.map((track, idx) => {
                    const isSelected = selectedTrackIndex === idx;
                    return (
                      <button
                        key={track.id}
                        onClick={() => setSelectedTrackIndex(idx)}
                        className={`w-full p-2 rounded-xl text-left text-xs transition-all flex items-center justify-between border ${
                          isSelected
                            ? 'bg-[#FDEFF4] border-[#EFA9C4] text-[#C66C91] font-semibold shadow-xs'
                            : 'bg-[#FFF7FA] hover:bg-[#FFF4E5] border-transparent text-[#594451]'
                        }`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <span className="text-xs shrink-0">
                            {isSelected ? '▶️' : '🎵'}
                          </span>
                          <div className="truncate">
                            <span className="block truncate font-serif">{track.title}</span>
                            <span className="text-[10px] text-[#9B8491] block truncate font-normal">
                              {track.artist}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] text-[#C66C91] shrink-0 font-handwritten text-xs ml-2">
                          {track.mood}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-[#FCEBF2] text-center">
                <p className="text-[10px] text-[#9B8491] font-handwritten text-xs">
                  "Close your eyes and breathe gently. You are safe here."
                </p>
              </div>
            </motion.div>
          ) : (
            /* Minimized Floating Pill */
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#FCEBF2] shadow-soft-lg hover:border-[#EFA9C4] transition-all"
            >
              {/* Spinning Disc Animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#1DB954] to-[#C66C91] flex items-center justify-center text-white shadow-2xs shrink-0"
              >
                <Disc className="w-3.5 h-3.5" />
              </motion.div>

              <div className="text-left">
                <span className="text-xs font-serif font-bold text-[#594451] block leading-tight group-hover:text-[#C66C91] transition-colors">
                  {currentTrack.title}
                </span>
                <span className="text-[10px] text-[#9B8491] font-mono block leading-tight">
                  {currentTrack.mood}
                </span>
              </div>

              <ChevronUp className="w-4 h-4 text-[#9B8491] group-hover:text-[#C66C91] transition-colors ml-1" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
