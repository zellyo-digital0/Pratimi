/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px", // Define custom screen size 3xl
      "4xl": "1920px", // Define custom screen size 4xl
    },
    extend: {},
  },
  plugins: [],
};
