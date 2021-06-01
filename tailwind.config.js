const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-back': "url('../assets/media/home-back.png')",
        'home1': "url('../assets/media/home1.svg')"
      }), 
      colors: {
        'blue-dianne': {
          900: "#20485b",
          800: "#275970",
          700: "#2e6a86",
          600: "#357b9b",
          500: "#3b8cb1",
          400: "#479bc2",
          300: "#5ca7ca",
          200: "#70b2d1",
          100: "#85bed9",
          
        },
        'blue-pearl': {
          900: "#000000",
          800: "#080715",
          700: "#110f2a",
          600: "#19163f",
          500: "#211d55",
          400: "#28236a",
          300: "#302a80",
          200: "#383096",
          100: "#3f37ac",
        },
        "silver": {
          900: "#606163",
          800: "#6e6f72",
          700: "#7b7d81",
          600: "#898b90",
          500: "#97999e",
          400: "#a5a7ac",
          300: "#b3b6ba",
          200: "#c2c4c8",
          100: "#d0d2d6",
        },
        'green-yeloow': "#e0f856"
      },
      fontFamily: {
        'sofiaPro': 'Sofia Pro'
      }
    },
  },
  variants: {},
  plugins: [],
};
