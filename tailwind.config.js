/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0000FF',
        dark: '#000000',
        secondary: '#F0F8FF',
        light: '#ADD8E6',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}