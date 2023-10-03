import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode,
  bgColorWhite?: boolean,
  bgColorGray?: boolean,
  removePaddingX?: boolean,
  imageBGGray?: string,
  imageBGWhite?: string,
}

export default function Section ({ children, bgColorWhite, removePaddingX, imageBGGray, imageBGWhite, bgColorGray }: SectionProps) {
  return (
    <section className={`flex flex-col w-full ${bgColorWhite && 'bg-white'} ${bgColorGray && 'bg-BeColorBG'} ${imageBGWhite} ${imageBGWhite && 'innerShadowWhite'} ${imageBGGray} ${imageBGGray && 'innerShadowGray'} bg-cover bg-no-repeat justify-start items-center`}>
      <div className={`flex flex-col w-full xl:w-mediunScreen px-3 py-6 xl:py-20 ${ !removePaddingX && ' xl:px-20' } justify-center items-center`}>
        { children }
      </div>
    </section>
  )
}
