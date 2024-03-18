/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-500": '#EC1026',
        "blue-500": '#00B6BA'
      }
    },
  },
  plugins: [],
}

