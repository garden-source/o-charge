import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'flow-tile': "url('/images/BG/flow-tile.png')",
      },
      colors: {
        // お好きなキー名を定義
        'purple': '#f2f3fe',
        'pink': '#fffaf7',
        'red': '#fde0e0',
      },
    },
  },
  plugins: [],
}
export default config
