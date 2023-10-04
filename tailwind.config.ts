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
        'bg1Gray': "url('/bgs/webp/fundo 1.webp')",
        'bg2Gray': "url('/bgs/webp/fundo 2.webp')",
        'bg3Gray': "url('/bgs/webp/fundo 3.webp')",
        'bg4Gray': "url('/bgs/webp/fundo 4.webp')",
        'bg5Gray': "url('/bgs/webp/fundo 5.webp')",
        'bg6Gray': "url('/bgs/webp/fundo 6.webp')",

        'bg1White': "url('/bgs/webp/fundo 1 branco.webp')",
        'bg2White': "url('/bgs/webp/fundo 2 branco.webp')",
        'bg3White': "url('/bgs/webp/fundo 3 branco.webp')",
        'bg4White': "url('/bgs/webp/fundo 4 branco.webp')",
        'bg5White': "url('/bgs/webp/fundo 5 branco.webp')",
        'bg6White': "url('/bgs/webp/fundo 6 branco.webp')",

        'bgCustom1': "url('/bgs/webp/porqueABe_bg1.webp')"
      },
      dropShadow: {
        'model1': '0 4px 3px rgb(0 0 0 / 0.25)',
      }
    },
  },
  plugins: [],
}
export default config
