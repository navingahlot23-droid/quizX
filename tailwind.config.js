module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0b1020',
        card: '#0f1724',
        accent: '#7c3aed',
        accent2: '#06b6d4'
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-6px)' },
          '40%': { transform: 'translateX(6px)' },
          '60%': { transform: 'translateX(-4px)' },
          '80%': { transform: 'translateX(4px)' }
        },
        sparkle: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
          '100%': { opacity: 0, transform: 'scale(1.6)' }
        }
      },
      animation: {
        shake: 'shake 0.45s ease-in-out',
        sparkle: 'sparkle 0.6s ease-out'
      }
    }
  },
  plugins: []
};
