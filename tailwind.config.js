/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-red': 'rgb(229, 9, 20)',
        'custom-horizontal': 'rgb(35,35,35)',
        'custom-gray': '#181818'
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'black-90': 'rgba(0, 0, 0, 0.9)',
        'black-50': 'rgba(0, 0, 0, 0.5)',
        'black-10': 'rgba(0, 0, 0, 0.1)',
      }),
    },
  },
  plugins: [nextui()],
};
