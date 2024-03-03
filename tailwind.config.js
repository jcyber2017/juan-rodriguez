/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cv': '1fr minmax(500px, 1fr) 1fr',
      }
    }
  },
  plugins: [],
}

