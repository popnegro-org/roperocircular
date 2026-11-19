/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f3f7f4',
          100: '#e3ebe5',
          200: '#c4d5ca',
          300: '#9bb8a6',
          400: '#6f967f',
          500: '#4f7a62',
          600: '#3d614e',
          700: '#324e40',
          800: '#293f34',
          900: '#1f3028',
          950: '#121e18',
        },
        olive: {
          50: '#f7f7f1',
          100: '#edeee2',
          200: '#d8dcc4',
          300: '#bcc29d',
          400: '#9da675',
          500: '#828a56',
          600: '#666d44',
          700: '#4f5436',
          800: '#41442e',
          900: '#383a28',
        },
        cream: {
          50: '#fdfcf8',
          100: '#faf7ef',
          200: '#f3ede0',
          300: '#e8dfc9',
          400: '#d8caa3',
          500: '#c6b183',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
