/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dosis)"],
        serif: ["var(--font-fraunces)"],
        mono: ["var(--font-iosevka)"],
      },
    },
  },
};
