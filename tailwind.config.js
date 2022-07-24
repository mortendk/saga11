/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "src/_templates/*.njk",
    "src/_templates/**/*.njk",
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
