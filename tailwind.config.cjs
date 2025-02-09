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
        primaryText: "#2b4031", // Define your main font color
        //secondaryText: "#aa55ff", // Slightly lighter text
        //heading: "#eee000", // Heading color
        background: "#ede2d0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
