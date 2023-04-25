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
        primary: '#53B9A4',
      },
      fontFamily: {
        prompt: 'Prompt, sans-serif;',
        sarabun: 'Sarabun, sans-serif;',
      },
    },
  },
  plugins: [],
}
