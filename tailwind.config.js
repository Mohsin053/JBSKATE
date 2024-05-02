/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#3669C9",
        primary: "#3669C9",
        secondary: "#FFF2D9",
        hover: "#FFFFFF",
        input: "#F4F4F4",
        table: "#48525B",
      },
      boxShadow: {
        input: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      sans: ["DM Sans", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
