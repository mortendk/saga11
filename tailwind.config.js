/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "src/___layouts/*.njk",
    "src/___layouts/**/*.njk",
    "src/__includes/*.njk",
    "src/__includes/**/*.njk",
    "src/__includes/**/*.njk",
    "src/_system/*/*.njk",
    "src/_system/**/*.njk",
    "src/content/styleguide/*.njk",
    "src/content/styleguide/**/*.njk",
    "src/assets/js/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["barlow"],
        serif: ["robotoslap"],
        mono: ["firacoda"],
      },
      colors: {
        tabcolor: "red",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
