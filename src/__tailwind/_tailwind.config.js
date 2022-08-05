/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "src/___layouts/*.njk",
    "src/___layouts/**/*.njk",
    "src/__includes/*.njk",
    "src/__includes/**/*.njk",
    "src/assets/js/*.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["goudybookletter"],
      sans: ["junction"],
    },
    extend: {
      colors: {
        tabcolor: "red",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
