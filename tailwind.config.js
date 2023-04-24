/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
      },
      fontFamily: {
        prompt: 'Prompt, sans-serif;',
        sarabun: 'Sarabun, sans-serif;',
      },
      backgroundImage: {
        hero: 'url("/images/hero-background.png")',
      },
    },
  },
  plugins: [],
}
