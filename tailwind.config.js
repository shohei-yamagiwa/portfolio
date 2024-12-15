/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "selector",
	theme: {
		backgroundColor: {
			light: "#E2E2E2",
			dark: "#0F2027",
		},
		fontFamily: {
			display: "var(--font-display)",
			body: "var(--font-body)",
		},
	},
	plugins: [],
};
