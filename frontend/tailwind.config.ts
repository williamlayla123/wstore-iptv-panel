import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ff',
          100: '#e1ebff',
          200: '#bfd0ff',
          300: '#93b2ff',
          400: '#688aff',
          500: '#4969ff',
          600: '#2d46ec',
          700: '#2439c7',
          800: '#1f2f9b',
          900: '#202f7e',
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(73, 105, 255, 0.35)',
      }
    }
  },
  plugins: [],
};

export default config;
