/**
 * WEBSITE STATUS & SPOTIFY CONFIGURATION
 * 
 * You (the website owner) can change `activeStatusKey` here whenever you want:
 * Options: 'cramp_care' | 'busy' | 'free' | 'call_later' | 'catching_up'
 */
export const websiteConfig = {
  // Current active status:
  activeStatusKey: "cramp_care",

  // Custom optional sub-note you can change anytime:
  lastUpdatedNote: "Updated with warm love",

  // Available status definitions:
  statuses: {
    cramp_care: {
      key: "cramp_care",
      label: "Cramp Care Mode Active",
      emoji: "♨️",
      indicatorColor: "bg-rose-400",
      indicatorBorder: "border-rose-300",
      pillBg: "bg-rose-50 text-rose-800 border-rose-200",
      description: "Thinking about you holding your hot water bag. Please stay warm and rest.",
      subtext: "I wish I could take the cramps away from you. Wrap yourself up and take gentle breaths."
    },
    busy: {
      key: "busy",
      label: "Busy with work right now",
      emoji: "💻",
      indicatorColor: "bg-amber-400",
      indicatorBorder: "border-amber-300",
      pillBg: "bg-amber-50 text-amber-800 border-amber-200",
      description: "In the middle of work or meetings, but your pain and updates are not forgotten.",
      subtext: "Drink some warm water and rest. I will text you the exact second my hands are free."
    },
    free: {
      key: "free",
      label: "Free now to talk",
      emoji: "🌸",
      indicatorColor: "bg-emerald-400",
      indicatorBorder: "border-emerald-300",
      pillBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description: "Work is done! Ready to hear every single detail, complaint, or cranky rant.",
      subtext: "Send me all the voice notes. Tell me where it hurts or just vent about your day."
    },
    call_later: {
      key: "call_later",
      label: "Will call you later",
      emoji: "📞",
      indicatorColor: "bg-sky-400",
      indicatorBorder: "border-sky-300",
      pillBg: "bg-sky-50 text-sky-800 border-sky-200",
      description: "Wrapping up a few tasks. Let's talk softly once I can give you my full attention.",
      subtext: "Get your blanket and heating pad ready. Long stories are 100% welcome."
    },
    catching_up: {
      key: "catching_up",
      label: "Catching up on your messages",
      emoji: "🤍",
      indicatorColor: "bg-rose-400",
      indicatorBorder: "border-rose-300",
      pillBg: "bg-rose-50 text-rose-800 border-rose-200",
      description: "Reading back through your texts and voice notes with so much love.",
      subtext: "Never apologize for sending too many messages. They mean the world to me."
    }
  },

  // Featured Song & Playlist Configuration
  spotify: {
    title: "Songs For When Everything Hurts",
    subtitle: "Playing: blue by yung kai 💙",
    featuredTrack: {
      title: "blue",
      artist: "yung kai",
      youtubeId: "IpFX2vq8HKw", // Official Full Song
      spotifyTrackId: "7x4AjK76OJYPjR0gRvftd6", // Official Spotify Track
      embedUrl: "https://open.spotify.com/embed/track/7x4AjK76OJYPjR0gRvftd6?utm_source=generator&theme=0",
      mood: "Your Song • Infinite Love 💙"
    },
    tracks: [
      {
        id: "blue-yung-kai",
        title: "blue",
        artist: "yung kai",
        embedUrl: "https://open.spotify.com/embed/track/7x4AjK76OJYPjR0gRvftd6?utm_source=generator&theme=0",
        mood: "Our Song • Pure Comfort 💙",
        tag: "Now Playing"
      },
      {
        id: "iktara",
        title: "Iktara",
        artist: "Amit Trivedi, Kavita Seth",
        embedUrl: "https://open.spotify.com/embed/track/1XrSjpNe49IiygZfzb74pk?utm_source=generator&theme=0",
        mood: "Soft Gentle Hug 🌸",
        tag: "Classic Comfort"
      },
      {
        id: "peaceful-piano",
        title: "Peaceful Piano Melodies",
        artist: "Gentle Instrumental",
        embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?utm_source=generator&theme=0",
        mood: "Deep Cramp Relief 🛌",
        tag: "Sleep & Rest"
      },
      {
        id: "lofi-beats",
        title: "Chill Lo-Fi Bedroom Beats",
        artist: "Lofi Girl & Friends",
        embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator&theme=0",
        mood: "Warm Cozy Hug ☕",
        tag: "Calm Beats"
      }
    ]
  },

  // 3 Section 4 message cards:
  busyCards: [
    {
      id: 1,
      tag: "CARD 1",
      icon: "🌸",
      title: "I'M A LITTLE BUSY, BUT MY HEART IS WITH YOU",
      badge: "Busy with work",
      message: "I'm caught up with something right now, but please don't suffer alone in silence. Drink warm water, hold your heating pad, and rest. Don't think for a second I'm ignoring you.",
      reflection: "Even in the middle of deadlines, my mind checks in on your tummy every few minutes.",
      color: "from-rose-50/70 to-pink-50/50"
    },
    {
      id: 2,
      tag: "CARD 2",
      icon: "☁️",
      title: "I'M HERE, JUST A LITTLE LATE",
      badge: "Running behind",
      message: "I might reply late, but I still want to hear how you're feeling. Vent about the cramps, send 10 cranky voice notes from bed—save all of it for me.",
      reflection: "A delayed reply is never a forgotten one. Especially on your painful days.",
      color: "from-lavender-50/70 to-purple-50/40"
    },
    {
      id: 3,
      tag: "CARD 3",
      icon: "🫶",
      title: "TELL ME WHERE IT HURTS",
      badge: "Safe Space",
      message: "Even if I couldn't be there to physically hand you a hot water bag or rub your back, I am holding space for you. You don't have to be strong or cheerful today.",
      reflection: "The little things—and the painful things—are never small to me.",
      color: "from-amber-50/70 to-cream-DEFAULT/50"
    }
  ]
};
