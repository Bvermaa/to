import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Flame, Wind, Coffee, CheckCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function PeriodComfortKit() {
  const [heatLevel, setHeatLevel] = useState(44); // 38, 44, 50
  const [selectedAilment, setSelectedAilment] = useState('cramps');
  const [comfortChecklist, setComfortChecklist] = useLocalStorage('for_you_cramp_checklist', [
    { id: 1, text: 'Reheated the hot water bag / heating pad ♨️', done: true },
    { id: 2, text: 'Drank a glass of warm water or ginger tea 🍵', done: false },
    { id: 3, text: 'Curled up on side with a pillow between knees 🛌', done: false },
    { id: 4, text: 'Ate something sweet or comforting without feeling guilty 🍫', done: false },
    { id: 5, text: 'Remembered that someone loves me deeply, even when I am cranky 🤍', done: true },
  ]);

  const toggleCheck = (id) => {
    const updated = comfortChecklist.map((item) => {
      if (item.id === id) {
        const nextState = !item.done;
        if (nextState) {
          try {
            confetti({
              particleCount: 20,
              spread: 45,
              colors: ['#EFA9C4', '#FCEBF2', '#C66C91', '#FFF4E5'],
            });
          } catch (e) {}
        }
        return { ...item, done: nextState };
      }
      return item;
    });
    setComfortChecklist(updated);
  };

  const handleSendHug = () => {
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#EFA9C4', '#FCEBF2', '#C66C91', '#FFE8A3'],
      });
    } catch (e) {}
  };

  const ailmentData = {
    cramps: {
      title: "Sharp Tummy Cramps ⚡",
      badge: "Intense Cramp Waves",
      message: "Please curl into a soft fetal position right now. Tuck a pillow between your knees—it relieves pressure from your pelvis. Place the hot water bag directly on your lower stomach. When the wave peaks, don't hold your breath; take deep, slow belly breaths. It will soften and pass. I wish with all my heart I could hold the pain instead of you.",
      advice: "Warm heat relaxes the contracting uterine muscles. Keep that heating pad cozy."
    },
    back: {
      title: "Aching Lower Back 🩹",
      badge: "Muscle Tension",
      message: "Lower back period aches are so draining because you can't find a single comfortable position to sit or lie down. Lie flat on your back with two pillows under your knees to flatten your lumbar spine, or place the heating pad right behind your lower back. Let your body sink into the bed. No sitting upright for work today.",
      advice: "Gentle heat on the sacrum soothes the nerves radiating down your legs."
    },
    emotional: {
      title: "Teary, Fragile & Overwhelmed 🥺",
      badge: "Hormonal Storm",
      message: "Hey... look at me. You don't have to explain why you're crying or why a random thought made you feel upset. Your hormones are dropping sharply and your body is exhausted. Cry as much as you want. Feel cranky. Feel soft. You are never 'too much' or 'too dramatic' to me. I love you in all your emotional seasons.",
      advice: "Wrap yourself in your softest blanket like a warm cocoon."
    },
    energy: {
      title: "Zero Energy & Heaviness 🛌",
      badge: "Battery at 1%",
      message: "Your body is burning energy right now just dealing with internal cramps and inflammation. If you can only manage to brush your teeth and lie back down, that is more than enough. The world will not fall apart if you do nothing today. Cancel whatever you can. Rest is productive healing.",
      advice: "Permission granted to nap, watch silly comfort videos, and rest guilt-free."
    },
    sweet: {
      title: "Craving Sweet Comfort 🍫",
      badge: "Emergency Serotonin",
      message: "Your brain is literally asking for serotonin to fight the pain! Dark chocolate, brownies, warm cookies, hot cocoa, or whatever comfort food you want—eat it happily. Calories are 100% paused during period days by universal law. Nourish yourself and satisfy that sweet tooth.",
      advice: "Dark chocolate actually contains magnesium which helps ease muscle cramps!"
    }
  };

  const currentAilment = ailmentData[selectedAilment];

  return (
    <section id="comfort-kit" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FCEBF2] shadow-xs text-xs font-medium text-[#C66C91] mb-3"
        >
          <span>♨️</span> Safe Sanctuary • Cramp Care Station
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#594451] tracking-tight mb-3"
        >
          For the days your tummy hurts...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9B8491] max-w-xl mx-auto"
        >
          A tiny interactive care station designed to keep you warm, comfortable, and reminded that you are never alone in your pain.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Card: The Virtual Heating Pad */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#FFFDF9] via-[#FDEFF4] to-[#FFF4E5] rounded-3xl p-6 sm:p-8 border-2 border-[#EFA9C4]/50 shadow-soft-lg flex flex-col items-center text-center relative overflow-hidden">
          {/* Soft background pulse glow when warm */}
          <div
            className="absolute inset-0 rounded-3xl blur-2xl transition-all duration-700 pointer-events-none -z-0"
            style={{
              backgroundColor: heatLevel === 50 ? '#EFA9C450' : heatLevel === 44 ? '#F8D7E340' : '#FFF4E540',
            }}
          />

          <div className="relative z-10 w-full">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#FCEBF2] text-[11px] font-mono font-bold text-[#C66C91] mb-4 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-[#C66C91] animate-pulse" />
              Virtual Heating Pad
            </div>

            {/* Illustrated Hot Water Bag SVG */}
            <motion.div
              animate={{
                scale: heatLevel === 50 ? [1, 1.03, 1] : [1, 1.015, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto my-3 w-44 sm:w-52 h-56 sm:h-64 flex flex-col items-center justify-center filter drop-shadow-md select-none"
            >
              {/* Hot water bag top stopper */}
              <div className="w-14 h-7 bg-amber-100 rounded-t-lg border-2 border-amber-300 shadow-inner-soft flex items-center justify-center">
                <div className="w-6 h-3 bg-amber-200 rounded-xs border border-amber-400" />
              </div>

              {/* Bag Body with plush waffle pattern & warm glow */}
              <div
                className="w-44 sm:w-52 h-48 sm:h-56 rounded-b-[40px] rounded-t-2xl border-4 border-white shadow-soft-lg flex flex-col items-center justify-center p-4 transition-colors duration-500 relative overflow-hidden"
                style={{
                  background:
                    heatLevel === 50
                      ? 'linear-gradient(135deg, #EFA9C4 0%, #C66C91 100%)'
                      : heatLevel === 44
                      ? 'linear-gradient(135deg, #F8D7E3 0%, #EFA9C4 100%)'
                      : 'linear-gradient(135deg, #FFF4E5 0%, #F8D7E3 100%)',
                }}
              >
                {/* Steam wave emojis floating gently */}
                <motion.div
                  animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-lg text-white mb-1"
                >
                  ♨️
                </motion.div>

                <Heart className="w-10 h-10 text-white fill-white/80 drop-shadow-xs mb-1" />

                <span className="font-serif text-2xl font-bold text-white drop-shadow-xs">
                  {heatLevel}°C
                </span>
                <span className="text-[11px] font-medium text-white/90">
                  {heatLevel === 50 ? 'Deep Relief Mode' : heatLevel === 44 ? 'Soothing Warmth' : 'Gentle Comfort'}
                </span>
              </div>
            </motion.div>

            {/* Temperature selector buttons */}
            <div className="w-full mt-4 space-y-2">
              <span className="text-xs text-[#9B8491] block font-medium">
                Adjust soothing temperature:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { temp: 38, label: '38°C Gentle' },
                  { temp: 44, label: '44°C Soothing' },
                  { temp: 50, label: '50°C Deep Relief' },
                ].map((item) => (
                  <button
                    key={item.temp}
                    onClick={() => setHeatLevel(item.temp)}
                    className={`py-2 px-1 rounded-xl text-xs font-semibold transition-all border ${
                      heatLevel === item.temp
                        ? 'bg-[#C66C91] text-white border-[#C66C91] shadow-xs scale-102'
                        : 'bg-white/80 hover:bg-white text-[#594451] border-[#FCEBF2]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hold to Send Hug Button */}
            <div className="mt-5">
              <button
                onClick={handleSendHug}
                className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#C66C91] to-[#EFA9C4] text-white font-medium text-xs sm:text-sm shadow-soft hover:shadow-glow-pink hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Send virtual warmth & a tight soft hug</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Pain Check-in & Guided Cramp Breathing */}
        <div className="lg:col-span-7 space-y-6">
          {/* "Tell Me Where It Hurts" Interactive Tabs */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#FCEBF2] shadow-soft">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#FCEBF2]">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#C66C91]">
                Tell me where it hurts right now:
              </span>
              <span className="text-xs text-[#9B8491] font-handwritten text-base">
                tap to unlock my note 💌
              </span>
            </div>

            {/* Ailment Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { id: 'cramps', label: 'Tummy Cramps ⚡' },
                { id: 'back', label: 'Lower Back 🩹' },
                { id: 'emotional', label: 'Teary & Moody 🥺' },
                { id: 'energy', label: 'No Energy 🛌' },
                { id: 'sweet', label: 'Need Sweets 🍫' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedAilment(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    selectedAilment === tab.id
                      ? 'bg-[#FDEFF4] text-[#C66C91] border-[#EFA9C4] font-semibold shadow-xs'
                      : 'bg-white hover:bg-[#FFF7FA] text-[#594451] border-[#FCEBF2]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Reassurance Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAilment}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-6 border border-[#FCEBF2] relative"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#594451]">
                    {currentAilment.title}
                  </h4>
                  <span className="text-[10px] font-mono uppercase bg-[#FFF4E5] text-[#C66C91] px-2.5 py-1 rounded-full border border-amber-200 font-bold">
                    {currentAilment.badge}
                  </span>
                </div>

                <p className="font-body text-sm sm:text-base text-[#594451] leading-relaxed mb-4">
                  "{currentAilment.message}"
                </p>

                <div className="pt-3 border-t border-[#FCEBF2] flex items-center gap-2 text-xs text-[#9B8491]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="font-handwritten text-base text-[#C66C91]">
                    Gentle tip: {currentAilment.advice}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Guided Cramp Breathing Circle + Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Guided Soothing Breathing Bubble */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#FCEBF2] shadow-soft flex flex-col items-center text-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9B8491] block mb-1">
                  Breathe Through The Cramp
                </span>
                <p className="text-xs text-[#594451]">
                  Deep belly breathing softens the abdominal walls
                </p>
              </div>

              {/* Pulsing Breathing Bubble */}
              <div className="relative my-6 w-32 h-32 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.45, 1.45, 1],
                    backgroundColor: [
                      'rgba(239, 169, 196, 0.25)',
                      'rgba(255, 244, 229, 0.65)',
                      'rgba(255, 244, 229, 0.65)',
                      'rgba(239, 169, 196, 0.25)',
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    times: [0, 0.45, 0.55, 1],
                  }}
                  className="w-24 h-24 rounded-full border-2 border-[#EFA9C4] flex items-center justify-center shadow-inner-soft"
                >
                  <motion.span
                    animate={{
                      opacity: [0.8, 1, 1, 0.8],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="font-serif text-xs font-bold text-[#594451]"
                  >
                    Breathe ♡
                  </motion.span>
                </motion.div>
              </div>

              <div className="text-[11px] text-[#9B8491] font-mono">
                Inhale peace (4s) • Hold (1s) • Exhale pain (4s)
              </div>
            </div>

            {/* Cramp Care Checklist */}
            <div className="bg-white rounded-3xl p-6 border border-[#FCEBF2] shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C66C91] block mb-1">
                  Cramp Day Checklist
                </span>
                <p className="text-xs text-[#9B8491] mb-3">
                  Check off what you did to care for yourself today:
                </p>
              </div>

              <div className="space-y-2 text-xs">
                {comfortChecklist.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`w-full p-2.5 rounded-xl text-left border flex items-start gap-2.5 transition-all ${
                      item.done
                        ? 'bg-[#FDEFF4]/60 border-[#EFA9C4] text-[#594451]'
                        : 'bg-[#FFF7FA] border-[#FCEBF2] text-[#9B8491]'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center shrink-0 border ${
                        item.done ? 'bg-[#C66C91] border-[#C66C91] text-white' : 'border-gray-300'
                      }`}
                    >
                      {item.done && <CheckCircle className="w-3 h-3 text-white" />}
                    </span>
                    <span className={item.done ? 'line-through opacity-80' : ''}>
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-3 text-[10px] text-center text-[#9B8491]">
                Tap any item to mark it done
              </div>
            </div>
          </div>

          {/* Spotify Comfort Music Card inside Cramp Care */}
          <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#FCEBF2] shadow-soft">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#FCEBF2]">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#1DB954]/15 flex items-center justify-center text-emerald-600 text-xs">
                  🎧
                </span>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#594451]">
                    Comfort Music For Your Pain
                  </h4>
                  <span className="text-[10px] text-[#9B8491]">
                    Let these melodies hold your heart while your body rests
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#C66C91] font-bold uppercase tracking-wider bg-[#FDEFF4] px-2 py-0.5 rounded-full">
                Spotify Embed
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-inner-soft bg-black/5">
              <iframe
                title="Spotify Comfort Track"
                src="https://open.spotify.com/embed/track/0bYg9bo50gSsH3LtWvIm5K?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
