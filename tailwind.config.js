/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: '#E04D01',
        primaryDark: '#FF0063',
        secondaryLight: '#2E4C6D',
        secondaryDark: '#00AFC1',

        colorLight: '#C74B50',
        colorDark: '#1E293B',
        colorTextLight: '#0F3460',
        colorTextDark: '#FEFBF6',

        bgLight: '#9ED2C6',
        bgDark: '#1E293B',

        bgLight2: '#DAEAF1',
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