/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FFF7FA',
          secondary: '#FCEBF2',
          card: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.85)',
        },
        rose: {
          soft: '#FDEFF4',
          light: '#F8D7E3',
          DEFAULT: '#EFA9C4',
          dark: '#C66C91',
          deep: '#9E446B',
        },
        lavender: {
          light: '#F5F2FC',
          DEFAULT: '#EAE3FA',
          dark: '#9B8AC4',
        },
        cream: {
          light: '#FFFBF5',
          DEFAULT: '#FFF4E5',
          warm: '#FDECD2',
        },
        textColor: {
          primary: '#594451',
          muted: '#9B8491',
          light: '#C2B0BC',
        },
        garden: {
          leaf: '#A8D5BA',
          stem: '#82B89A',
          blush: '#FFC6D9',
          sun: '#FFE8A3',
        }
      },
      fontFamily: {
        body: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        handwritten: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        '2xs': '0 1px 1px 0 rgba(198, 108, 145, 0.03)',
        'xs': '0 1px 2px 0 rgba(198, 108, 145, 0.05)',
        'soft': '0 4px 20px -2px rgba(198, 108, 145, 0.08), 0 2px 6px -1px rgba(198, 108, 145, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(198, 108, 145, 0.12), 0 4px 10px -2px rgba(198, 108, 145, 0.06)',
        'glow-pink': '0 0 25px rgba(239, 169, 196, 0.45)',
        'glow-lavender': '0 0 25px rgba(234, 227, 250, 0.6)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(198, 108, 145, 0.06)',
      },
      backdropBlur: {
        '2xs': '1px',
        'xs': '2px',
      },
      borderRadius: {
        'xs': '2px',
      },
      dropShadow: {
        'xs': '0 1px 2px rgba(198, 108, 145, 0.1)',
      },
      scale: {
        '102': '1.02',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        sway: 'sway 4s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
