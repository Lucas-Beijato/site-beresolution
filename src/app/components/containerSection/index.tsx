"use client"
import { ReactNode, useEffect, useState } from "react"

interface SectionProps {
  children: ReactNode,
  bgColorWhite?: boolean,
  bgColorGray?: boolean,
  removePaddingX?: boolean,
  imageBG?: { imageColor: string | undefined, chosenImage: number | undefined}
}

export default function Section({ children, bgColorWhite, removePaddingX, imageBG, bgColorGray }: SectionProps) {

  const [isIOS, setIsIOS] = useState(false)

  const listUrlsImagesDefaulGray = [
    "url('/bgs/webp/fundo 1.webp')",
    "url('/bgs/webp/fundo 2.webp')",
    "url('/bgs/webp/fundo 3.webp')",
    "url('/bgs/webp/fundo 4.webp')",
    "url('/bgs/webp/fundo 5.webp')",
    "url('/bgs/webp/fundo 6.webp')",
  ]
  const listUrlsImagesDefaulWhite = [
    "url('/bgs/webp/fundo 1 branco.webp')",
    "url('/bgs/webp/fundo 2 branco.webp')",
    "url('/bgs/webp/fundo 3 branco.webp')",
    "url('/bgs/webp/fundo 4 branco.webp')",
    "url('/bgs/webp/fundo 5 branco.webp')",
    "url('/bgs/webp/fundo 6 branco.webp')",
  ]
  const listUrlsImagesDefaulCustum = ["url('/bgs/webp/porqueABe_bg1.webp')",]

  const listUrlsImagesIOSGray = [
    "url('/bgs/fundo 1.png')",
    "url('/bgs/fundo 2.png')",
    "url('/bgs/fundo 3.png')",
    "url('/bgs/fundo 4.png')",
    "url('/bgs/fundo 5.png')",
    "url('/bgs/fundo 6.png')",
  ]
  const listUrlsImagesIOSWhite = [
    "url('/bgs/fundo 1 branco.png')",
    "url('/bgs/fundo 2 branco.png')",
    "url('/bgs/fundo 3 branco.png')",
    "url('/bgs/fundo 4 branco.png')",
    "url('/bgs/fundo 5 branco.png')",
    "url('/bgs/fundo 6 branco.png')",
  ]
  const listUrlsImagesIOSCustum = ["url('/bgs/porqueABe_bg1.png')",]

  useEffect(() => {
    let navUser = navigator.userAgent
    if (navUser.includes('Mac') || navUser.includes('iPhone') || navUser.includes('iPodi') || navUser.includes('Pad')) {
      setIsIOS(true);
    }
  }, [])

  function defineBG(chosenImage: number | undefined, imageType: string | undefined, isIOS: boolean) {
    if (chosenImage === undefined || imageType === undefined) {
      return ''
    }
    switch (imageType) {
      case 'Gray': {
        if (isIOS) {
          return listUrlsImagesIOSGray[chosenImage - 1]
        } else {
          return listUrlsImagesDefaulGray[chosenImage - 1]
        }
      }
      case 'White': {
        if (isIOS) {
          return listUrlsImagesIOSWhite[chosenImage - 1]
        } else {
          return listUrlsImagesDefaulWhite[chosenImage - 1]
        }
      }
      case 'Custom': {
        if (isIOS) {
          return listUrlsImagesIOSCustum[chosenImage - 1]
        } else {
          return listUrlsImagesDefaulCustum[chosenImage - 1]
        }
      }
    }
  }

  return (
    <section style={{ backgroundImage: `${ imageBG != undefined ? defineBG(imageBG.chosenImage, imageBG.imageColor, isIOS) : ''}`}} className={`${bgColorWhite ? 'bg-white' : ''} ${bgColorGray ? 'bg-BeColorBG' : ''} ${ imageBG != undefined ? ( imageBG.imageColor != 'Custom' ? (imageBG?.imageColor === 'Gray' ? 'innerShadowGray' : 'innerShadowWhite') : '') : '' } overflow-hidden z-10 flex flex-col w-full bg-cover bg-no-repeat bg-center justify-start items-center`}>
      <div className={`flex flex-col w-full xl:w-mediunScreen px-3 py-6 xl:py-20 ${!removePaddingX && ' xl:px-20'} justify-center items-center`}>{children}</div>
    </section>
  )
}
