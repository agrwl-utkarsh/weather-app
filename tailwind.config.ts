import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#ffffff',
        card: '#ffffff',
        'card-border': '#e0e0e0',
        accent: '#ff0000',
        'accent-hover': '#cc0000',
        'text-primary': '#000000',
        'text-secondary': '#333333',
        'text-muted': '#666666',
        'input-bg': '#fafafa',
        'input-border': '#e0e0e0',
        'forecast-bg': '#fafafa',
      },
      borderRadius: {
        'card': '0px',
        'input': '4px',
        'forecast': '0px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
    colors: {
      primary: '#ff0000',
      secondary: '#000000',
      accent: '#ff0000',
    },
  },
  plugins: [],
}
export default config