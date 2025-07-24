/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#1A1A1A',
        'bg-tertiary': '#2A2A2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'text-muted': '#808080',
        'accent-primary': '#00FF7F',
        'accent-glow': '#00FF7F80',
        'accent-dark': '#00CC66',
        'border-color': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px #00FF7F80' },
          '50%': { boxShadow: '0 0 40px #00FF7F' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
