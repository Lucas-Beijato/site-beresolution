import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode,
  bgColorWhite?: boolean,
  bgColorGray?: boolean,
  removePaddingX?: boolean,
  imageBGGray?: string,
  imageBGWhite?: string,
  bgCustomImg1?: boolean
}

export default function Section ({ children, bgColorWhite, removePaddingX, imageBGGray, imageBGWhite, bgColorGray, bgCustomImg1 }: SectionProps) {
  return (
    <section className={`flex flex-col w-full ${bgColorWhite ? 'bg-white' : ''} ${bgColorGray ? 'bg-BeColorBG' : ''} ${imageBGWhite || ''} ${imageBGWhite ? 'innerShadowWhite' : ''} ${imageBGGray || ''} ${imageBGGray ? 'innerShadowGray' : ''} ${ bgCustomImg1 ? 'bg-bgCustom1 bg-fixed' : ''} bg-cover bg-no-repeat bg-center justify-start items-center`}>
      <div className={`flex flex-col w-full xl:w-mediunScreen px-3 py-6 xl:py-20 ${ !removePaddingX && ' xl:px-20' } justify-center items-center`}>
        { children }
      </div>

    </section>
  )
}
