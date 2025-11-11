/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F7EDEA',
        'coral': '#F4A694',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

