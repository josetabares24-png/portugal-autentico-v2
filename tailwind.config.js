/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6",
        night: "#1a2b4a",
        terracotta: "#C84B31",
        taupe: "#8A8279",
        // Legacy aliases (para no romper componentes existentes durante la migración)
        primary: "#C84B31",
        "primary-dark": "#a83d27",
        "secondary-blue": "#1a2b4a",
        "background-light": "#F5EFE6",
        "background-cream": "#F5EFE6",
        "text-main": "#1a2b4a",
        "text-secondary": "#8A8279",
        "border-soft": "#e8e2d9",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        "soft-lg": "0 4px 25px -5px rgba(0,0,0,0.08), 0 10px 30px -5px rgba(0,0,0,0.04)",
        premium: "0 25px 50px -12px rgba(0,0,0,0.12)",
        "premium-lg": "0 35px 60px -15px rgba(0,0,0,0.15)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 40px -12px rgba(198,93,59,0.25), 0 4px 12px -4px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "azulejo-pattern": "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%230A3D62\" fill-opacity=\"0.04\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
