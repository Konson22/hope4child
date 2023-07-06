/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:'rgb(60, 72, 110)',
        mainlight:'rgb(97, 118, 182)',
        main3:'rgb(45, 59, 102)',
        main2:'rgb(134, 196, 71)',
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html, jsx, tsx, js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

