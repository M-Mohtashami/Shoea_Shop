/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screen: {
      sm: "182px",
      md: "390px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },

          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },

          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },

          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
      colors: {
        shoea: "#152536",
        btn: "#212529",
      },
      screens: {
        small: { raw: "(min-height: 650px)" },
        tall: { raw: "(min-height: 800px)" },
        // => @media (min-height: 800px) { ... }
      },
      backgroundImage: {
        "welcome-img": "url('/images/welcome_wallpaper.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
