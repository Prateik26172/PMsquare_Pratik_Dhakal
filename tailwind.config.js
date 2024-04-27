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
        // Gradientcolor: "",
        // background: linear-gradient(274.26deg, #0266C9 4.14%, #1F4493 100%);
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
