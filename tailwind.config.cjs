/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // TODO: Remove
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
