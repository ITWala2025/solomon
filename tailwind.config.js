/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#07111E',
          900: '#0A192F',
          850: '#0C203B',
          800: '#0F2744',
          700: '#1A365D',
          600: '#234E82',
          500: '#3182CE',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.02)',
        'glow': '0 0 25px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}
