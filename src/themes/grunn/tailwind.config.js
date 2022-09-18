/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "src/themes/grunn/layouts/*.njk",
    "src/themes/grunn/layouts/**/*.njk",
    "src/themes/grunn/includes/*.njk",
    "src/themes/grunn/includes/**/*.njk",
    "src/themes/styleguide/*.njk",
    "src/themes/styleguide/**/*.njk",
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
