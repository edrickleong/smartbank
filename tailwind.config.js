// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F9FAFA",
          100: "#F3F5F5",
          200: "#E7EAEB",
          300: "#D6DADB",
          400: "#B8C5CA",
          500: "#94A5AB",
          600: "#808C91",
          700: "#576B74",
          800: "#36474F",
          900: "#0C212C",
        },
        primary: {
          50: "#F2F8FA",
          100: "#E5F1F5",
          200: "#CEEBF5",
          300: "#83CBE3",
          400: "#2791B5",
          500: "#2B6173",
          600: "#265565",
          700: "#1B3D48",
          800: "#10242B",
          900: "#050C0E",
        },
      },
    },
  },
}
