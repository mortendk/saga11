/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "src/themes/nakinn/templates/*.njk",
    "src/themes/nakinn/templates/**/*.njk",
    "src/themes/nakinn/assets/js/*.js",
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
