/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //Primary
        SoftOrange: '#E8AA53',
        SoftRed: "#F05D50",
        //Neutral
        OffWhite: "#FFFCF9",
        GrayishBlue: "#C5C6CD",
        DarkGrayishBlue: "#5D5F79",
        VeryDarkBlue : "#000019",
      },
      fontSize:{
        paragraph: "15px"
      }
    },
    fontFamily:{
      Inter: ['Inter','sans-serif'],
    }
  },
  plugins: [],
}
