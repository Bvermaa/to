import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Sparkles, BookOpen } from 'lucide-react';

const navItems = [
  { id: 'welcome', label: 'Home', icon: '🌸' },
  { id: 'letter', label: 'Your Letter', icon: '💌' },
  { id: 'stories', label: 'Little Stories', icon: '✨' },
  { id: 'busy', label: 'Busy Days', icon: '☁️' },
  { id: 'jar', label: 'Reminder Jar', icon: '🫙' },
  { id: 'garden', label: 'Little Garden', icon: '🌷' },
  { id: 'quiz', label: 'CEO Quiz', icon: '🏆' },
  { id: 'surprise', label: 'Final Surprise', icon: '🌙' },
];

export default function Navbar({ favoriteCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect current section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/80 backdrop-blur-md border-b border-[#FCEBF2] shadow-soft'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('welcome')}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EFA9C4] rounded-full px-2 py-1"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#EFA9C4] to-[#FCEBF2] flex items-center justify-center text-sm shadow-xs group-hover:scale-105 transition-transform">
              🌸
            </span>
            <div>
              <span className="font-serif font-bold text-lg text-[#594451] tracking-tight group-hover:text-[#C66C91] transition-colors">
                For You, Silly
              </span>
              <span className="text-[#C66C91] font-serif text-sm ml-1 group-hover:animate-pulse">♡</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#FCEBF2] shadow-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#EFA9C4] text-white shadow-xs scale-102 font-semibold'
                      : 'text-[#9B8491] hover:text-[#594451] hover:bg-[#FCEBF2]/50'
                  }`}
                >
                  <span className="text-xs">{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Favourite Count badge / Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            {favoriteCount > 0 && (
              <button
                onClick={() => scrollTo('jar')}
                className="hidden sm:flex items-center gap-1.5 text-xs bg-[#FFF4E5] text-[#594451] border border-[#FDECD2] px-3 py-1.5 rounded-full hover:bg-[#FDECD2] transition-colors"
                title="View your saved reminders"
              >
                <Heart className="w-3.5 h-3.5 fill-[#C66C91] text-[#C66C91]" />
                <span className="font-medium">{favoriteCount} Saved</span>
              </button>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden p-2 rounded-full bg-white/90 border border-[#FCEBF2] text-[#594451] hover:bg-[#FCEBF2] shadow-xs transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-lg rounded-3xl border border-[#FCEBF2] shadow-soft-lg p-5 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#FCEBF2]">
              <span className="text-xs uppercase font-semibold text-[#9B8491] tracking-wider">
                Chapters in your world
              </span>
              <span className="font-handwritten text-lg text-[#C66C91]">made just for you 🌸</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-2xl text-left text-sm transition-all ${
                      isActive
                        ? 'bg-[#FCEBF2] text-[#C66C91] font-semibold border border-[#EFA9C4]'
                        : 'bg-[#FFF7FA] text-[#594451] hover:bg-[#FCEBF2]/60'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {favoriteCount > 0 && (
              <button
                onClick={() => scrollTo('jar')}
                className="mt-3 w-full py-2.5 px-4 rounded-2xl bg-[#FFF4E5] border border-[#FDECD2] text-xs text-[#594451] flex items-center justify-center gap-2 font-medium"
              >
                <Heart className="w-4 h-4 fill-[#C66C91] text-[#C66C91]" />
                You have {favoriteCount} favourite note{favoriteCount > 1 ? 's' : ''} saved in the jar
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

