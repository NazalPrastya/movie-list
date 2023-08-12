/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '36px',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
