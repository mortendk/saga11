const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // Example content paths...
    "src/_templates/*.njk",
    "src/_templates/**/*.njk",
    "src/**/**/*.njk",
    "src/assets/js/*.js",
  ],
  darkMode: "class",
  safelist: [],
  theme: {
    fontFamily: {
      sans: ["montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["fira", "mono"],
    },
    extend: {
      fontSize: {},
      colors: {
        tabcolor: "red",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
