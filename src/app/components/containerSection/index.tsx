import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode,
  bgWhite?: boolean,
  removePaddingX?: boolean
}

export default function Section ({ children, bgWhite, removePaddingX }: SectionProps) {
  return (
    <section className={`flex flex-col w-full ${ bgWhite && 'bg-white' } justify-start items-center`}>
      <div className={`flex flex-col w-full xl:w-mediunScreen px-3 xl:py-20 ${ !removePaddingX && ' xl:px-20' } justify-center items-center`}>
        { children }
      </div>
    </section>
  )
}
