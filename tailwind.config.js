/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise Academic Crimson / Claret Palette (Refined adaptation of solomongrinds.ie reddish theme)
        crimson: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F8CFD7',
          300: '#F2A6B5',
          400: '#E8748C',
          500: '#D94565',
          600: '#BD2B4A',
          700: '#9E1C36',
          800: '#7E1529', // Core Academic Claret
          850: '#681121',
          900: '#520D1A', // Deep Heritage Burgundy
          950: '#34060F', // Ultra-deep Slate Crimson
        },
        brand: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#090D16',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
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
        'pill': '0 10px 30px -5px rgba(82, 13, 26, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
        'pill-hover': '0 16px 36px -4px rgba(82, 13, 26, 0.20), 0 6px 10px -2px rgba(15, 23, 42, 0.08)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.02)',
        'glow-crimson': '0 0 25px rgba(158, 28, 54, 0.35)',
      }
    },
  },
  plugins: [],
}
