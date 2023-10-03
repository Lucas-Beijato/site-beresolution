import Image from "next/image"
import defaultIcon from '../../../../../public/defaultIcon.png'
import logoSIEGE from '../../../../../public/logos/logo siege.png'
import Title from "@/app/components/title"
import Section from "@/app/components/containerSection";

export default function Section2() {
  return (

    <Section imageBGWhite="bg-bg1White" removePaddingX>

      <Title id="porqueNossoERP" title={"Porque nosso ERP?"} subtitle={"ENTENDA UM POUCO MAIS"} colorTitleDark />

      <div className="flex flex-row xl:justify-between justify-center mt-10 w-full flex-wrap">

        <div className="flex flex-col my-1 xl:my-0 p-4 shadow-lg hover:drop-shadow-model1 transition duration-150 transform w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3" src={defaultIcon} alt={"Icone card sobre setor Industrial"}></Image>
          <h3 className="text-white font-bold text-xl pb-2">1 - Industrial</h3>
          <div className="h-full flex items-end">
            <p className="text-white text-justify text-sm h-fit">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
          </div>
        </div>
        <div className="flex flex-col my-1 xl:my-0 p-4 shadow-lg hover:drop-shadow-model1 transition duration-150 transform w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3" src={defaultIcon} alt={"Icone card sobre setor Distribuição"}></Image>
          <h3 className="text-white font-bold text-xl pb-2">2 - Distribuição</h3>
          <div className="h-full flex items-end">
            <p className="text-white text-justify text-sm h-fit">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
          </div>
        </div>
        <div className="flex flex-col my-1 xl:my-0 p-4 shadow-lg hover:drop-shadow-model1 transition duration-150 transform w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3" src={defaultIcon} alt={"Icone card sobre setor Serviços"}></Image>
          <h3 className="text-white font-bold text-xl pb-2">3 - Serviços</h3>
          <div className="h-full flex items-end">
            <p className="text-white text-justify text-sm h-fit">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
          </div>
        </div>
        <div className="flex flex-col my-1 xl:my-0 p-4 shadow-lg hover:drop-shadow-model1 transition duration-150 transform w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3" src={defaultIcon} alt={"Icone card sobre setor Mobilidade"}></Image>
          <h3 className="text-white font-bold text-xl pb-2">4 - Mobilidade</h3>
          <div className="h-full flex items-end">
            <p className="text-white text-justify text-sm h-fit">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
          </div>
        </div>
        <div className="flex flex-col my-1 xl:my-0 p-4 shadow-lg hover:drop-shadow-model1 transition duration-150 transform w-250px rounded-lg bg-BeColorBG hoverGlowUp">
          <Image className="mb-3" src={defaultIcon} alt={"Icone card sobre setor Instligência de negócios"}></Image>
          <h3 className="text-white font-bold text-xl pb-2">5 - Inteligência de Negócios</h3>
          <div className="h-full flex items-end">
            <p className="text-white text-justify text-sm h-fit">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
          </div>
        </div>

      </div>
      <div className="flex w-full justify-center items-center" >
        <Image className="py-10" src={logoSIEGE} alt={"Logo Sistema SIEGE"} />
      </div>
    </Section>

  )
}
