/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-teal":"rgb(5, 175, 197)",
        "light-teal":"rgb(2, 161, 189)"
      }
    },
  },
  plugins: [],
}
