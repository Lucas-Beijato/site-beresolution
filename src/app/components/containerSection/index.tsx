"use client"
import { ReactNode, useEffect, useState } from "react"

interface SectionProps {
  children: ReactNode,
  bgColorWhite?: boolean,
  bgColorGray?: boolean,
  removePaddingX?: boolean,

  bgCustomImg1?: boolean

  imageBGGray?: string,
  imageBGWhite?: string,
}

export default function Section({ children, bgColorWhite, removePaddingX, imageBGGray, imageBGWhite, bgColorGray, bgCustomImg1 }: SectionProps) {

  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    let navUser = navigator.userAgent
    if (navUser.includes('Mac') || navUser.includes('iPhone') || navUser.includes('iPodi') || navUser.includes('Pad')) {
      setIsIOS(true);
    }
  }, [])

  const classesDefault = ` ${(imageBGGray) ? ('bg-bgGray' + imageBGGray) : ''} ${(imageBGWhite) ? ('bg-bgWhite' + imageBGWhite) : ''} `
  const classesIOS = ` ${(imageBGGray) ? ('bg-bgGrayIOS' + imageBGGray) : ''} ${(imageBGWhite) ? ('bg-bgWhiteIOS' + imageBGWhite) : ''} `

  return (
    <section className={`overflow-hidden flex flex-col w-full ${bgColorWhite ? 'bg-white' : ''} ${bgColorGray ? 'bg-BeColorBG' : ''} ${ isIOS ? classesIOS : classesDefault } bg-cover bg-no-repeat bg-center justify-start items-center`}>
      <div className={`flex flex-col w-full xl:w-mediunScreen px-3 py-6 xl:py-20 ${!removePaddingX && ' xl:px-20'} justify-center items-center`}>{children}</div>
    </section>
  )
}



// ${imageBGWhite || ''} ${imageBGWhite ? 'innerShadowWhite' : ''} ${imageBGGray || ''} ${imageBGGray ? 'innerShadowGray' : ''} ${ bgCustomImg1 ? 'bg-bgCustom1 bg-fixed' : ''}
