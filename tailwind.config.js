// tailwind.config.js
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
      },
    },
  },
};
