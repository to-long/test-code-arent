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
    },
  },
  plugins: [],
};
