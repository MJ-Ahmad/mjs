import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sovereign: {
          50: '#f3f7ff',
          100: '#e7eeff',
          200: '#c9d9ff',
          300: '#a0bcff',
          400: '#6f8ef6',
          500: '#4d66db',
          600: '#3a4db3',
          700: '#2e3c8f',
          800: '#1d2964',
          900: '#0d153b',
        },
        accent: {
          gold: '#f4c96b',
          jade: '#14b8a6',
          mint: '#7dd3a9',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(90, 120, 255, 0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
