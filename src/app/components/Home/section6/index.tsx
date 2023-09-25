import Title from "@/app/components/title"
import Section from "@/app/components/containerSection"
import RdStationForm from "../../rdStationForm"

export default function Section6() {
  return (
    <Section bgWhite>
      <div id="contato" className="flex flex-row w-full">
        <div className="flex flex-col w-1/2 rounded-lg border-2 p-5 border-BeGreenColor">
          <Title colorTitleDark title={"Entre em contato"} subtitle={"Sed ut perspiciatis"} />
          <RdStationForm/>
        </div>
        <div className="flex justify-center w-1/2 items-center p-5">
          {/* <Image src={""} alt={""} />*/}
        </div>
      </div>
    </Section>
  )
}
