/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "house": "url('img/house.jpg')",
        "room": "url('img/room.jpg')"
      },
      colors: {
        'roxinho': '#6B69B2',
        'roxo-escuro': '#4D4B90',
        'branquinho': '#FFF7F6',
        'cinzinha': '#F8F8FA'
      }
    },
  },
  plugins: []
}

