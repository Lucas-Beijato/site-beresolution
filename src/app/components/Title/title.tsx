interface TitleProps {
  id?: string,
  title: string,
  subtitle: string,
  colorTitleDark?: boolean
}

const Title = ({ title, subtitle, colorTitleDark, id }: TitleProps) => {
  return (
    <>
      <h3 id={id} className="text-BeGreenColor text-center text-lg font-medium scroll-mt-56">{ subtitle }</h3>
      <h2 className={`${ colorTitleDark ? 'text-BeColorBG' : 'text-white'} font-bold text-5xl mt-2 text-center`}>{ title }</h2>
    </>
  )
}

export default Title
