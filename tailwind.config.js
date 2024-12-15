/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		backgroundColor: {
			light: "#C9D6FF",
			dark: "#0F2027",
		},
		fontFamily: {
			display: "var(--font-display)",
			body: "var(--font-body)",
		},
	},
	plugins: [],
};
