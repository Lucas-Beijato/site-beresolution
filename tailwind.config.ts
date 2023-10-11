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
      },
      dropShadow: {
        'model1': '0 4px 3px rgb(0 0 0 / 0.25)',
      }
    }
  },
  plugins: [],
}
export default config
