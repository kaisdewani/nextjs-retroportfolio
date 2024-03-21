/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        retroGrey: "#F0F3FF",
        retroNavy: "#211951",
        retroPurple: "#836FFF",
        retroMint: "#15F5BA"
      }
    }
  },
  plugins: []
};
