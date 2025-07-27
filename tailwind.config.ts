import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif', 
          'system-ui', 
          'sans-serif', 
          '"Apple Color Emoji"', 
          '"Segoe UI Emoji"', 
          '"Segoe UI Symbol"', 
          '"Noto Color Emoji"'
        ],
      },
      colors: {
        // Pozadí
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#1A1A1A',
        'bg-tertiary': '#2A2A2A',
        
        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'text-muted': '#808080',
        
        // Akcenty
        'accent-primary': '#00FF7F',
        'accent-glow': '#00FF7F80',
        'accent-dark': '#00CC66',
        
        // Borders
        'border-color': '#333333',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px #00FF7F' },
          '100%': { boxShadow: '0 0 20px #00FF7F, 0 0 30px #00FF7F' },
        }
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.liquid-glass-card': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 255, 127, 0.1)',
          borderRadius: '16px',
        },
        '.glow-on-hover:hover': {
          boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)',
        }
      })
    }
  ]
}

export default config
