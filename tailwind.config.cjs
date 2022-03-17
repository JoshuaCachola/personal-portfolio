const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		// plugin(function ({ addComponents }) {
		// 	addComponents({
		// 		'.hamburger': {
		// 			position: 'absolute',
		// 			height: '2px',
		// 			width: '30px',
		// 			display: 'block',
		// 			background: 'red',
		// 		},
		// 		'.hamburger:before': {
		// 			content: '""',
		// 			width: '100%',
		// 			height: '100%',
		// 			background: 'red',
		// 		},
		// 		'.hamburger:after': {
		// 			content: '""',
		// 			width: '100%',
		// 			height: '100%',
		// 			background: 'red',
		// 		}
		// 	})
		// })
	]
};
