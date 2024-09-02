/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        '2xl': '0 0 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}