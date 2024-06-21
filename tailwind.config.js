/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'gray-700': '#555',
        'gray-800': '#414143',
        'gray-900': '#0f0f0f',
        'orange-500': '#E0AB19',
        'gray-600': '#73736f',
      }
    },
  },
  plugins: [],
}

