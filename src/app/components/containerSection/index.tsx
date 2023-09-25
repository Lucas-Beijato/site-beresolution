import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode,
  bgWhite?: boolean,
  removePaddingX?: boolean
}

export default function Section ({ children, bgWhite, removePaddingX }: SectionProps) {
  return (
    <section className={`flex flex-col w-full ${ bgWhite && 'bg-white' } justify-start items-center`}>
      <div className={`flex flex-col xl:w-mediunScreen py-20 ${ !removePaddingX && 'px-20' } justify-center items-center`}>
        { children }
      </div>
    </section>
  )
}
