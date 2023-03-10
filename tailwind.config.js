/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "background-primary": "#fdf0e9",
      "background-secondary": "#28293e",
      "background-opacity": "#3A3C56",
      "light-primary": "#ef6d58",
      "dart-primary": "#b550f8",
      "primary-white": "#ffffff",
      "border-color": "#f3d1bf",
      "text-back": "#391400",
      "text-gray": "#391400ab",
      "white-opacity": "#a8a9c2",
      "background-3": "#f9e5da",
    },
    fontFamily: {
      epilogue: ["Epilogue", "sans-serif"],
    },
    borderRadius: {
      primary: "6px",
    },
  },
  plugins: [],
};
