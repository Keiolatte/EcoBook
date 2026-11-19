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
        'forest': '#244B3C',
        'sage': '#6F9278',
        'cream': '#E8DCC5',
        'offwhite': '#F8F7F2',
        'surface': '#FFFFFF',
        'charcoal': '#252B27',
        'muted': '#68736C',
        'border': '#E3E7E1',
      },
      // GREEN CODING: Font dikelola oleh next/font di layout.tsx (self-hosted, subset)
      // Menggunakan CSS variable dari next/font sebagai fallback
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};