/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "src/__includes/*.njk",
    "src/__includes/**/*.njk",
    "src/___layouts/*.njk",
    "src/___layouts/**/*.njk",
    "src/assets/js/*.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        tabcolor: "red",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
