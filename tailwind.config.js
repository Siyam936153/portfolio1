/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EF',
        ink: '#161513',
        accent: '#FF5A3C',
        accent2: '#7C6CF0',
        sage: '#B8C79A',
        sand: '#F0E4D3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        blob: '40% 60% 60% 40% / 50% 45% 55% 50%',
      },
      animation: {
        blob: 'blob 8s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '40% 60% 60% 40% / 50% 45% 55% 50%' },
          '50%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
