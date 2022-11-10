/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "550px",
      md: "800px",
      lg: "1100px",
      xl: "1300px",
    },
    colors: {
      primary: "#CCCCCC",
    },
    fontFamily: {
      sans: ["comic sans ms", "system-ui"],
      serif: ["times new roman", "system-ui"],
      mono: ["arial", "system-ui"],
    },
    transitionDuration: {
      1000: "1000ms",
      2000: "2000ms",
      5000: "5000ms",
    },
    animation: {
      meAnimate: "meAnimate 1s ease-in-out infinite",
    },
    keyframes: {
      meAnimate: {
        "0%, 100%": { transform: "rotate(-12deg)" },
        "50%": { transform: "rotate(12deg)" },
      },
    },
  },
  plugins: [],
};
