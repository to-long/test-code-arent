/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Noto Sans JP", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
      colors: {
        // Figma Health App Colors
        light: "#FFFFFF",
        primary: {
          300: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
          "300-400": "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",          
        },
        secondary: {
          300: "#8FE9D0",
        },
        dark: {
          500: "#414141",
          600: "#2E2E2E",
        },
        gray: {
          400: "#777777",
        },
      },
    },
  },
  plugins: [],
};
