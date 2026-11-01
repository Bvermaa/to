import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Disc, Sparkles, Heart } from 'lucide-react';

export default function BackgroundMusic({ isUnlocked = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef(null);

  const sendCommand = (func, args = '') => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: func, args: args }),
        '*'
      );
    }
  };

  const playMusic = () => {
    sendCommand('unMute');
    sendCommand('playVideo');
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    sendCommand('pauseVideo');
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      sendCommand('unMute');
      setIsMuted(false);
    } else {
      sendCommand('mute');
      setIsMuted(true);
    }
  };

  // When user opens the welcome gate or touches the screen, start the song immediately!
  useEffect(() => {
    if (isUnlocked) {
      // Small timeout to allow iframe to be fully loaded
      const timer = setTimeout(() => {
        playMusic();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isUnlocked]);

  // Global fallback interaction listener
  useEffect(() => {
    const handleInteraction = () => {
      if (!isPlaying) {
        playMusic();
      }
    };

    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isPlaying]);

  return (
    <>
      {/* Hidden YouTube Audio Engine (plays full song 'blue' by yung kai on continuous loop) */}
      <div className="fixed -top-96 -left-96 w-1 h-1 opacity-0 pointer-events-none" aria-hidden="true">
        <iframe
          ref={iframeRef}
          id="youtube-bg-audio"
          title="yung kai - blue background audio"
          width="100"
          height="100"
          src="https://www.youtube.com/embed/IpFX2vq8HKw?enablejsapi=1&autoplay=1&loop=1&playlist=IpFX2vq8HKw&playsinline=1&controls=0&rel=0&iv_load_policy=3"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Floating Bottom Music Player Bar */}
      <div className="fixed bottom-5 right-5 z-40 select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#EFA9C4]/70 shadow-soft-lg hover:shadow-glow-pink transition-all"
        >
          {/* Vinyl Disc Icon with Smooth Rotation when playing */}
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isPlaying ? { duration: 4, repeat: Infinity, ease: 'linear' } : {}}
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#C66C91] to-[#EFA9C4] flex items-center justify-center text-white shadow-xs cursor-pointer shrink-0"
            title={isPlaying ? 'Pause music' : 'Play music'}
          >
            <Disc className="w-4 h-4" />
          </motion.div>

          {/* Song Info & Equalizer Wave */}
          <div className="text-left cursor-pointer" onClick={togglePlay}>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xs font-bold text-[#594451] block leading-tight">
                blue
              </span>
              <span className="text-[10px] text-[#9B8491] leading-tight">
                • yung kai
              </span>
              <span className="text-[10px] text-[#3b82f6]">💙</span>
            </div>

            {/* Pulsing Audio Equalizer Bars */}
            <div className="flex items-center gap-1 mt-1">
              {[0.4, 0.8, 0.5, 0.9, 0.3].map((height, i) => (
                <motion.span
                  key={i}
                  animate={
                    isPlaying
                      ? {
                          scaleY: [0.3, 1.2, 0.4, 1, 0.3],
                        }
                      : { scaleY: 0.2 }
                  }
                  transition={{
                    duration: 1 + i * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-1 h-2.5 bg-gradient-to-t from-[#C66C91] to-[#3b82f6] rounded-full origin-bottom"
                />
              ))}
              <span className="text-[9px] text-[#9B8491] font-mono ml-1.5">
                {isPlaying ? 'Playing throughout ♡' : 'Tap to play'}
              </span>
            </div>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            className="w-7 h-7 rounded-full bg-[#FFF4E5] hover:bg-[#FDECD2] border border-amber-200 text-[#594451] flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-[#594451]" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-[#594451] ml-0.5" />
            )}
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            className="w-7 h-7 rounded-full bg-white hover:bg-[#FDEFF4] border border-[#FCEBF2] text-[#9B8491] hover:text-[#C66C91] flex items-center justify-center transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-rose-500" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
        </motion.div>
      </div>
    </>
  );
}
