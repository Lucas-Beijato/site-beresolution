import Title from "../../title/title"
import Section from "../../containerSection/containerSection"
import Image from "next/image"
import defaulMoneyIcon from '../../../../../public/defaulMoneyIcon.png'

const Section3 = () => {
  return (
    <Section removePaddingX>
      <Title id="atividades" title={"Atividades"} subtitle={"SETORES QUE ATUAMOS"} />
      <div className="flex xl:w-[900px] flex-row flex-wrap justify-between items-start pt-5">

        <div className="flex w-72 flex-wrap justify-between">

          <div className="bg-white w-full h-32 rounded-xl my-2 flex justify-center items-center">
            <h2 className="text-BeColorBG font-bold text-2xl">Industria</h2>
          </div>

          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Metal Mecânica</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Alimentícia</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Produtos eletrônicos</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Implantes ortopédicos</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Química</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Borracha</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Extrativista e transformação</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Beneficiamento matalúrgico</h2>
          </div>

        </div>

        <div className="flex w-72 flex-wrap justify-between">

          <div className="bg-white w-full h-32 rounded-xl my-2 flex justify-center items-center">
            <h2 className="text-BeColorBG font-bold text-2xl">Distribuição</h2>
          </div>

          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Suprimentos de informática</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Peças automotivas</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Cosméticos</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Produtos Hospitalares</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Produtos para marcenaria</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Materiais para construção</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Materiais elétricos</h2>
          </div>

        </div>

        <div className="flex w-72 flex-wrap justify-between">

          <div className="bg-white w-full h-32 rounded-xl my-2 flex justify-center items-center">
            <h2 className="text-BeColorBG font-bold text-2xl">Serviços</h2>
          </div>

          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Energia Solar</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Prestadores de serviços</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Comércio varejista</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Comércio atacadista</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Importadoras</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-white rounded-xl my-2 justify-start p-2 items-center">
            <Image className="mb-1" src={defaulMoneyIcon} alt={""}></Image>
            <h2 className="font-bold text-center leading-none text-BeColorBG">Revendedoras</h2>
          </div>

        </div>

      </div>
    </Section>
  )
}

export default Section3
