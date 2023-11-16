/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        ptserif: ['PT Serif', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito Sans', "sans-serif"],
        opensans: ['Open Sans', "sans-serif"],
        montesserat: ['Montserrat', "sans-serif"]
      }
    },
  },
  plugins: [],
}

