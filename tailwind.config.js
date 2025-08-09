/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#1a1a2e',
          100: '#16213e',
          200: '#0f3460',
          500: '#e94560',
          600: '#533c96',
          700: '#4a2c7a',
          800: '#16213e',
          900: '#1a1a2e',
        },
        gold: {
          400: '#ffd700',
          500: '#ffcc00',
          600: '#e6b800',
        },
        royal: {
          blue: '#0f3460',
          purple: '#533c96',
          dark: '#1a1a2e',
        }
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(135deg, #1a1a2e 0%, #533c96 50%, #0f3460 100%)',
        'gradient-gold': 'linear-gradient(135deg, #ffd700 0%, #ffcc00 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
