/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0E1218',
        carbon: '#181C24',
        graphite: '#363B45',
        steel: '#6A727E',
        slate: '#A6ACB6',
        mist: '#C0C4CB',
        halogen: '#E8EAEC',
        bone: '#EBE6D7',
        paper: '#F7F4EA',
        filament: {
          DEFAULT: '#E1925A',
          hover: '#C97D48',
        },
        phosphor: '#7BC07A',
        caution: '#C03A35',
      },
      fontFamily: {
        sans: ['Geist', 'Söhne', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Berkeley Mono"', 'ui-monospace', 'monospace'],
        display: ['Geist', '"Söhne Breit"', '"NB Architekt"', 'sans-serif'],
      },
      fontWeight: {
        display: '900',
      },
      letterSpacing: {
        mono: '0.08em',
        'mono-wide': '0.1em',
        display: '-0.025em',
        'display-tight': '-0.02em',
      },
      transitionTimingFunction: {
        instrument: 'cubic-bezier(0.2, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        instrument: '320ms',
        architectural: '600ms',
      },
    },
  },
  plugins: [],
}
