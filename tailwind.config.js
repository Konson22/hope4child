/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'rgb(7, 170, 192)',
        secondary:'rgb(235, 56, 12)',
        darkgray:'rgb(233, 233, 224)',
        lightgray:'rgb(221, 221, 209)',
        gold:'rgb(165, 140, 71)',
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

