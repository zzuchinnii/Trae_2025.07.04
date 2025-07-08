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
        primary: {
          '100': '#e8bcf0',
          '200': '#d88de5',
          '300': '#c85edb',
          '400': '#b82fd0',
          '500': '#8e24a2',
          '600': '#651a73',
        },
        neutral: {
          '100': '#f5f5f5',
          '200': '#e5e5e5',
          '300': '#d4d4d4',
          '400': '#a3a3a3',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
        },
        accent: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fcd9c1',
          300: '#f9c097',
          400: '#8A6170',
          500: '#7A5460',
          600: '#6A4750',
          700: '#bc4724',
          800: '#963a23',
          900: '#793220',
          950: '#411810',
        },
        feedback: {
          'success': '#4ade80',
          'warning': '#facc15',
          'error': '#f87171',
          'info': '#60a5fa',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;