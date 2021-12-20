const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    // Example content paths...
    'src/*.njk',
    'src/**/*.njk',
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

