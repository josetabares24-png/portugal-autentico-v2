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
        // Paleta Boutique - Tonos terrosos portugueses
        clay: {
          50: '#FAF8F5',
          100: '#F5F0E8',
        },
        terracotta: '#D4653C',
        ochre: '#E8A056',
        ink: {
          900: '#1A1614',
          700: '#3D3935',
          400: '#9B938C',
        },
        sage: '#8B9E8A',
        sand: '#E5DDD1',

        // Legacy (mantener para compatibilidad)
        primary: "#D4653C",
        "primary-dark": "#C05530",
        "secondary-blue": "#005F99",
        "background-light": "#FAF8F5",
        "background-cream": "#F5F0E8",
        "background-dark": "#1A1614",
        "text-main": "#1A1614",
        "text-secondary": "#3D3935",
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(26, 22, 20, 0.04), 0 2px 4px rgba(26, 22, 20, 0.04), 0 4px 8px rgba(26, 22, 20, 0.04)',
        'soft-lg': '0 2px 4px rgba(26, 22, 20, 0.06), 0 4px 8px rgba(26, 22, 20, 0.06), 0 8px 16px rgba(26, 22, 20, 0.06)',
      },
      borderWidth: {
        'hairline': '0.5px',
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