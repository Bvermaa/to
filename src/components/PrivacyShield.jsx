import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeOff, Lock, Heart, ShieldAlert, Sparkles } from 'lucide-react';

export default function PrivacyShield() {
  const [isShieldActive, setIsShieldActive] = useState(false);
  const [showWarningToast, setShowWarningToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerShield = (reason) => {
    setIsShieldActive(true);
    setToastMessage(reason);
    setShowWarningToast(true);

    // Auto-dismiss toast after 4s, but shield remains until window is refocused or clicked
    setTimeout(() => {
      setShowWarningToast(false);
    }, 4000);
  };

  useEffect(() => {
    // 1. Prevent Right-Click Context Menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      triggerShield("Right-click is disabled to keep this page private 🌸");
    };

    // 2. Intercept Screenshot & Print Keyboard Shortcuts
    const handleKeyDown = (e) => {
      // PrintScreen key
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        triggerShield("Screenshot detected! This little world is just for your eyes 🙈");
        // Clear clipboard if possible
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('This corner is private ♡');
        }
      }

      // Mac screenshot: Cmd + Shift + 3, 4, 5
      // Windows snippet: Win + Shift + S
      if (
        (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's'))
      ) {
        triggerShield("Screenshots are blocked! No saving allowed 🔒");
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

    // 3. Window Blur / Loss of Focus (Most effective technique for OS screenshot tools)
    // When snipping tool or Mac screenshot overlay activates, window loses focus!
    const handleWindowBlur = () => {
      setIsShieldActive(true);
    };

    const handleWindowFocus = () => {
      setIsShieldActive(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsShieldActive(true);
      } else {
        setIsShieldActive(false);
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
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
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(35px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsShieldActive(false)}
            className="fixed inset-0 z-50 bg-[#FFF7FA]/80 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center select-none cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#EFA9C4] to-[#FFF4E5] border-2 border-white shadow-soft-lg flex items-center justify-center text-3xl mb-4">
              🙈
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[#C66C91] font-bold mb-2">
              Privacy Shield Active
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#594451] mb-3 max-w-md">
              No Screenshots Allowed!
            </h3>

            <p className="font-handwritten text-2xl text-[#C66C91] max-w-sm mb-4">
              "This little corner is made just for you live. No saving needed."
            </p>

            <p className="text-xs text-[#9B8491] max-w-xs mb-6">
              The screen automatically blurs when screenshot tools are opened. Click anywhere to return to your world.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#594451] text-white text-xs font-medium shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Click to view your page</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
