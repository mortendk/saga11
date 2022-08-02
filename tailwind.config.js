/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "src/_includes/*.njk",
    "src/_includes/**/*.njk",
    "src/_layouts/*.njk",
    "src/_layouts/**/*.njk",
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
