/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00F5FF',
        'neon-purple': '#B026FF',
        'electric-gray': '#2A2F4F',
        'plasma-green': '#39FF14',
        'deep-space': '#0A0A2A',
        'cosmic-purple': '#1A1A3A',
        'holographic': '#F0F8FF',
        'quantum-gray': '#4A4A6A',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to bottom right, #0A0A2A, #1A1A3A)',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00F5FF, 0 0 20px #00F5FF',
        'neon-purple': '0 0 5px #B026FF, 0 0 20px #B026FF',
        'neon-green': '0 0 5px #39FF14, 0 0 20px #39FF14',
      },
      borderRadius: {
        'cyber': '16px',
      },
      backdropBlur: {
        'cyber': '20px',
      },
    },
  },
  plugins: [],
};
