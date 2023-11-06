import { ReactNode } from "react";

interface DefaultSectionProp {
  children: ReactNode,
  removePaddingX?: boolean
}

export default function DefaultSection({ children, removePaddingX }: DefaultSectionProp) {
  return (
    <section className={`overflow-hidden z-10 w-full flex flex-col justify-start items-center`}>
      <div className={`flex flex-col w-full xl:w-mediunScreen px-3 py-6 xl:py-20 ${!removePaddingX && ' xl:px-20'} justify-center items-center`}>{children}</div>
    </section>
  )
}
