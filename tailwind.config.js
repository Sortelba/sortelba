/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        'cyber-bg': '#0a0a14',
        'cyber-surface': 'rgba(23, 23, 38, 0.8)',
        'cyber-purple': '#4c2a85',
        'cyber-orange': '#ff8c00',
        'cyber-white': '#e0e0e0',
        'cyber-gray': '#b0b0c0',
      },
      boxShadow: {
        'glow-purple': '0 0 5px #4c2a85, 0 0 10px #4c2a85, 0 0 15px #4c2a85',
        'glow-orange': '0 0 5px #ff8c00, 0 0 10px #ff8c00, 0 0 15px #ff8c00',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'none', opacity: '1' },
          '25%': { transform: 'skew(-0.5deg, -0.25deg)', opacity: '0.75' },
          '50%': { transform: 'none', opacity: '1' },
          '75%': { transform: 'skew(0.5deg, 0.25deg)', opacity: '0.75' },
        },
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
      animation: {
        glitch: 'glitch 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        'fade-in-scale': 'fade-in-scale 0.2s ease-out forwards',
      }
    }
  },
  plugins: [],
}
