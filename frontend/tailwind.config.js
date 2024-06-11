/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
      opacity: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

