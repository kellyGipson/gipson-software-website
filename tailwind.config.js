const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-pattern": "url('/src/assets/overlay.png'), linear-gradient(15deg, #DA3838, #18182f)"
      },
      colors: {
        ...colors,
        "mirage": {
          100: "#494960",
          200: "#28283f",
          300: "#18182f",
          400: "#13132a",
          500: "#0e0e25",
          600: "#04041b",
        },
        "cinnabar": {
          100: "#F5CACA",
          200: "#EC9999",
          300: "#DA3838",
          400: "#841919",
          500: "#520f0f",
          600: "#210606",
        }
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        sourceSansPro: "Source Sans Pro"
      }
    },
  },
  plugins: [],
}
