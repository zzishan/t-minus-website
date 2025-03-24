/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neon Green Scheme
        'midnight': '#0D1117', // Deep space black
        'charcoal': '#161B22', // Dark charcoal
        'neon-green': '#4ADE80', // Vibrant green
        'cyber-teal': '#2DD4BF', // Teal accent
        'tech-blue': '#38BDF8', // Blue accent
      },
      fontFamily: {
        'display': ['var(--font-exo)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.7s ease-in forwards',
        'fade-in-slow': 'fade-in 1.2s ease-in forwards',
        'slide-up': 'slide-up 0.9s ease-out forwards',
        'slide-up-delay': 'slide-up 0.9s ease-out 0.3s forwards',
        'slide-down': 'slide-down 0.9s ease-out forwards',
        'slide-left': 'slide-left 0.9s ease-out forwards',
        'slide-right': 'slide-right 0.9s ease-out forwards',
        'scale-in': 'scale-in 0.7s ease-out forwards',
        'blur-in': 'blur-in 0.7s ease-out forwards',
        'rotate-in': 'rotate-in 0.7s ease-out forwards',
        'bounce-in': 'bounce-in 1s forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-left': {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'blur-in': {
          '0%': { filter: 'blur(8px)', opacity: 0 },
          '100%': { filter: 'blur(0)', opacity: 1 },
        },
        'rotate-in': {
          '0%': { transform: 'rotate(-5deg) scale(0.9)', opacity: 0 },
          '100%': { transform: 'rotate(0) scale(1)', opacity: 1 },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '40%': { transform: 'scale(1.1)', opacity: 1 },
          '80%': { transform: 'scale(0.9)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
} 