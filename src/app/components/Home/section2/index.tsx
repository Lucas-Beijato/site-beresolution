"use client"
import Title from "@/app/components/title"
import CustomSection from "../../CustomSection";
import { IsIOS } from "@/app/funcs";
import { useEffect, useState } from "react";

export default function Section2() {

  const [IsIOSVar, setIsIOS] = useState(false);

  useEffect(() => {
    let isIos = IsIOS()
    setIsIOS(isIos)
  }, [])

  return (

    <CustomSection
      removePaddingX
      imgCustomStyle="h-[100%] top-[0px] left-[0px] opacity-[20%]"
      imgURL="/imgs/7040907.svg"
    >

      <Title id="porqueNossoERP" title={"Porque nosso ERP?"} subtitle={"ENTENDA UM POUCO MAIS"} colorTitleDark />

      <div className="flex h-fit xl:h-[331px] flex-row xl:justify-between justify-center mt-10 w-full flex-wrap z-[1]">

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <img className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" width={"160"} height={"160"} loading="lazy" src={`/imgs/industria-250px.${ IsIOSVar ? "jpg" : "webp" }`} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
            <h3 className="text-white font-bold text-xl xl:h-[60px]">1 - Industrial</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">Gerencie seu processo produtivo com nosso PCP (Planejamento e controle da produção)</p>
          </div>
        </div>

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <img className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" width={"160"} height={"160"} loading="lazy" src={`/imgs/distribuicao-250px.${IsIOSVar ? "jpg" : "webp"}`} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
          <h3 className="text-white font-bold text-xl xl:h-[60px]">2 - Distribuição</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">Mensure números, analise desempenho de vendas e crie metas com nosso ERP.</p>
          </div>
        </div>

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <img className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" width={"160"} height={"160"} loading="lazy" src={`/imgs/servico-250px.${ IsIOSVar ? "jpg" : "webp" }`} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
          <h3 className="text-white font-bold text-xl xl:h-[60px]">3 - Serviços</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">Produtos e serviços em um só ERP, prático, seguro e ágil.</p>
          </div>
        </div>

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <img className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" width={"160"} height={"160"} loading="lazy" src={`/imgs/mobilidade-250px.${IsIOSVar ? "jpg" : "webp"}`} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
          <h3 className="text-white font-bold text-xl xl:h-[60px]">4 - Mobilidade</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">As operações de campo 100% integrada ao seu ERP.</p>
          </div>
        </div>

        <div className="flex box-border flex-col my-1 xl:my-0 shadow-lg h-full hover:drop-shadow-model1 transition duration-150 transform w-full xl:w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <img className="mb-3 rounded-lg w-full h-[160px] max-h-[160px] xl:h-full object-cover" width={"160"} height={"160"} loading="lazy" src={`/imgs/inteligencia-negocios-250px.${IsIOSVar ? "jpg" : "webp"}`} alt={"Icone card sobre setor Industrial"} />
          <div className="px-3">
          <h3 className="text-white font-bold text-xl xl:h-[60px]">5 - Inteligência de Negócios</h3>
            <p className="text-white text-justify text-sm pb-3 h-fit">BI e Dashboard e uma única base dados. O poder da extração e análise de dados a favor do seu negócio.</p>
          </div>
        </div>

      </div>

      <div className="flex w-full justify-center items-center z-10" >
        <img className="py-10" width={"115"} height={"58"} src="/logos/logo siege.png" alt={"Logo Sistema SIEGE"} />
      </div>

    </CustomSection>

  )
}
