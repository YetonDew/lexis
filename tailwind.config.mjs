import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' : '#071C82',
				'primaryLight': '#315BAF',
				'primaryDark': '#041056',
				'secondary': '#f6f9ea',
			},
			fontFamily: {
				Asap: ['Asap Variable', 'sans-serif'],
			},
		},
	},
	
	plugins: [typography]
}
