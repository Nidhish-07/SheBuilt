/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'hero': "url('./src/assets/images/hannah-busing-Zyx1bK9mqmA-unsplash.jpg')"
      },
      screens: {
        "tablet": { max: "768px" }
        //=>@media (max-width:768px) {...}
      }
    },
  },
  plugins: [],
}