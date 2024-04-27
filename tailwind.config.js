/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      colors: {
        customblue: "#3173B0",
        anotherblue: "#243A66",
        Newblue: "#253A67",
        bggrey: "#DBE2EC",
      
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
