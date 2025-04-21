/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        londrina: ["Londrina Solid", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "bg-login": "url('/bg-login.jpg')",
        "bg-register": "url('/bg-register.jpg')",
        "bg-main": "url('/bg-main.jpg')",
        "bg-series": "url('/bg-series.png')",
        "bg-film": "url('/bg-film.png')",
      },
      colors: {
        grey: "#C1C2C4",
      }
    },
  },
  plugins: [],
};
