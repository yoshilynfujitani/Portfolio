/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "background-shine": "background-shine 3s linear infinite",
        "pulse-slow": "pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)",
      },
      keyframes: {
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      container: {
        center: true,
      },
      colors: {
        subtext: "#97998B",
      },
      backgroundColor: {
        bggradient: "bg-gradient-to-b from-[#141414] to-[#141400]",
        Background: "#141414",
        Main: "#1F1F1F",
      },
    },
  },
  plugins: [],
};
