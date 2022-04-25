const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        "mirage": {
          100: "#04041b",
          200: "#0e0e25",
          300: "#13132a",
          400: "#18182f",
          500: "#28283f",
          600: "#494960"
        },
        "cinnabar": {
          100: "#210606",
          200: "#520f0f",
          300: "#841919",
          400: "#DA3838",
          500: "#EC9999",
          600: "#F5CACA"
        }
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
