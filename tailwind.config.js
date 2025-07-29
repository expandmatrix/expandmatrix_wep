/** @type { Import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '100%',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
        '3xl': '1400px',
      },
    },
    extend: {
      screens: {
        '2xl': '1920px',
        '3xl': '2560px',
      },
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#1A1A1A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'accent-primary': '#00FF7F',
        'accent-secondary': '#00D4AA',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 255, 127, 0.6)',
            transform: 'scale(1.02)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.liquid-glass-card': {
          background: 'rgba(26, 26, 26, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 255, 127, 0.1)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
        '.glow-on-hover': {
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 30px rgba(0, 255, 127, 0.4)',
            transform: 'translateY(-2px)',
          }
        },
        '.fluid-hero': {
          fontSize: 'clamp(3.75rem, 8vw, 8rem)',
          lineHeight: '1.1',
        },
        '.fluid-heading': {
          fontSize: 'clamp(3rem, 6vw, 6rem)',
          lineHeight: '1.1',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}