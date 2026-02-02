/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					forest: '#1A2421', // Your deep background color
					sand: '#C2996B',   // Your golden accent color
					mist: '#E8EEF2',   // Your light text color
					stone: '#5E6B73',  // Your river stone blue/grey
				},
			},
			fontFamily: {
				// If you want to use specific fonts for that tech-look
				mono: ['JetBrains Mono', 'monospace'],
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};