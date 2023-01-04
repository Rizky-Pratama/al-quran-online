/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        arabic: ["Amiri"],
      },
    },
  },
  plugins: [],
};
