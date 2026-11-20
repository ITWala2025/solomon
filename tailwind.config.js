/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // User requested palette: Dusty Peach & Sage Olive with rich contrast backdrops
        peach: {
          50: '#FBF5F2',
          100: '#F6EAE5',
          200: '#EFD5CB',
          300: '#E7BEB0',
          400: '#DFA68F', // Exact Dusty Peach (#DFA68F)
          500: '#CF876D',
          600: '#B8684C',
          700: '#964E36',
          800: '#7B3F2B',
          900: '#5A2D1F',
        },
        olive: {
          50: '#F7F7F3',
          100: '#EEEDE6',
          200: '#DDDBCF',
          300: '#C7C5B2',
          400: '#B8B596',
          500: '#AAA77B', // Exact Sage Olive (#AAA77B)
          600: '#8E8B61',
          700: '#716E4C',
          800: '#565439',
          900: '#3D3C28',
        },
        // Deep high-contrast grounding neutrals to make peach and olive pop with razor-sharp readability
        night: {
          950: '#140E10',
          900: '#1C1518',
          850: '#251C20',
          800: '#30242A',
        },
        crimson: {
          800: '#7E1529',
          900: '#520D1A',
          950: '#34060F',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pill': '0 8px 24px -4px rgba(28, 21, 24, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'pill-hover': '0 12px 32px -4px rgba(28, 21, 24, 0.18), 0 4px 8px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.02)',
      }
    },
  },
  plugins: [],
}
