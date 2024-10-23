/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1F7CFF",
        secondaryOrange: "#F75C4E",
        title: "#070F18",
        paragraph: "#575455",
        gray: "#F5F6FB",
      },
      fontSize: {
        displayXL: "55px",
      },
    },
  },
  plugins: [],
};
