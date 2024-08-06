/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
    fontFamily: {
      ibm: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [],
};
