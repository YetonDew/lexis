/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' : '#32494C',
				'primaryLight': '#B3C5C7',
				'primaryDark': '#172224',
				'secondary': '#EDEFE2',
			},
			fontFamily: {
				Asap: ['Asap Variable', 'sans-serif'],
			},
		},
	},
	
	plugins: []
}
