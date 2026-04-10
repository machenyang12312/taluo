import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#32d6ff',
          silver: '#c4ccd4',
          midnight: '#050505',
          deep: '#07111a'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(50,214,255,0.18)',
        neon: '0 0 30px rgba(50,214,255,0.18), 0 0 50px rgba(122,87,255,0.10)'
      }
    }
  },
  plugins: []
}

export default config
