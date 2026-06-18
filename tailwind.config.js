/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "border-blue-200", "bg-blue-50", "text-blue-700",
    "border-green-200", "bg-green-50", "text-green-700",
    "border-purple-200", "bg-purple-50", "text-purple-700",
    "border-orange-200", "bg-orange-50", "text-orange-700",
    "border-gray-200", "bg-gray-50", "text-gray-700",
    "border-red-200", "bg-red-50", "text-red-700",
  ],
  theme: { extend: {} },
  plugins: ["tailwindcss-animate"],
}