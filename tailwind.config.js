const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.red
      },
      fontFamily: {
        body: ['Montserrat']
      },
      screens: {
        'sm': '500px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
