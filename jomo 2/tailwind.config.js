/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — tune these to JOMO's exact hex codes when Rachelle sends them.
        cream: "#FAF6EF",
        sand: "#F1E9DC",
        ink: "#1F1B16",
        clay: "#D9744F",   // primary accent (warm)
        sage: "#5E7A5A",   // secondary accent (grounded)
        gold: "#E7B75F",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
