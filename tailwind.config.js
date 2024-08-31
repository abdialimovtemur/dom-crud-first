/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1200px",
        },
      },
    },
  },
  plugins: [],
}

