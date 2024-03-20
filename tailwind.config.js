/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '680': '680px',
        '990': '990px',
        '215': '215px',
        '203': '203px',
        '155': '155px',
        '394': '394px',
        '207': '207px'
      },
      colors: {
        'light-grey': '#f3f4f6',
        'middle-grey': '#a2a2a4',
        'dark-grey': '#808080',
        'button-grey' :'#cccccc',
        'light-red' : '#e85e5b'
      },
    },
  },
  plugins: [],
}