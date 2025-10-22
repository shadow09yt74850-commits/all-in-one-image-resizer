/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",   // All pages and layouts
    "./src/components/**/*.{js,ts,jsx,tsx}", // All components
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        gray: {
          800: "#1f2937",
          900: "#111827",
        },
      },
      boxShadow: {
        neon: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
      },
      animation: {
        pulseSlow: "pulse 3s infinite",
      },
    },
  },
  plugins: [],
};
