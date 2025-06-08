/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primaryText: "#1e3322",
        background: "#ffffff",
//        background: "#dcd5bb",
        'rizoma-bege' : "#fff6e7",
        'rizoma-green': '#1e3322',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
