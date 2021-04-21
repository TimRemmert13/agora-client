const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // container: {
    //   center: true,
    // },
    colors: {
      black: colors.black,
      white: colors.white,
      primary: colors.blue[600],
      accent: colors.purple[400],
      highlight: colors.pink[500],
    },
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ["Lato", "ui-sans-serif", "system-ui"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
