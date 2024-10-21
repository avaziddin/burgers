import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(255, 171, 8, 1)',
        foreground: 'var(--foreground)',
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities(
        {
          '.scrollbar-hidden': {
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          },
          '.scrollbar-hidden::-webkit-scrollbar': {
            display: 'none',
          },
          '.border-border': {
            border: 'none', // Замените на нужные вам стили
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};

export default config;
