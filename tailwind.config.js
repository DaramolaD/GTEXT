/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
        screens: {
          DEFAULT: "100%",
          "2xl": "1500px",
        },
      },
      colors: {
        primary: {
          50: "#fff0f0",
          100: "#ffdddd",
          200: "#ffc1c1",
          300: "#ff9696",
          400: "#ff5a5a",
          500: "#ff2727",
          600: "#fb0707",
          700: "#d40101",
          800: "#ae0606",
          900: "#900c0c",
          950: "#6e0000",
        },
        orange: {
          50: "#fff7ec",
          100: "#ffeed3",
          200: "#ffd9a5",
          300: "#ffbe6d",
          400: "#ff9632",
          500: "#ff770a",
          600: "#f05800",
          700: "#cc4202",
          800: "#a1340b",
          900: "#822d0c",
          950: "#461404",
        }
      },
    },
  },
  plugins: [],
};
