import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        workwear: {
          900: "#0A1A35", // Dark blue for background
          800: "#0F2547",
          700: "#15305A",
          600: "#1A3B6D",
          500: "#204680",
          400: "#2D5DA0",
          300: "#4273B3",
          200: "#6F96C7",
          100: "#A0BBDB",
          50: "#D0DEEF",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#0A1A35", // Dark blue background
            },
            foreground: {
              DEFAULT: "#FFFFFF", // White text for contrast
            },
            primary: {
              50: "#D0DEEF",
              100: "#A0BBDB",
              200: "#6F96C7",
              300: "#4273B3",
              400: "#2D5DA0",
              500: "#204680", // Primary blue
              600: "#1A3B6D",
              700: "#15305A",
              800: "#0F2547",
              900: "#0A1A35",
              DEFAULT: "#2D5DA0", // Slightly lighter blue for primary elements
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};