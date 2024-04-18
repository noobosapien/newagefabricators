/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainBlue: "#1b3e82",
        secondaryBlue: "#2452ae",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
