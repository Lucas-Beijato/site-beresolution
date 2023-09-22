import Title from "../../title/title"
import Section from "../../containerSection/containerSection"
import Image from "next/image"
import RdStationForm from "../../rdStationForm"

const Section6 = () => {
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

export default Section6
