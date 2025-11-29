module.exports = {
  darkMode: "class",   // ← ADD THIS
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8ff',
          100: '#d9e9ff',
          500: '#2563eb',
        },
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(2,6,23,0.12)',
      },
    },
  },
  plugins: [],
}
