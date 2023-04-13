/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './main.js',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    screen: {
      sm: '182px',
      md: '390px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        shoea: '#152536',
        btn: '#212529',
      },
      screens: {
        small: { raw: '(min-height: 650px)' },
        tall: { raw: '(min-height: 800px)' },
        // => @media (min-height: 800px) { ... }
      },
      backgroundImage: {
        'welcome-img': "url('/images/welcome_wallpaper.jpg')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
