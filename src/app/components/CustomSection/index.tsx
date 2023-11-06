"use client"
import { ReactNode } from "react";

interface CustomSectionProp {
  children: ReactNode,
  removePaddingX?: boolean,
  imgURL?: string,
  imgCustomStyle?: string,
  colorDark?: boolean,
  mobileOff?: boolean,
  CustomBGComponent?: ReactNode
}

export default function CustomSection({ children, removePaddingX, imgURL, imgCustomStyle, colorDark, mobileOff, CustomBGComponent }: CustomSectionProp) {
  return (
    <section className={`overflow-hidden z-[0] w-full relative ${colorDark ? 'bg-BeColorBG': ''}`}>
      {imgURL && <img className={`${imgCustomStyle} hidden xl:block absolute z-[1]`} loading="lazy" src={imgURL} alt="Fundo da seção." /> }
      {CustomBGComponent && <div className="w-full h-full hidden xl:block absolute z-[1]">{CustomBGComponent}</div>}
      <div className="flex justify-center items-center z-10">
        <div className={`flex flex-col w-full xl:w-mediunScreen px-3 py-6 xl:py-20 ${!removePaddingX && ' xl:px-20'} justify-center items-center`}>{children}</div>
      </div>
    </section>
  )
}
