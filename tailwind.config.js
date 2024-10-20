/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "App.jsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "10%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        bounceIn: {
          "0%, 100%": { transform: "scale(0.9)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "70%": { transform: "scale(0.95)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        zoomIn: "zoomIn 10s ease-in-out infinite",
        bounceIn: "bounceIn 1s ease-out forwards", // Tambahkan ini
      },
    },
  },
  plugins: [],
};
