/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "#070F18",
        paragraph: "#575455",
        gray: "#F5F6FB",
      },
    },
  },
  plugins: [],
};
