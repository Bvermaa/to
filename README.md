# For You, Silly ♡
> *"A tiny corner of the internet, made just for you."*

A beautiful, emotionally engaging, highly interactive, responsive personal website designed as a digital scrapbook mixed with a dreamy flower garden, interactive love notes, playful conversations, and emotional storytelling.

Built without personal photographs using delicate pastel CSS/SVG illustrations, scrapbook textures, and smooth animations.

---

## ✨ Features & Chapters

1. **Chapter 1: Welcome Screen (Hero)**
   - Dreamy pastel pink ambiance with floating petals, stars, and butterflies.
   - 3D interactive envelope with wax heart seal that breaks open on click.
   - Soft petal confetti celebration leading smoothly into the letter.

2. **Chapter 2: A Letter For You**
   - Delicate stationery with faint ruled lines, washi tape, and airmail stamps.
   - Unfolds realistic paper animation with honest, heartfelt words acknowledging busy days.
   - Interactive "Fold back & read again" button.

3. **Chapter 3: Your 100 Little Stories (The Archives)**
   - Interactive grid of 8 story cards based on real moments:
     - 🏋️ **Gym Incident**: *"Yaar, mujhe chot lag gayi!"*
     - 🍕 **Hunger Emergency**: *"Mujhe bhookh lagi hai."*
     - 🏡 **Night Stay Plan**: *"Main friend ke ghar night stay chali jaun?"*
     - 🎡 **Melaa Plans**: *"Main mele mein chali jaun?"*
     - 💅 **Nail Emergency**: *"Mera nail udhad gaya!"*
     - 😂 **Falling Incident**: *"Yaar, pata hai kya? Main gir gayi!"*
     - ☕ **Gossip Session**: *"You won't believe what happened!"*
     - 💌 **Random Update**: *"Bas tumhe batana tha..."*
   - Interactive modal popup with instant chat bubble reactions and progress counter saved in `localStorage`.

4. **Chapter 4: When I'm Busy (Safe Harbor)**
   - Cozy pastel illustration of a desk, steaming mug, clock, moon, and flowers.
   - 3 reassurance cards:
     - *"I'm a little busy 🌸"*
     - *"I'm here, just a little late ☁️"*
     - *"Tell me everything 🫶"*
   - **Customizable Live Status**: Easily updated from `src/data/config.js` (`busy`, `free`, `call_later`, `catching_up`), with an interactive live status switcher.

5. **Chapter 5: The Little Reminder Jar**
   - Illustrated glass jar with wooden lid and colorful folded paper notes.
   - Non-repeating randomized exhaustion queue (cycles through all 10 notes before repeating).
   - Favorite button (❤️) saves notes into a personal drawer saved in `localStorage`.

6. **Chapter 6: A Little Garden**
   - Peaceful meadow with swaying flowers, butterflies, and warm sunlight.
   - 6 unique flowers (Peony, Lavender, Daisy, Sweet Blossom, Tulip, Forget-Me-Not) each holding a hidden note.
   - *"Make petals rain 🌸"* interactive shower.

7. **Chapter 7: CEO of Random Updates Quiz**
   - 3-question playful quiz with hilarious instant commentary.
   - Confetti celebration crowning her **"CEO of Random Updates 🏆"** with an official certificate card.
   - Option to retake anytime.

8. **Chapter 8: Final Surprise & Night Sky**
   - Twilight sky with crescent moon, twinkling stars, and glowing flowers.
   - Emotional closing letter reassuring her that her little updates matter.
   - Secret easter egg button *"One more thing?"* revealing: *"Okay, now go eat something. And text me when you're free. 😂"*.

9. **Navigation & Persistence**
   - Sticky blur navbar with smooth scrolling to every chapter.
   - Mobile navigation drawer.
   - LocalStorage saves: favorite reminders, unboxed stories, and visit counter.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm or yarn

### Installation & Run
```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Start local development server
npm run dev

# 3. Open in your browser:
# http://localhost:5173
```

### Build for Production
```bash
npm run build
```
This produces an optimized production build in the `dist/` directory.

---

## 🛠️ How to Customize

### 1. Update Your Live Status
Open [`src/data/config.js`](file:///Users/bittuverma/Desktop/to/src/data/config.js):
```javascript
export const websiteConfig = {
  // Options: 'busy' | 'free' | 'call_later' | 'catching_up'
  activeStatusKey: "catching_up",
  lastUpdatedNote: "Updated just now",
  ...
};
```

### 2. Add or Edit Stories
Open [`src/data/stories.js`](file:///Users/bittuverma/Desktop/to/src/data/stories.js) to add more funny incidents or tweak the responses.

### 3. Add More Jar Reminders
Open [`src/data/reminders.js`](file:///Users/bittuverma/Desktop/to/src/data/reminders.js) to customize the notes inside the glass jar.

---

## 🌐 Free Deployment (Vercel / Netlify)

### Option A: Vercel
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect Vite and run `npm run build`.
4. Click **Deploy**. Done!

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com) and drag and drop the `dist/` folder into Netlify Drop, or connect your GitHub repository with build command `npm run build` and publish directory `dist`.

