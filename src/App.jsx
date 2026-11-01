import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FloatingDecorations from './components/FloatingDecorations';
import WelcomeScreen from './components/WelcomeScreen';
import LetterSection from './components/LetterSection';
import PeriodComfortKit from './components/PeriodComfortKit';
import StoryCards from './components/StoryCards';
import BusyDays from './components/BusyDays';
import ReminderJar from './components/ReminderJar';
import FlowerGarden from './components/FlowerGarden';
import MiniQuiz from './components/MiniQuiz';
import FinalSurprise from './components/FinalSurprise';
import { useVisitTracker } from './hooks/useLocalStorage';

export default function App() {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const visitData = useVisitTracker();

  const handleOpenLetter = () => {
    const letterEl = document.getElementById('letter');
    if (letterEl) {
      letterEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-[#594451] font-body selection:bg-[#EFA9C4]/30 selection:text-[#C66C91]">
      {/* Subtle Floating Ambient Background Particles */}
      <FloatingDecorations />

      {/* Floating Header / Navbar */}
      <Navbar favoriteCount={favoriteCount} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 1: Welcome Screen */}
        <WelcomeScreen onOpenSurprise={handleOpenLetter} />

        {/* Section 2: A Letter For You */}
        <LetterSection />

        {/* Dedicated Cramp Sanctuary: Interactive Comfort Kit & Heating Pad */}
        <PeriodComfortKit />

        {/* Section 3: Little Stories & Daily Archives */}
        <StoryCards />

        {/* Section 4: When I'm Busy (Peaceful Illustration, Cards, Status) */}
        <BusyDays />

        {/* Section 5: The Little Reminder Jar */}
        <ReminderJar onFavoritesChange={setFavoriteCount} />

        {/* Section 6: A Little Garden */}
        <FlowerGarden />

        {/* Section 7: CEO of Random Updates Quiz */}
        <MiniQuiz />

        {/* Section 8: Final Surprise & Goodnight Warmth */}
        <FinalSurprise />
      </main>

      {/* Sweet Footer with Visit Tracker */}
      <footer className="relative z-10 py-10 px-4 text-center border-t border-[#FCEBF2] bg-white/40 backdrop-blur-xs">
        <div className="max-w-md mx-auto space-y-2">
          <p className="font-serif text-sm font-semibold text-[#594451]">
            For You, Silly ♡
          </p>
          <p className="font-handwritten text-lg text-[#C66C91]">
            "A tiny corner of the internet, made just for you."
          </p>
          {visitData?.visitCount > 1 && (
            <p className="text-[11px] text-[#9B8491]">
              Visit #{visitData.visitCount} • Still sending warmth to your tummy 🌸
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}
