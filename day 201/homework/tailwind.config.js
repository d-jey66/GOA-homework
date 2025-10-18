/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0F1116',
        panel: '#171B21',
        panel2: '#1D222B',
        muted: '#94A3B8',
        accent: '#FF7E61',
        accent2: '#F39277',
      }
    }
  },
  plugins: [],
}
