/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00f3ff',
        'cyber-pink': '#ff00ff',
        'cyber-bg': '#0a0a12',
        'cyber-card': '#1a1a2e',
        'brand-bg': '#070c16',
        'brand-panel': '#101b30',
        'brand-panel-light': '#16233c',
        'brand-border': '#22314c',
        'brand-gold': '#e0b34a',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'tech': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'aurora': 'aurora 18s ease-in-out infinite alternate',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'aurora': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(4%, -3%) scale(1.08)' },
          '100%': { transform: 'translate(-3%, 3%) scale(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
      // ADD THESE FOR BETTER IMAGE HANDLING
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'photo': '4 / 3',
        'portrait': '3 / 4',
      },
      objectPosition: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
        'left-top': 'left top',
        'right-top': 'right top',
        'left-bottom': 'left bottom',
        'right-bottom': 'right bottom',
      }
    },
  },
  plugins: [
  ],
}