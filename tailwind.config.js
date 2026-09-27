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
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'tech': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
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