import Image from "next/image"
import Title from "@/app/components/title"
import Section from "@/app/components/containerSection";
// -------------
import industriaImg from '../../../../../public/imgs/industria-250px.jpg'
import distribuicaoImg from '../../../../../public/imgs/distribuicao-250px.jpg'
import servicosImg from '../../../../../public/imgs/servico-250px.jpg'
import mobilidadeImg from '../../../../../public/imgs/mobilidade-250px.jpg'
import inteligenciaNegociosImg from '../../../../../public/imgs/inteligencia_negocios-250px.jpg'
import logoSIEGE from '../../../../../public/logos/logo siege.png'
// -------------

export default function Section2() {
  return (

    <Section imageBG={{ imageColor: 'White', chosenImage: 1}} removePaddingX>

      <Title id="porqueNossoERP" title={"Porque nosso ERP?"} subtitle={"ENTENDA UM POUCO MAIS"} colorTitleDark />

      <div className="flex h-fit xl:h-[331px] flex-row xl:justify-between justify-center mt-10 w-full flex-wrap">

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" loading="lazy" src={industriaImg} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
            <h3 className="text-white font-bold text-xl xl:h-[60px]">1 - Industrial</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">Gerencie seu processo produtivo com nosso PCP (Planejamento e controle da produção)</p>
          </div>
        </div>

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" loading="lazy" src={distribuicaoImg} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
          <h3 className="text-white font-bold text-xl xl:h-[60px]">2 - Distribuição</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">Mensure números, analise desempenho de vendas e crie metas com nosso ERP.</p>
          </div>
        </div>

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" loading="lazy" src={servicosImg} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
          <h3 className="text-white font-bold text-xl xl:h-[60px]">3 - Serviços</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">Produtos e serviços em um só ERP, prático, seguro e ágil.</p>
          </div>
        </div>

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" loading="lazy" src={mobilidadeImg} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
          <h3 className="text-white font-bold text-xl xl:h-[60px]">4 - Mobilidade</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">As operações de campo 100% integrada ao seu ERP.</p>
          </div>
        </div>

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" loading="lazy" src={inteligenciaNegociosImg} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
          <h3 className="text-white font-bold text-xl xl:h-[60px]">5 - Inteligência de Negócios</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">BI e Dashboard e uma única base dados. O poder da extração e análise de dados a favor do seu negócio.</p>
          </div>
        </div>

      </div>
      <div className="flex w-full justify-center items-center" >
        <Image className="py-10" src={logoSIEGE} alt={"Logo Sistema SIEGE"} />
      </div>
    </Section>

  )
}
