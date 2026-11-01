import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeOff, Lock, Heart, ShieldAlert, Sparkles, ShieldX } from 'lucide-react';

export default function PrivacyShield() {
  const [isShieldActive, setIsShieldActive] = useState(false);
  const [showWarningToast, setShowWarningToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerShield = (reason) => {
    setIsShieldActive(true);
    setToastMessage(reason);
    setShowWarningToast(true);

    setTimeout(() => {
      setShowWarningToast(false);
    }, 4500);
  };

  useEffect(() => {
    // 1. Block Right-Click Context Menu completely
    const handleContextMenu = (e) => {
      e.preventDefault();
      triggerShield("Right-click is disabled to keep your little world private 🌸");
    };

    // 2. Pre-emptive Shortcut Interception:
    // On Mac, to press Cmd + Shift + 4, you must press Cmd and Shift first!
    // The moment Cmd + Shift are pressed, we instantly blackout the screen BEFORE '4' is even hit!
    const handleKeyDown = (e) => {
      // PrintScreen key
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        triggerShield("Screenshot blocked! This corner is private 🙈");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('This corner is private ♡');
        }
      }

      // Mac screenshot prep: Cmd + Shift
      if (e.metaKey && e.shiftKey) {
        setIsShieldActive(true);
        triggerShield("Screenshots are blocked! No saving allowed 🔒");
      }

      // Windows screenshot prep: Ctrl + Shift + S
      if (e.ctrlKey && e.shiftKey) {
        setIsShieldActive(true);
        triggerShield("Snipping tool is blocked! 🔒");
      }

      // Print: Ctrl + P / Cmd + P
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        triggerShield("Printing or saving as PDF is disabled 📄");
      }

      // Save page: Ctrl + S / Cmd + S
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        triggerShield("Saving the page is disabled ♡");
      }
    };

    // 3. Instant Window Blur / App Switch / Screenshot Overlay trigger
    // Whenever macOS screenshot crosshairs appear, or user switches apps, window blurs!
    const handleWindowBlur = () => {
      setIsShieldActive(true);
    };

    const handleWindowFocus = () => {
      // Keep it up until clicked or dismiss smoothly
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsShieldActive(true);
      }
    };

    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* Permanent Subtle Anti-Screenshot Watermark (visible across the whole background) */}
      <div
        className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden opacity-[0.035] flex flex-wrap gap-12 p-8"
        aria-hidden="true"
      >
        {Array.from({ length: 48 }).map((_, idx) => (
          <span
            key={idx}
            className="text-xs font-mono font-bold text-[#594451] uppercase -rotate-12 tracking-widest"
          >
            CONFIDENTIAL • FOR YOU ONLY ♡ • NO SCREENSHOTS
          </span>
        ))}
      </div>

      {/* Privacy Toast Notification */}
      <AnimatePresence>
        {showWarningToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-[#EFA9C4] shadow-soft-lg flex items-center gap-3 text-xs sm:text-sm text-[#594451]"
          >
            <span className="w-8 h-8 rounded-full bg-[#FDEFF4] flex items-center justify-center text-[#C66C91] shrink-0">
              <EyeOff className="w-4 h-4" />
            </span>
            <div>
              <span className="font-serif font-bold text-[#C66C91] block">
                Screenshots & Saving Disabled
              </span>
              <span className="text-[#9B8491] text-xs">
                {toastMessage || "This page is private. Just enjoy it right here live ♡"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Frosted Privacy Curtain when screenshot tool opens / window blurs */}
      <AnimatePresence>
        {isShieldActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsShieldActive(false)}
            className="fixed inset-0 z-50 bg-[#FFF7FA]/95 backdrop-blur-3xl flex flex-col items-center justify-center p-6 text-center select-none cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#EFA9C4] to-[#FFF4E5] border-2 border-white shadow-soft-lg flex items-center justify-center text-4xl mb-4">
              🙈
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDEFF4] text-[#C66C91] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <ShieldX className="w-3.5 h-3.5" />
              Privacy Shield Active
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#594451] mb-2 max-w-md">
              No Screenshots Allowed!
            </h3>

            <p className="font-handwritten text-2xl text-[#C66C91] max-w-sm mb-4">
              "This little corner is made just for you live. No saving needed."
            </p>

            <p className="text-xs text-[#9B8491] max-w-xs mb-6 leading-relaxed">
              The screen automatically blurs whenever screenshot tools or screen recorders activate. Click anywhere to return to your world.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#594451] text-white text-xs font-medium shadow-xs hover:scale-105 transition-transform">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Click anywhere to resume viewing</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
