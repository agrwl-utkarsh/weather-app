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
        background: '#0f0f0f',
        card: 'rgba(255, 255, 255, 0.05)',
        'card-border': 'rgba(255, 255, 255, 0.08)',
        accent: '#6c63ff',
        'accent-hover': '#5a52d4',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-muted': '#8b8b8b',
      },
      borderRadius: {
        'card': '16px',
        'input': '14px',
      },
      backdropBlur: {
        'card': '10px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config