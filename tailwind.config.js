/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        panel: "#050505",
        line: "#202020",
        soft: "#f2f2f2",
        muted: "#858585",
        faint: "#70707b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "960px",
        page: "1200px",
      },
    },
  },
  plugins: [],
};
