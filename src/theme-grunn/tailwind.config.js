/** @type {import('tailwindcss').Config} */
// colors vars set in tailwind/base.css

const colors = require("./tailwind/designToken-color");
const fontsize = require("./tailwind/designToken-fontSize");
const fontfamily = require("./tailwind/designToken-fontFamily");

module.exports = {
  content: [
    "src/theme-grunn/layouts/*.liquid",
    "src/theme-grunn/layouts/**/*.liquid",
    "src/theme-grunn/includes/*.liquid",
    "src/theme-grunn/includes/**/*.liquid",
    "src/content/styleguide/*.liquid",
    "src/content/styleguide/**/*.liquid",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: fontfamily,
      fontSize: fontsize,
      colors: colors,
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
