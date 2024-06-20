/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        'white': '#fff',
        'blue': '#0854A3',
        'light-blue': '#14A0FA',
        'gray-400': '#3E3E3E',
        'gray-300': '#414141',
        'gray-200': '#5A5A5A',
        'gray-100': '#707070',
      }, // Extend Tailwind's default colors
      fontFamily: {
        sans: 'Open Sans, sans-serif',
        pill: 'Pill Gothic, sans-serif',
      },
    },
  },
  plugins: [],
}

