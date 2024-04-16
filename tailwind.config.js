/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl":"50px",
        "2xl": "32px",
        xl: "24px",
        lg: "16px",
        base: "14px",
      },
      colors: {
        primary: "#706FDE",
        dark: "#2C2C2C",
        green: "#65BA7A",
        input:"#969696"
      },
      backgroundColor:{
        primary: "#706FDE",
        input:"#F8F8F8"
      }
    },
  },
  plugins: [],
};
