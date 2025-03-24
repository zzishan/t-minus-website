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
      },
    },
  },
  plugins: [],
} 