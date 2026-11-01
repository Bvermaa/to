import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingDecorations() {
  const decorations = [
    { type: '🌸', top: '12%', left: '4%', size: 'text-xl', duration: 7, delay: 0 },
    { type: '✨', top: '22%', right: '5%', size: 'text-sm', duration: 5, delay: 1 },
    { type: '☁️', top: '35%', left: '2%', size: 'text-2xl', duration: 9, delay: 0.5 },
    { type: '🦋', top: '48%', right: '3%', size: 'text-lg', duration: 8, delay: 2 },
    { type: '🌷', top: '65%', left: '3%', size: 'text-xl', duration: 6, delay: 1.5 },
    { type: '🤍', top: '78%', right: '4%', size: 'text-base', duration: 7, delay: 3 },
    { type: '⭐', top: '90%', left: '5%', size: 'text-sm', duration: 6, delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {decorations.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.size} select-none opacity-45 filter drop-shadow-xs`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, index % 2 === 0 ? 12 : -12, 0],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.type}
        </motion.div>
      ))}
    </div>
  );
}
