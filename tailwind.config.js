/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/images/hero-banner.jpg')",
      },
      colors: {
        "txt-grey": "#333333",
        "primary-cl": "#B88E2F",
      },
    },
  },
  plugins: [],
};
