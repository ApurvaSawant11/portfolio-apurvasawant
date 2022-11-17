const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "#80808061",
      },
    },
    fontFamily: {
      signature: ["Itim"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "920px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
