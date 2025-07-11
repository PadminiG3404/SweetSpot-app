/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF7F2',
        caramel: '#A46C43',
        latte: '#DDBB9F',
        mocha: '#836D5A',
      },
    },
  },
  plugins: [],
};
// This is a Tailwind CSS configuration file that specifies the content sources