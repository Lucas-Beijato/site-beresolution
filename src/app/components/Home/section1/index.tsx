import Link from "next/link"
import { FiArrowDown } from "react-icons/fi"
import Section from "@/app/components/containerSection"

export default function Section1() {
  return (
    <Section>
      <div id="inicio" className="flex flex-col xl:w-[900px] pt-40 pb-5">
        <h2 className="text-BeGreenColor font-bold text-2xl">UM POUCO SOBRE NÓS</h2>
        <p className="text-white text-justify text-lg">Somos um time de profissionais apaixonados por tecnologia e aprimoramento de sistemas. Nosso DNA é impulsionado pelo desenvolvimento contínuo e aperfeiçoamento do nosso ERP SIGE. Nossa estrutura inclui departamentos de desenvolvimento, implantação e suporte, garantindo um produto abrangente e adaptável às necessidades de mais de 250 empresas em mais de 13 estados.  Oferecemos gestão eficiente e personalizada para impulsionar nossos clientes.</p>
      </div>
      <Link className="bg-BeGreenColor shadow-lg w-fit py-2 rounded-lg px-4 mb-40 text-2xl font-semibold text-white transition transform duration-150 hover:scale-105" href="#atividades">Atividades</Link>
      <Link className="text-BeGreenColor transition transform duration-150 hover:text-white text-xl flex flex-row justify-center items-center mb-4" href="#porqueNossoERP"><FiArrowDown />VER MAIS</Link>
    </Section>
  )
}
