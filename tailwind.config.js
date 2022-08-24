/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens : {
      sm:'320px',
      md:'768px',
      lg:'976px',
      xl:'1440'
    },
    extend: {
      colors: {
        darkCyan:'hsl(158, 36%, 37%)',
        darkCyanBtn:'hsl(158, 20%, 25%)',
        cream:'hsl(30, 38%, 92%)',
        veryDarkBlue:'hsl(212, 21%, 14%)',
        darkGrayinshBlue:'hsl(228, 12%, 48%)',
        white:'hsl(0, 0%, 100%)',
      },
      width: {
        36: '36rem',
      },
      fontFamily:{
        montserrat:'Montserrat',
        fraunces:'Fraunces'
      },
      letterSpacing:{
        widest: '.5em',
      },
  },
},
  plugins: [],
}
