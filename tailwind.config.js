/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      screens: {
          sm: '480px',
          md: '1024px',
          lg: '1440px',
          xl: '2550px'
      },
    extend: {
      colors: {
          brightRed: 'hsl(12, 80%, 59%)',
          brightRedLight: 'hsl(11,75%,81%)',
          brightRedSupLight: 'hsl(12, 88%, 95%)',
          darkBlue: 'hsl(228, 39%, 23%)',
          darkGrayishBlue: 'hsl(227, 12%, 61%)',
          veryDarkBlue: 'hsl(233, 12%, 13%)',
          veryPaleRed: 'hsl(12, 100%, 96%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
          bluePrice: 'hsl(220,100%,23%)'

      }
    },

  },
  plugins: [],
}

