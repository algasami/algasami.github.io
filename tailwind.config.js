/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        serif: ["var(--font-ibm-plex-mono)"],
        mono: ["var(--font-krypton)"],
      },
    },
  },
};
