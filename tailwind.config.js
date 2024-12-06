module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
  ],
  theme: { colors: {
    red: '#c20707',
    white:'#ffffff',
    yellow:'#ffde59',
    blue:'#13c0df',
    gray:'#f0ecec'
  },
  fontFamily: {
    'display':['Anton','sans-serif'],
    'poppins':['Poppins','sans-serif']
  },fontSize: {
    '1xl': '1.5rem',
    '2xl': '1.90rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',  
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
    extend: {},
    
  },
  plugins: [],
}