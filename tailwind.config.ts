import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4F72", // Azul azulejo profundo
        "primary-dark": "#0A3D62", // Azul océano
        "accent": "#D4A574", // Amarillo mostaza apagado (azulejos)
        "terracotta": "#C65D3B", // Terracota portuguesa
        "background-light": "#FAF8F5", // Off-white crema
        "background-cream": "#F5F0E8", // Crema suave
        "background-dark": "#1A1614", // Casi negro
        "text-main": "#1A1614", // Ink casi negro
        "text-secondary": "#3D3935", // Ink medio
        "text-muted": "#9B938C", // Ink claro
        "border-soft": "#E5DDD1", // Sand border
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(26, 22, 20, 0.04), 0 2px 4px rgba(26, 22, 20, 0.04), 0 4px 8px rgba(26, 22, 20, 0.04)',
        'soft-lg': '0 2px 4px rgba(26, 22, 20, 0.06), 0 4px 8px rgba(26, 22, 20, 0.06), 0 8px 16px rgba(26, 22, 20, 0.06)',
        'editorial': '0 4px 20px rgba(26, 22, 20, 0.08), 0 1px 3px rgba(26, 22, 20, 0.12)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "azulejo-pattern": "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23005F99\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};

export default config;