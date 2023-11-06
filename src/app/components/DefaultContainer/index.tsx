import { ReactNode } from "react";

interface DefaultSectionProp {
  children: ReactNode,
  removePaddingX?: boolean,
  imgURL?: string
}

export default function DefaultSection({ children, removePaddingX, imgURL }: DefaultSectionProp) {
  return (
    <section className={`overflow-hidden z-[0] w-full relative`}>
      { imgURL && <img className="absolute top-0 left-0 w-full h-full z-[1] object-cover" width={"100%"} height={"100%"} loading="lazy" src={imgURL} alt="Fundo da seção!" /> }
      <div className="flex justify-center items-center">
        <div className={`flex flex-col w-full xl:w-mediunScreen px-3 py-6 xl:py-20 ${!removePaddingX && ' xl:px-20'} justify-center items-center`}>{children}</div>
      </div>
    </section>
  )
}


// useEffect(() => {
//   let navUser = navigator.userAgent
//   if (navUser.includes('Mac') || navUser.includes('iPhone') || navUser.includes('iPodi') || navUser.includes('Pad')) {
//     setIsIOS(true);
//   }
// }, [])
