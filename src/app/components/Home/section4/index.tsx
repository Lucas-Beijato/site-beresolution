import Section from "@/app/components/containerSection"
import Image from "next/image"
import defaultIcon from '../../../../../public/defaultIcon.png'
import Link from "next/link"

export default function Section4() {
  return (
    <Section>

      <h2 id="sobreNos" className="text-white w-full text-4xl xl:text-5xl text-start font-bold mb-3 scroll-mt-52">Conheça a <br/><span className="text-BeGreenColor">Be Resolution</span></h2>
      <p className="text-white text-base xl:text-xl text-justify">Nosso negócio é sistema, somos engenheiros de software, analista de sistema, programador, administrador de sistema, contador, sim somos um time que leva na veia tecnologia, tudo que esta relacionado a melhoria de sistema, desenvolvimento de novas rotinas que leve nosso produto a ser maior e melhor a cada dia, esse é o nosso DNA.<br/><br/>
        Essa é a nossa essência, e não é sisteminha como comumente se fala por ai, é um "sistemão" trata-se de um ERP carinhosamente batizado de SIGE, parrudo, vai muito além de uma simples necessidade fiscal de emitir nota e controlar o contas a pagar e receber. Há uma história de crescimento e aprendizado por trás da Be Resolution, uma jornada iniciada a mais de 30 anos, sempre obstinados. Somos do noroeste do paraná, estamos sediados em Maringá, nossa estrutura conta com 3 grandes departamentos, desenvolvimento, implantação e suporte, as três divisões da empresa que que nos permite melhorar continuamente nosso produto, garantir que nosso sistema tenha abrangência e aderência total ao negócio de cada cliente, e finalmente nosso suporte que esta sempre a postos para toda e qualquer eventualidade que venha a ocorrer durante a usabilidade do sistema, essa equipe nos permite levar nosso produto a mais de 13 estados e estarmos presentes em mais de 250 empresas. Nascemos da necessidade do setor de abate, e arquitetamos toda a estrutura do sistema a partir da contabilidade, controlar toda operação do abatedouro era uma premissa básica para permitir auditar cada operação da organização, por isso uma grande decisão foi tomada na época, e assim como o alicerce esta para a edificação, a arquitetura de nosso sistema foi projetada em uma fundação sólida para suportar o crescimento que viria a seguir, assim iniciamos nossa história no setor de desenvolvimento de soluções inteligentes, ágeis e completas. De lá para cá dois grandes marcos ocorreram na empresa, em 2006 houve grande intensificação da atuação no setor industrial e uma dissolução societária, onde a atividade de abate deixou de ser nosso foco e houve grande evolução do sistema para outros setores, já em 2019 a mudança do nome fantasia para Be Resolution Softwares Group nos tornou reconhecidamente como uma das melhores empresas fornecedora de software ERP da nossa região.<br/><br/>
        Hoje proporcionamos uma gestão sólida, singular para que nossos clientes sejam cada vez mais eficientes e ágeis no setor em que atuam.</p>

      <div className="flex flex-row flex-wrap justify-center xl:justify-between mt-14 mb-10 xl:w-[900px]">
        <div className="flex flex-col justify-center items-center my-3 xl:my-0 w-52 mt-4">
          <Image className="flex justify-center w-20" src={defaultIcon} alt={""} />
          <h3 className="text-BeGreenColor font-bold mt-4">ANOS DE EXPERIÊNCIA</h3>
          <h2 className="text-white text-5xl font-bold">29</h2>
        </div>
        <div className="flex flex-col justify-center items-center my-3 xl:my-0 w-52 mt-4">
          <Image className="flex justify-center w-20" src={defaultIcon} alt={""} />
          <h3 className="text-BeGreenColor font-bold mt-4">CLIENTES</h3>
          <h2 className="text-white text-5xl font-bold">+750</h2>
        </div>
        <div className="flex flex-col justify-center items-center my-3 xl:my-0 w-52 mt-4">
          <Image className="flex justify-center w-20" src={defaultIcon} alt={""} />
          <h3 className="text-BeGreenColor font-bold mt-4">COLABORADORES</h3>
          <h2 className="text-white text-5xl font-bold">25</h2>
        </div>
        <div className="flex flex-col justify-center items-center my-3 xl:my-0 w-52 mt-4">
          <Image className="flex justify-center w-20" src={defaultIcon} alt={""} />
          <h3 className="text-BeGreenColor font-bold mt-4">PRESENÇA NACIONAL</h3>
          <h2 className="text-white text-5xl font-bold">100%</h2>
        </div>
      </div>

      <Link className="bg-BeGreenColor shadow-lg w-fit py-4 rounded-lg px-4 text-xl xl:text-2xl font-semibold text-white transition transform duration-150 hover:scale-105" href="#contato">Entre em contato</Link>

    </Section>
  )
}
