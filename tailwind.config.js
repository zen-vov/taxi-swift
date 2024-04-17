/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": "3.125rem",
        "2xl": "200%",
        xl: "187,5%",
        lg: "125%",
        base: "112,5%",
        sm: "87,5%",
        xs: "75%",
      },
      colors: {
        primary: "#706FDE",
        dark: "#2C2C2C",
        green: "#65BA7A",
        input: "#969696",
      },
      backgroundColor: {
        primary: "#706FDE",
        input: "#F8F8F8",
        decorate: "#E2E2E2",
      },
    },
  },
  plugins: [],
};
