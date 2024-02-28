/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'spaceBackground': "url('/src/assets/img/background.jpg')"
      }, 
      colors:{
        'valid': '#A1E5AB',
        'invalid': '#FFDE7A',
        'error': '#C52233',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
