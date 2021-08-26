// remember its build in the defaults https://unpkg.com/browse/tailwindcss@2.1.1/stubs/defaultConfig.stub.js
const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: {
		content: ["src/*.njk","src/**/*.njk","src/**/**/*.njk"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			// https://tailwindcss.com/docs/customizing-colors#color-palette-reference
			transparent: "transparent",
			current: "currentColor",
			bluegray: colors.blueGray,
			coolgray: colors.coolGray,
			gray: colors.gray,
			truegray: colors.trueGray,
			black: colors.black,
			white: colors.white,
			indigo: colors.indigo,
			red: colors.rose,
			orange: colors.orange,
			amber: colors.amber,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose:colors.rose,
      'theme-bad': '#BADA55'
		},
		fontFamily: {
			sans: ["Montserrat", "Helvetica Neue", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		fontSize: {
			'sm': '.875rem',
			'base': '1rem',
			'lg': '1.25rem',
			'xl': '1.5rem',
			'2xl': '2.25rem',
			'3xl': '3rem',
			'4xl': '4.5rem',
		},
		fontWeight: {
			bold: 700,
			light: 300,
		},
    backgroundPosition: {
      bottom: 'bottom',
       center: 'center',
       left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
       right: 'right',
       'right-1': 'right 1rem center',
       'right-bottom': 'right bottom',
       'right-top': 'right top',
       top: 'top',
    },
		backgroundImage: theme => ({
				'foo': "url('/assets/img/foo.svg')",
			 }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '85rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),

		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
    // require("@tailwindcss/forms")({
    //   strategy: 'class',
    // }),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp')],
};
