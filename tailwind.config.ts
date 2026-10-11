import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#f4f4f6',
        card: '#ffffff',
        'card-border': '#e8e8ec',
        accent: '#ff5252',
        'accent-hover': '#ff3333',
        'text-primary': '#1a1a1a',
        'text-secondary': '#666666',
        'text-muted': '#888888',
        'input-bg': '#f4f4f6',
        'input-border': '#e8e8ec',
        'forecast-bg': '#f4f4f6',
      },
      borderRadius: {
        'card': '24px',
        'input': '16px',
        'forecast': '12px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config