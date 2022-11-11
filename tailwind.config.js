/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu', sans",
        jetBrains: "'JetBrains Mono', monospace",
        luckyDev: "'LuckyDev'"
      },
      colors: {
        "mine-shaft": {
          50: "#b3c5db",
          100: "#9db7cd",
          200: "#799faf",
          300: "#5a8086",
          400: "#455958",
          500: "#2b302f",
          600: "#2d3939",
          700: "#2d4043",
          800: "#2e434d",
          900: "#2d4458",
        },
        "rocket-blue": {
          50: "#80f2ff",
          100: "#6bf0ff",
          200: "#42ecff",
          300: "#1ae8ff",
          400: "#00d8f0",
          500: "#00b3c7",
          600: "#00a5b8",
          700: "#0097a8",
          800: "#008594",
          900: "#007785",
          1000: "#005E69",
          1100: "#002C31",
        },
        "one-dark": {
          white: "#abb2bf",
          black: "#282c34",
          lightRed: "#e06c75",
          darkRed: "#be5046",
          green: "#98c379",
          lightYellow: "#e5c07b",
          darkYellow: "#d19a66",
          blue: "#2c9af5",
          magenta: "#9c42b6",
          cyan: "#56b6c2",
          gutterGrey: "#4b5263",
          commentGrey: "#5c6370",
        },
      },
      screens: {
        xs: "321px",
        md2: "820px",
      },
    },
  },
  plugins: [],
};
