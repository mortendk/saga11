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
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
  ],
}

