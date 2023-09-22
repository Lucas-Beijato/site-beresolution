import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'BeColorBG': '#2D2F31',
      'BeGreenColor': '#29B99B',
      'white': '#fff',
    },
    extend: {
      width: {
        'mediunScreen': '1300px',
        'AtividadesMiniCards': '134px',
        '250px' : '250px'
      },
      height: {
        'AtividadesMiniCards': '134px'
      }
    }
  },
  plugins: [],
}
export default config
