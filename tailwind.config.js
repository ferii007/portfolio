/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: '#F15412',
        primaryDark: '#FF0063',
        secondaryLight: '#205375',
        secondaryDark: '#00AFC1',
        colorLight: 'rgb(241 245 249)',
        colorLight2: 'rgb(248 250 252)',
        colorDark: 'rgb(30 41 59)',
        colorDark2: 'rgb(51 65 85)'
      },

      spacing: {
        '10%': '10%',
      },

      boxShadow: {
        myShadow1: '4.1px -5px 0 0 rgb(17, 24, 39)',
        myShadow2: '-4.1px -5px 0 0 rgb(17, 24, 39)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}