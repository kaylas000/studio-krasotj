import type { Config } from 'tailwindcss'

const phi = 1.618
const baseSpacing = 8

const config: Config = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0A4D3C',
          light: '#146B5A',
          dark: '#063328',
        },
        champagne: {
          DEFAULT: '#D4B896',
          light: '#E8D4B9',
          dark: '#B89D7A',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          dark: '#F5F0E8',
        },
        anthracite: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
        },
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5vw + 1rem, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.5rem, 3vw + 0.25rem, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'lead': ['1.25rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
        'body': ['1.125rem', { lineHeight: '1.8', letterSpacing: '0.01em' }],
        'body-sm': ['1rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],
        'caption': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.03em', textTransform: 'uppercase' }],
      },
      spacing: {
        ...Object.fromEntries(
          Array.from({ length: 20 }, (_, i) => [
            `phi${i + 1}`,
            `${Math.round(baseSpacing * Math.pow(phi, i))}px`
          ])
        ),
        'section-y': 'clamp(4rem, 10vh, 8rem)',
        'section-x': 'clamp(1.5rem, 5vw, 4rem)',
      },
      borderWidth: {
        'hairline': '1px',
      },
      borderColor: {
        'hairline': 'var(--color-border)',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(26, 26, 26, 0.04), 0 4px 16px -4px rgba(26, 26, 26, 0.03)',
        'card': '0 4px 24px -4px rgba(26, 26, 26, 0.05)',
      },
      transitionDuration: {
        'micro': '150ms',
        'base': '300ms',
        'macro': '500ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      maxWidth: {
        'content': '72ch',
        'display': '90ch',
        'full': '100%',
      },
    },
  },
  plugins: [],
}
export default config