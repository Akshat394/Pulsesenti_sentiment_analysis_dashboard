/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',      // Modern blue
        'secondary': '#10B981',    // Emerald green
        'accent': '#8B5CF6',       // Purple
        'background': {
          'dark': '#111827',       // Dark background
          'darker': '#0F172A',     // Darker background
          'light': '#1F2937',      // Lighter background
        },
        'text': {
          'primary': '#F3F4F6',    // Light text
          'secondary': '#9CA3AF',  // Muted text
          'accent': '#60A5FA',     // Accent text
        },
        'border': {
          'light': '#374151',      // Border color
          'dark': '#1F2937',       // Dark border
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom right, #111827, #0F172A)',
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
      },
      backdropBlur: {
        'sm': '4px',
      },
    },
  },
  plugins: [],
};
