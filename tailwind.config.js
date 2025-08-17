

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ React files inside src/
    "./public/index.html"         // Optional: include if you use Tailwind classes in HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
