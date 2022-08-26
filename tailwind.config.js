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
        secondaryLight: '#377D71',
        secondaryDark: '#00AFC1',

        colorLight: '#F1F5F9',
        colorDark: '#1E293B',

        bgLight: '#C6DCE4',
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
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}