/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#1a1a1a",
          800: "#252525",
          700: "#2d2d2d",
        },
      },
      boxShadow: {
        innerGlow: "inset 0 1px 2px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
