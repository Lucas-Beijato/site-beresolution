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
        'bgGray1': "url('/bgs/webp/fundo 1.webp')",
        'bgGray2': "url('/bgs/webp/fundo 2.webp')",
        'bgGray3': "url('/bgs/webp/fundo 3.webp')",
        'bgGray4': "url('/bgs/webp/fundo 4.webp')",
        'bgGray5': "url('/bgs/webp/fundo 5.webp')",
        'bgGray6': "url('/bgs/webp/fundo 6.webp')",
        'bgWhite1': "url('/bgs/webp/fundo 1 branco.webp')",
        'bgWhite2': "url('/bgs/webp/fundo 2 branco.webp')",
        'bgWhite3': "url('/bgs/webp/fundo 3 branco.webp')",
        'bgWhite4': "url('/bgs/webp/fundo 4 branco.webp')",
        'bgWhite5': "url('/bgs/webp/fundo 5 branco.webp')",
        'bgWhite6': "url('/bgs/webp/fundo 6 branco.webp')",
        'bgCustom1': "url('/bgs/webp/porqueABe_bg1.webp')",

        'bgGrayIOS1': "url('/bgs/fundo 1.png')",
        'bgGrayIOS2': "url('/bgs/fundo 2.png')",
        'bgGrayIOS3': "url('/bgs/fundo 3.png')",
        'bgGrayIOS4': "url('/bgs/fundo 4.png')",
        'bgGrayIOS5': "url('/bgs/fundo 5.png')",
        'bgGrayIOS6': "url('/bgs/fundo 6.png')",
        'bgWhiteIOS1': "url('/bgs/fundo 1 branco.png')",
        'bgWhiteIOS2': "url('/bgs/fundo 2 branco.png')",
        'bgWhiteIOS3': "url('/bgs/fundo 3 branco.png')",
        'bgWhiteIOS4': "url('/bgs/fundo 4 branco.png')",
        'bgWhiteIOS5': "url('/bgs/fundo 5 branco.png')",
        'bgWhiteIOS6': "url('/bgs/fundo 6 branco.png')",
        'bgCustom1IOS': "url('/bgs/porqueABe_bg1.png')"
      },
      dropShadow: {
        'model1': '0 4px 3px rgb(0 0 0 / 0.25)',
      }
    },
  },
  plugins: [],
}
export default config
