/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        '5xl': '-10px 10px 10px 10px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [require("daisyui")],
}

