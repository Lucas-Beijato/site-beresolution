import Title from "@/app/components/title"
import Section from "@/app/components/containerSection"
import RdStationFormScript from "../../rdStationForm"

export default function Section6() {
  return (
    <Section bgWhite>
      <div id="contato" className="flex flex-row w-full flex-wrap">
        <div className="flex flex-col w-full xl:w-1/2 rounded-lg border-2 p-5 border-BeGreenColor">
          <Title colorTitleDark title={"Entre em contato"} subtitle={"Sed ut perspiciatis"} />
          <RdStationFormScript/>
        </div>
        <div className="flex justify-center w-1/2 items-center p-5">
          {/* <Image src={""} alt={""} />*/}
        </div>
      </div>
    </Section>
  )
}
