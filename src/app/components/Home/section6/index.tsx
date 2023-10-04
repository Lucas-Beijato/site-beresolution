import Title from "@/app/components/title"
import Section from "@/app/components/containerSection1"
import RdStationFormScript from "../../rdStationForm"

export default function Section6() {
  return (
    <Section imageBGWhite="bg-bg1White">
      <div id="contato" className="flex flex-row w-full scroll-mt-52 flex-wrap">
        <div className="flex bg-white flex-col w-full xl:w-1/2 rounded-lg border-2 p-5 border-BeGreenColor">
          <Title colorTitleDark title={"Entre em contato"} subtitle={"FALE COM NOSSOS ESPECIALISTAS"} />
          <RdStationFormScript/>
        </div>
        <div className="flex justify-center w-1/2 items-center p-5">
          {/* <Image src={""} alt={""} />*/}
        </div>
      </div>
    </Section>
  )
}
