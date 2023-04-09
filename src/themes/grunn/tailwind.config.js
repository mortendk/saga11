/** @type {import('tailwindcss').Config} */
// colors vars set in tailwind/base.css

const colors = require("./tailwind/designToken-color");
const fontsize = require("./tailwind/designToken-fontSize");
const fontfamily = require("./tailwind/designToken-fontFamily");

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
      fontFamily: fontfamily,
      fontSize: fontsize,
      colors: colors,
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
