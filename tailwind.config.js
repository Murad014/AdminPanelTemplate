/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBlue: 'hsl(226,39%,22%)',
        backColor: 'hsl(0,0%,100%)',

      }
    },
  },
  plugins: [],
}

