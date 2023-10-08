/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        '5xl': '-10px 10px 10px 10px rgba(0,0,0,0.5)',
        'whiteDrop': '5px 1px 30px 1px rgba(42,140,167,.2)',
      }
    },
  },
  plugins: [require("daisyui")],
}

