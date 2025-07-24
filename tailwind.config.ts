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
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'collision-flash': 'collision-flash 0.3s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 127, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 127, 0.8), 0 0 60px rgba(0, 255, 127, 0.3)',
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0px)',
          },
          '50%': { 
            transform: 'translateY(-10px)',
          },
        },
        'fadeInUp': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'collision-flash': {
          '0%': { 
            backgroundColor: 'rgba(0, 255, 127, 0.1)',
            transform: 'scale(1)',
          },
          '50%': { 
            backgroundColor: 'rgba(0, 255, 127, 0.3)',
            transform: 'scale(1.1)',
          },
          '100%': { 
            backgroundColor: 'rgba(0, 255, 127, 0.1)',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
