/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Croissant One', 'cursive'], // Replace 'CustomFont' with your font's name
      },
    },
  },
  plugins: [],
}

