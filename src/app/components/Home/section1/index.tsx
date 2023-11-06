'use client'
import Link from "next/link"
import { FiArrowDown } from "react-icons/fi"
import { useTypewriter } from 'react-simple-typewriter'
import CustomSection from "../../CustomSection"

export default function Section1() {

  const [text] = useTypewriter({
    words: ['Rápidos', 'Diferentes', 'Efetivos'],
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 95,
    deleteSpeed: 30,
  })

  return (
    <section id="inicio" className="relative w-full h-fit overflow-hidden pt-[108px]">
      <video className="videoHome" autoPlay loop muted>
        <source src="/videos/videoHome.mp4" />
      </video>
      <CustomSection>
        <div className="flex flex-col z-10 xl:w-[900px] pt-10 xl:pt-36 pb-5 scroll-mt-52">
          <h2 className="text-BeGreenColor font-bold text-4xl text-center xl:text-6xl">Be Resolution</h2>
          <div className="flex flex-row justify-center items-center">
            <span className="text-white text-3xl xl:text-5xl font-bold py-3">
              <span className="text-BeGreenColor">{'{ Somos: \''}</span>
              {text}
              <span className='text-white font-bold blinking'>{'|'}</span>
              <span className="text-BeGreenColor">{'\' }'}</span>
            </span>
          </div>
          <p className="text-center text-white font-semibold text-xl xl:text-2xl">Somos um time de profissionais apaixonados por tecnologia e aprimoramento de sistemas.</p>
        </div>
        <Link className="bg-BeGreenColor shadow-lg w-fit px-3 py-3 rounded-lg xl:px-4 mb-20 xl:mb-40 text-xl xl:text-2xl font-semibold text-white hoverGlowUp" href="#atividades">Atividades</Link>
        <Link className="text-BeGreenColor transition transform duration-150 hover:text-white text-lg xl:text-xl flex flex-row justify-center items-center mb-4" href="#porqueNossoERP"><FiArrowDown />VER MAIS</Link>
      </CustomSection>
    </section>

  )
}


/*
<p className="text-white text-justify text-lg">
Nosso DNA é impulsionado pelo desenvolvimento contínuo e aperfeiçoamento do nosso ERP SIGE.
Nossa estrutura inclui departamentos de desenvolvimento, implantação e suporte, garantindo um produto abrangente e adaptável
às necessidades de mais de 250 empresas em mais de 13 estados.  Oferecemos gestão eficiente e personalizada para impulsionar nossos clientes.
</p>
*/


// Preciso criar um roteiro
// Convidando para um evento em Maringá Paraná
// Teremos no evento, Happy haour, visitas técinicas, e uma mentoria com Felipe Bernardes e outros cases
// O evento poderá ser parcelado em até 3 vezes no cartão de crédito
// Temos que falar bem de Maringá, sobre seus aspectos
// Evento voltado a Jovens empreendedores do Paraná
