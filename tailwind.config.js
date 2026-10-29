/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#080808',
        charcoal: '#171717',
        gold: '#C9A85D',
        champagne: '#D6C3A5',
        cream: '#F7F4EE',
        muted: '#A7A7A7'
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'Tajawal', '"Noto Kufi Arabic"', 'system-ui', 'sans-serif'],
        latin: ['Manrope', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
