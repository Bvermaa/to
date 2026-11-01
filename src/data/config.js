/**
 * WEBSITE STATUS CONFIGURATION
 * 
 * You (the website owner) can change `activeStatusKey` here whenever you want:
 * Options: 'busy' | 'free' | 'call_later' | 'catching_up'
 */
export const websiteConfig = {
  // Change this key to update your current live status on the site:
  activeStatusKey: "catching_up", // 'busy' | 'free' | 'call_later' | 'catching_up'

  // Custom optional sub-note you can change anytime:
  lastUpdatedNote: "Updated just now",

  // Available status definitions:
  statuses: {
    busy: {
      key: "busy",
      label: "Busy right now",
      emoji: "💻",
      indicatorColor: "bg-amber-400",
      indicatorBorder: "border-amber-300",
      pillBg: "bg-amber-50 text-amber-800 border-amber-200",
      description: "In the middle of work or meetings, but your notifications are not forgotten.",
      subtext: "Save your stories! I'll ping as soon as my hands are free."
    },
    free: {
      key: "free",
      label: "Free now",
      emoji: "🌸",
      indicatorColor: "bg-emerald-400",
      indicatorBorder: "border-emerald-300",
      pillBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description: "All done for now! Ready to hear every single detail of your day.",
      subtext: "Hit me with the gym drama, the gossip, or whatever is on your mind."
    },
    call_later: {
      key: "call_later",
      label: "Will call you later",
      emoji: "📞",
      indicatorColor: "bg-sky-400",
      indicatorBorder: "border-sky-300",
      pillBg: "bg-sky-50 text-sky-800 border-sky-200",
      description: "Wrapping up a few tasks. Let's talk properly once I'm home/free.",
      subtext: "Prepare your notes; 27-minute stories are fully welcome."
    },
    catching_up: {
      key: "catching_up",
      label: "Catching up on your stories",
      emoji: "🤍",
      indicatorColor: "bg-rose-400",
      indicatorBorder: "border-rose-300",
      pillBg: "bg-rose-50 text-rose-800 border-rose-200",
      description: "Reading back through everything you sent today with a smile.",
      subtext: "Never feel like your updates are too small to share."
    }
  },

  // 3 Section 4 message cards:
  busyCards: [
    {
      id: 1,
      tag: "CARD 1",
      icon: "🌸",
      title: "I'M A LITTLE BUSY",
      badge: "Busy with work",
      message: "I'm caught up with something right now, but I'll text you when I'm free. Don't think I'm ignoring you.",
      reflection: "Even when I'm staring at screens and deadlines, you're on my mind.",
      color: "from-rose-50/70 to-pink-50/50"
    },
    {
      id: 2,
      tag: "CARD 2",
      icon: "☁️",
      title: "I'M HERE, JUST A LITTLE LATE",
      badge: "Running behind",
      message: "I might reply late, but I still want to hear what happened. Save all your stories for me.",
      reflection: "A delayed reply is never a forgotten one.",
      color: "from-lavender-50/70 to-purple-50/40"
    },
    {
      id: 3,
      tag: "CARD 3",
      icon: "🫶",
      title: "TELL ME EVERYTHING",
      badge: "All ears",
      message: "Even if I couldn't be there during your day, I would love to catch up on all the little details.",
      reflection: "The little things are never little to me.",
      color: "from-amber-50/70 to-cream-DEFAULT/50"
    }
  ]
};
