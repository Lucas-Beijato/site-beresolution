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
      backgroundImage: {
        'bg1Gray': "url('/bgs/fundo 1.png')",
        'bg2Gray': "url('/bgs/fundo 2.png')",
        'bg3Gray': "url('/bgs/fundo 3.png')",
        'bg4Gray': "url('/bgs/fundo 4.png')",
        'bg5Gray': "url('/bgs/fundo 5.png')",
        'bg6Gray': "url('/bgs/fundo 6.png')",

        'bg1White': "url('/bgs/fundo 1 branco.png')",
        'bg2White': "url('/bgs/fundo 2 branco.png')",
        'bg3White': "url('/bgs/fundo 3 branco.png')",
        'bg4White': "url('/bgs/fundo 4 branco.png')",
        'bg5White': "url('/bgs/fundo 5 branco.png')",
        'bg6White': "url('/bgs/fundo 6 branco.png')",

        'bgCustom1': "url('/bgs/porqueABe_bg1.jpg')"
      },
      dropShadow: {
        'model1': '0 4px 3px rgb(0 0 0 / 0.25)',
      }
    },
  },
  plugins: [],
}
export default config
