/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "",
      secondary: "",
      "button-1": "",
      "button-2": "",
      text: "",
      "text-2": "",
      "purple-1": "#9381FF",
      "purple-2": "#B8B8FF",
      "green-1": "#64B6AC",
      "green-2": "#C0FDFB",
      "white-1": "#FFFFFF",
      "white-2": "#FFF8E8",
    },
    extend: {
      fontFamily: {
        projekt: ["Prokjekt"],
      },
    },
  },
  plugins: [],
};
