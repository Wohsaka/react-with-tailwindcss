/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#000',
      white: '#fff',
      blue: 'rgb(29, 155, 240)',
      'darker-blue': 'rgb(5, 20, 50)',
      'not-so-darker-blue': 'rgb(5, 90, 155)',
      gray: 'rgb(214, 217, 219)',
      'darker-gray': '#555',
      'even-darker-gray': '#222',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      seif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
