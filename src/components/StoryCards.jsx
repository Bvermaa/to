import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { storiesData } from '../data/stories';
import StoryModal from './StoryModal';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function StoryCards() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [readStories, setReadStories] = useLocalStorage('for_you_read_stories', []);

  const handleCardClick = (story) => {
    setSelectedStory(story);
    if (!readStories.includes(story.id)) {
      setReadStories([...readStories, story.id]);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="stories" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#FCEBF2] shadow-xs text-xs font-medium text-[#C66C91] mb-3"
        >
          <span>🍿</span> Chapter Two • The Archives
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-[#594451] tracking-tight mb-3"
        >
          Things you randomly tell me...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#9B8491] max-w-xl mx-auto"
        >
          Honestly, your life deserves its own television series.
        </motion.p>

        {/* Progress tracker pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 inline-flex items-center gap-2 text-xs text-[#9B8491] bg-white/70 px-4 py-1.5 rounded-full border border-[#FCEBF2]"
        >
          <span>Stories unboxed:</span>
          <span className="font-semibold text-[#C66C91]">
            {readStories.length} of {storiesData.length}
          </span>
          {readStories.length === storiesData.length && (
            <span className="text-xs text-emerald-600 font-medium">✨ All reviewed!</span>
          )}
        </motion.div>
      </div>

      {/* Responsive Grid of 8 Story Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      >
        {storiesData.map((story) => {
          const isRead = readStories.includes(story.id);
          return (
            <motion.div
              key={story.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => handleCardClick(story)}
              className="group cursor-pointer scrapbook-card p-6 flex flex-col justify-between relative overflow-hidden bg-white hover:border-[#EFA9C4]/70 hover:shadow-soft-lg"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(story);
                }
              }}
            >
              {/* Subtle top tape aesthetic */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#FFF4E5] rounded-xs border border-amber-200/50 shadow-2xs rotate-1 pointer-events-none" />

              {/* Top row: Badge and Emoji */}
              <div>
                <div className="flex items-center justify-between mb-4 pt-1">
                  <span className="text-2xl p-2 rounded-2xl bg-[#FFF7FA] border border-[#FCEBF2] group-hover:scale-110 transition-transform">
                    {story.emoji}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    {isRead ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Read
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#C66C91] bg-[#FDEFF4] px-2 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Episode Tag */}
                <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#9B8491] block mb-1">
                  {story.badge}
                </span>

                {/* Card Title (Her quote) */}
                <h3 className="font-serif text-lg font-bold text-[#594451] group-hover:text-[#C66C91] transition-colors leading-snug mb-2">
                  "{story.title}"
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-[#9B8491] line-clamp-2 leading-relaxed mb-4">
                  {story.subtitle}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#FCEBF2] flex items-center justify-between text-xs text-[#9B8491]">
                <span className="font-handwritten text-base text-[#C66C91]">
                  Tap to see reply
                </span>
                <span className="w-6 h-6 rounded-full bg-[#FFF7FA] group-hover:bg-[#EFA9C4] group-hover:text-white transition-colors flex items-center justify-center text-[#594451]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Story Modal */}
      <StoryModal
        story={selectedStory}
        isOpen={Boolean(selectedStory)}
        onClose={() => setSelectedStory(null)}
      />
    </section>
  );
}

