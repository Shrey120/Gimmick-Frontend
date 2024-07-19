/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Playwrite BE VLG", "cursive"],
        classic: ["Orbitron"],
        headings: ["Exo"],
        casual: ["Merienda"],
      },
      backgroundImage: {
        customGradient:
          "linear-gradient(to left bottom, #f75a26, #ff404a, #ff2270, #ff1098, #ff2ac2, #f84ad7, #ee61eb, #e374fc, #e589fc, #e79cfc, #e9aefb, #ebc0fa)",
        reverse:
          "linear-gradient(to left top, #f75a26, #ff404a, #ff2270, #ff1098, #ff2ac2, #f84ad7, #ee61eb, #e374fc, #e589fc, #e79cfc, #e9aefb, #ebc0fa)",
      },
    },
  },
  plugins: [],
};
