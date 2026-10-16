/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0706',
        voidDark: '#06040A',
        gold: {
          DEFAULT: '#E3A94E',
          hi: '#F7D98C',
          muted: '#B0702A',
        },
        ivory: '#F4ECDD',
        muted: '#B4A891',
        borderLine: 'rgba(244, 236, 221, 0.16)',
        borderGold: 'rgba(227, 169, 78, 0.55)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: {
        'luxury-wide': '0.3em',
        'luxury-widest': '0.45em',
        'luxury-eyebrow': '0.42em',
      },
      animation: {
        'bfloat': 'bfloat 3.4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        bfloat: {
          '0%, 100%': { transform: 'translateY(-9%) scale(1.28)' },
          '50%': { transform: 'translateY(-11%) scale(1.28)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
