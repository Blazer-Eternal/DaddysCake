/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#c01e2e',
          dark: '#99121f',
          deeper: '#6e0c16',
          soft: '#f9e3e5',
        },
        gold: {
          DEFAULT: '#d18029',
          dark: '#a96316',
          soft: '#f7e8d4',
        },
        rose: '#d8a0a5',
        cream: '#faf5ee',
        sand: '#f2e9dc',
        ink: '#2b1d12',
        cocoa: '#6b5340',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(43, 29, 18, 0.25)',
        lift: '0 30px 60px -25px rgba(153, 18, 31, 0.45)',
        soft: '0 10px 30px -12px rgba(43, 29, 18, 0.18)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
      },
    },
  },
  plugins: [],
}
