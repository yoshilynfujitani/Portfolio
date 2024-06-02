/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Teachers"', "sans-serif"], // Add the Teachers font
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
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
        subtext: "#6D6D6D",
        lightModeMainText: "#1F1F1F",
        darkModeMainText: "#E7E7E7",
        secondary: "#161616",
        borderColorDark: "#242424",
        borderColorLight: "#E1E1E1",

        lightModeMain: "#FCFCFC",
        lightModeSecondary: "#ECECEC",
      },
      backgroundColor: {
        bggradient: "bg-gradient-to-b from-[#141414] to-[#141400]",
        Background: "#141414",
        Main: "#1F1F1F",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1180px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1636px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
