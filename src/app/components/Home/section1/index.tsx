import Link from "next/link"
import { FiArrowDown } from "react-icons/fi"
import CustomSection from "../../CustomSection"
import TypewriterComponent from "./components/typewriter"

export default function Section1() {

  return (
    <section id="inicio" className="relative w-full h-fit overflow-hidden pt-[108px]">
      <video className="videoHome" autoPlay loop muted>
        <source src="/videos/videoHome.mp4" />
      </video>
      <CustomSection>
        <div className="flex flex-col z-10 xl:w-[900px] pt-10 xl:pt-36 pb-5 scroll-mt-52">
          <h2 className="text-BeGreenColor font-bold text-4xl text-center xl:text-6xl">Be Resolution</h2>
            <TypewriterComponent/>
          <p className="text-center text-white font-semibold text-xl xl:text-2xl">Somos um time de profissionais apaixonados por tecnologia e aprimoramento de sistemas.</p>
        </div>
        <Link className="bg-BeGreenColor shadow-lg w-fit px-3 py-3 rounded-lg xl:px-4 mb-20 xl:mb-40 text-xl xl:text-2xl font-semibold text-white hoverGlowUp" href="#atividades">Atividades</Link>
        <Link className="text-BeGreenColor transition transform duration-150 hover:text-white text-lg xl:text-xl flex flex-row justify-center items-center mb-4" href="#porqueNossoERP"><FiArrowDown />VER MAIS</Link>
      </CustomSection>
    </section>

  )
}
