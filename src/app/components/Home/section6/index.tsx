import Title from "@/app/components/title"
import RdStationFormScript from "../../rdStationForm"
import DefaultSection from "../../DefaultContainer"

export default function Section6() {
  return (
    <DefaultSection>
      <div id="contato" className="flex flex-row w-full scroll-mt-52 flex-wrap">
        <div className="flex bg-white flex-col w-full xl:w-1/2 rounded-lg border-2 p-5 border-BeGreenColor">
          <Title colorTitleDark title={"Entre em contato"} subtitle={"FALE COM NOSSOS ESPECIALISTAS"} />
          <RdStationFormScript/>
        </div>
        <div className="flex flex-col w-full xl:w-1/2 p-5 ">
          <img className="w-full h-full" src="/imgs/figure_contact.svg" alt={"Figura ilustrando contato."} />
        </div>
      </div>
    </DefaultSection>
  )
}
