/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1C89F2',
          blue700: '#0E6FD6',
          green: '#30C293',
          green700: '#1FA87B',
          cyan: '#39C7FD',
        },
        ink: { DEFAULT: '#0B0F14', 800: '#141A21', 700: '#1C242E', 900: '#070A0E' },
        slate2: '#5B6573',
        paper: '#F6F8FB',
      },
      fontFamily: {
        display: ['Lexend', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(11,15,20,0.18)',
        soft: '0 6px 20px -10px rgba(11,15,20,0.25)',
      },
    },
  },
  plugins: [],
};
