import { ReactNode } from "react";

interface CustomSectionProp {
  children: ReactNode,
  removePaddingX?: boolean,
  imgURL?: string,
  imgCustomStyle?: string,
  colorDark?: boolean,
  mobileOff?: boolean
}

export default function CustomSection({ children, removePaddingX, imgURL, imgCustomStyle, colorDark, mobileOff }: CustomSectionProp) {
  return (
    <section className={`overflow-hidden z-[0] w-full relative ${colorDark ? 'bg-BeColorBG': ''}`}>
      { !mobileOff && imgURL && <img className={`${imgCustomStyle} absolute z-[1]`} loading="lazy" src={imgURL} alt="Fundo da seção." /> }
      <div className="flex justify-center items-center z-10">
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
