/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#22c55e",
        secondaryColor: "#25262A",
      },
      fontFamily: {
        primary: ["Poppins", "serif"],
        design: ["Tilt Prism", "serif"],
        logoFont: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
