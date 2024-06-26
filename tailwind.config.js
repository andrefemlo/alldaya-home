/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{php,html,js}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#29FFF3',
        'blue-400'  : '#4036FF',
        'purple'    : '#FF30B6',
        'blue-900'  : '#1C2125',
        'yellow'    : '#FFB703',
        'rose'      : '#F75590',
        'yellow-400': '#FBAF00',
        'orange'    : '#E8871E',
        'white'     : '#FEFEFE',
        black       : '#424242'
      },
      fontFamily: {
        sans: ['Azo Sans', 'sans-serif']
      },
      animation: {
        'float': 'float 5s linear infinite',
        'floating': 'floating 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floating: {
          '0%, 100%': { 
            transform: 'translate(0px)',
            // transform: 'translateX(0px)'
          },
          '25%': { 
            transform: 'translateY(-48px)', 
            // transform: 'translateX(-48px)'
          },
          '50%': { 
            transform: 'translateY(-16px)', 
            // transform: 'translateX(-64px)'
          },
          '75%': { 
            transform: 'translateY(32px)', 
            // transform: 'translateX(16px)'
          },
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1120px',
        }
      }
    }
  },
}

