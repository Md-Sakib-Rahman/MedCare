/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 8px 16px rgba(149, 157, 165, 0.35)', 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}