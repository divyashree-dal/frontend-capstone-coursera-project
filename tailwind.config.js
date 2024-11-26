/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-green": "#495E57",
        "primary-yellow": "#F4CE14",
        "secondary-orange": "#EE9972",
        "secondary-peach": "#FBDABB",
        "secondary-gray": "#EDEFEE",
        "secondary-black": "#333333"
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
