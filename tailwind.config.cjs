
/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('./tailwind-preset.cjs')],
	 // Customizations specific to this project would go here
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: []
}
