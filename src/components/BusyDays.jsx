import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Moon, Sparkles, Coffee, Heart, Check, Laptop } from 'lucide-react';
import { websiteConfig } from '../data/config';

export default function BusyDays() {
  const [currentStatusKey, setCurrentStatusKey] = useState(websiteConfig.activeStatusKey || 'catching_up');
  const currentStatus = websiteConfig.statuses[currentStatusKey] || websiteConfig.statuses.busy;

  return (
    <section id="busy" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FCEBF2] shadow-xs text-xs font-medium text-[#C66C91] mb-3"
        >
          <span>☁️</span> Chapter Three • Safe Harbor
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#594451] tracking-tight mb-4"
        >
          For the days when I'm a little occupied...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9B8491] max-w-2xl mx-auto leading-relaxed"
        >
          Sometimes life gets a little hectic. But I don't want you to mistake my busy moments for a lack of interest in your day.
        </motion.p>
      </div>

      {/* Peaceful Cozy Desk & Moon Illustration with Live Status */}
      <div className="mb-14 bg-gradient-to-br from-[#FFFDF9] via-[#FCEBF2]/50 to-[#EAE3FA]/40 rounded-3xl p-6 sm:p-10 border border-[#FCEBF2] shadow-soft-lg relative overflow-hidden">
        {/* Soft glowing background spots */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFF4E5]/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#EAE3FA]/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cozy Peaceful SVG Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 h-64 sm:h-72 bg-white/80 backdrop-blur-xs rounded-3xl border border-[#FCEBF2] shadow-soft p-5 flex flex-col justify-between overflow-hidden">
              {/* Window with crescent moon & stars */}
              <div className="relative h-28 bg-gradient-to-b from-[#594451]/10 to-transparent rounded-2xl p-3 border border-[#FCEBF2] overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#594451] font-serif">
                    <Moon className="w-4 h-4 text-[#C66C91]" />
                    <span className="font-handwritten text-base">outside the window</span>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </motion.div>
                </div>
                {/* Floating soft crescent moon */}
                <div className="absolute right-4 bottom-2 text-2xl select-none opacity-85">
                  🌙
                </div>
                <div className="absolute left-8 bottom-3 text-xs select-none opacity-60">
                  ✨
                </div>
              </div>

              {/* Desk Surface Illustration */}
              <div className="pt-2">
                <div className="flex items-end justify-around pb-2 border-b-4 border-[#FCEBF2]">
                  {/* Steaming Mug */}
                  <div className="flex flex-col items-center">
                    <motion.span
                      animate={{ y: [0, -4, 0], opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs text-[#C66C91]"
                    >
                      ~
                    </motion.span>
                    <span className="text-xl">☕</span>
                  </div>

                  {/* Gentle Desk Clock */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#FFF4E5] border border-amber-200 flex items-center justify-center text-xs text-[#594451] shadow-2xs">
                      <Clock className="w-5 h-5 text-[#C66C91]" />
                    </div>
                  </div>

                  {/* Laptop */}
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">💻</span>
                  </div>

                  {/* Flower in vase */}
                  <div className="flex flex-col items-center">
                    <motion.span
                      animate={{ rotate: [-2, 3, -2] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-xl"
                    >
                      🌸
                    </motion.span>
                  </div>
                </div>
                <p className="text-[11px] font-handwritten text-center text-[#9B8491] mt-2">
                  "Work is happening, but you're never out of thoughts"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Status Component */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B8491]">
              <span className="w-2 h-2 rounded-full bg-[#EFA9C4]" />
              Current Website Status
            </div>

            {/* Status Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#FCEBF2] shadow-soft">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className={`w-3.5 h-3.5 rounded-full ${currentStatus.indicatorColor} animate-pulse`} />
                  <span className="font-serif text-2xl font-bold text-[#594451]">
                    {currentStatus.label}
                  </span>
                </div>
                <span className="text-2xl">{currentStatus.emoji}</span>
              </div>

              <p className="text-sm sm:text-base text-[#594451] mb-2 leading-relaxed">
                {currentStatus.description}
              </p>

              <div className="p-3 rounded-xl bg-[#FFF7FA] border border-[#FCEBF2] text-xs sm:text-sm text-[#C66C91] font-handwritten text-lg">
                "{currentStatus.subtext}"
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-[#9B8491]">
                <span>Status controlled manually from site config</span>
                <span>{websiteConfig.lastUpdatedNote}</span>
              </div>
            </div>

            {/* Quick Status Selector (allows switching/previewing) */}
            <div>
              <p className="text-xs text-[#9B8491] mb-2 font-medium">
                Switch or preview statuses:
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.values(websiteConfig.statuses).map((st) => (
                  <button
                    key={st.key}
                    onClick={() => setCurrentStatusKey(st.key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 ${
                      currentStatusKey === st.key
                        ? 'bg-[#594451] text-white border-[#594451] shadow-xs'
                        : 'bg-white/80 hover:bg-white text-[#594451] border-[#FCEBF2]'
                    }`}
                  >
                    <span>{st.emoji}</span>
                    <span>{st.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Interactive Message Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {websiteConfig.busyCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="scrapbook-card p-6 sm:p-7 flex flex-col justify-between relative bg-gradient-to-b from-white to-[#FFFDF9]"
          >
            {/* Top Tag & Icon */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C66C91] uppercase">
                  {card.tag}
                </span>
                <span className="text-2xl p-2 rounded-2xl bg-[#FFF7FA] border border-[#FCEBF2]">
                  {card.icon}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-lg font-bold text-[#594451] mb-3">
                {card.title}
              </h3>

              {/* Exact Required Message */}
              <div className="bg-[#FFF7FA] p-4 rounded-2xl border border-[#FCEBF2] mb-4">
                <p className="text-sm sm:text-base text-[#594451] font-medium leading-relaxed">
                  "{card.message}"
                </p>
              </div>
            </div>

            {/* Reflection footer */}
            <div className="pt-3 border-t border-[#FCEBF2]">
              <p className="font-handwritten text-lg text-[#9B8491]">
                {card.reflection}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
