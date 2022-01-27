module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        sun: "url('/images/sun.svg')",
        moon: "url('/images/moon.svg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        cairo: ["Cairo", "Roboto"],
      },
    },
  },
  plugins: [],
};
