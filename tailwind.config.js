export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        kelly: ["Kelly Slab", "cursive"],
      },
      textShadow: {
        red: "5px 5px #800020", 
      },
    },
  },
  plugins: [],
};
