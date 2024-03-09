const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#DAA95D",
        "brand-green": "#6A643D",
        "brand-white": "#EEEEEE",
        "brand-gray": "#D9D9D9",
        "brand-red": "#B42819",
        "brand-blue": "#071A24",
      },
      fontFamily: {
        heading: ['"Fredericka the Great"', ...defaultTheme.fontFamily.sans],
        body: ['"Fredoka"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
