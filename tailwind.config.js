/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: '#D54C4C',
        primaryDark: '#FF0063',
        secondaryLight: '#233E8B',
        secondaryDark: '#00AFC1',

        colorTextLight: '#21094E',
        colorTextDark: '#FEFBF6',

        bgLight: '#CEE5D0',
        bgDark: '#1E293B',

        bgLight2: '#D8EBE4',
        bgDark2: '#334155',
      },

      spacing: {
        '10%': '10%',
      },

      boxShadow: {
        myShadow1: '4.1px -5px 0 0 rgb(17, 24, 39)',
        myShadow2: '-4.1px -5px 0 0 rgb(17, 24, 39)',
      },

      fontFamily: {
        'righteous' : ['Righteous', 'Poppins', 'Arial', 'sans-serif', 'system-ui'],
        'fredoka-one': ['Fredoka One', 'Poppins', 'Arial', 'sans-serif', 'system-ui'],
        'poppins': ['Poppins', 'Arial', 'sans-serif', 'system-ui']
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}