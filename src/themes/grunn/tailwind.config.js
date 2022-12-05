/** @type {import('tailwindcss').Config} */
// colors vars set in tailwind/base.css
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "src/themes/grunn/layouts/*.njk",
    "src/themes/grunn/layouts/**/*.njk",
    "src/themes/grunn/includes/*.njk",
    "src/themes/grunn/includes/**/*.njk",
    "src/content/styleguide/*.njk",
    "src/content/styleguide/**/*.njk",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["barlow"],
        serif: ["robotoslap"],
        mono: ["firacoda"],
      },
      fontSize: {
        h1: ["7rem", "1"],
        h2: ["5rem", "1"],
        h3: ["4rem", "1"],
        h4: ["3rem", "1"],
        h5: ["2rem", "1"],
        h6: ["1.5rem", "1"]
      },
      colors: {
        color1: colors.cyan,
        color2: colors.indigo,
        color3: colors.lime,
        color4: colors.sky,
        color5: colors.orange,
        background: colors.slate,
        neutral: colors.gray,
        success: colors.lime,
        warning: colors.amber,
        danger: colors.rose,
        black: colors.black,
        white: colors.white,
        transparent: 'transparent',
        current: 'currentColor',
        tabcolor: 'rgb(var(--color-tab) / <alpha-value>)',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
