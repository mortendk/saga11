const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    // Example content paths...
    'src/_templates/*.njk',
    'src/_templates/**/*.njk',
    'src/**/**/*.njk',
    'src/assets/js/*.js',
  ],
  safelist: [
    'text-3xl',
    'lg:text-4xl',
  ],
  theme: {
    fontFamily: {
      sans: ['montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
  ],
}

