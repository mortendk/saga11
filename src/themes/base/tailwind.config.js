/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/themes/base/layouts/*.njk",
    "./src/themes/base/layouts/**/*.njk",
    "./src/themes/base/includes/*.njk",
    "./src/themes/base/includes/**/*.njk",
    "./src/system/styleguide/*.njk",
    "./src/system/styleguide/**/*.njk",
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
