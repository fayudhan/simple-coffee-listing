/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1B1D1F",
        "darker-gray": "#111315",
        gray: "#6F757C",
        "light-green": "#BEE3CC",
        lightest: "#FEF7EE",
        orange: "#F6C768",
        red: "#ED735D",
      },
    },
  },
  plugins: [],
};
