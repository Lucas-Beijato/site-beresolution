import Title from "@/app/components/title"
import Link from "next/link"
import CustomSection from "../../CustomSection"
// --------------------------------------------------------------------
import {
  GiMetalBar, GiOpenedFoodCan, GiMicrochip, GiRobotLeg, GiChemicalDrop, GiGears, GiStethoscope,
  GiWoodBeam, GiBrickPile, GiSolarPower, GiShop, GiShipBow, GiMeltingMetal, GiMouse, GiLiquidSoap
} from "react-icons/gi"
import { ImPowerCord } from 'react-icons/im'
import { FaUserTie } from 'react-icons/fa'
import { GoPackageDependents } from 'react-icons/go'
import { TbPackages, TbTransform } from 'react-icons/tb'
import { BiSolidSticker } from "react-icons/bi"


export default function Section3() {

  return (
    <CustomSection
      mobileOff
      removePaddingX
      imgCustomStyle="h-[100%] top-[0px] right-0 opacity-[10%]"
      imgURL="/imgs/6425299.svg"
    >

      <Title id="atividades" colorTitleDark title={"Atividades"} subtitle={"SETORES QUE ATUAMOS"} />

      <div className="flex xl:w-[950px] right-0 flex-row flex-wrap justify-center xl:justify-between items-start pt-5 z-10">

        <div className="flex w-72 flex-wrap justify-between">

          <Link className="w-full h-full" href={"/meu-negocio/industria"}>
            <div className="bg-BeColorBG w-full h-32 rounded-xl my-2 flex justify-center items-center hoverGlowUp">
              <h2 className="text-white font-bold text-2xl">Industria</h2>
            </div>
          </Link>

          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiMetalBar className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Metal Mecânica</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiOpenedFoodCan className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Alimentícia</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiMicrochip className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Produtos eletrônicos</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiRobotLeg className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Implantes ortopédicos</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiChemicalDrop className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Química</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <BiSolidSticker className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Borracha</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <TbTransform className="h-12 w-12 fill-BeGreenColor stroke-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Extrativista e transformação</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiMeltingMetal className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Beneficiamento matalúrgico</h2>
          </div>

        </div>

        <div className="flex w-72 flex-wrap justify-between">

          <Link className="w-full h-full" href={"/meu-negocio/distribuicao"}>
            <div className="bg-BeColorBG w-full h-32 rounded-xl my-2 flex justify-center items-center hoverGlowUp">
              <h2 className="text-white font-bold text-2xl">Distribuição</h2>
            </div>
          </Link>

          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiMouse className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Suprimentos de informática</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiGears className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Peças automotivas</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiLiquidSoap className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Cosméticos</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiStethoscope className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Produtos Hospitalares</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiWoodBeam className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Produtos para marcenaria</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiBrickPile className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Materiais para construção</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <ImPowerCord className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Materiais elétricos</h2>
          </div>

        </div>

        <div className="flex w-72 flex-wrap justify-between">

          <Link className="w-full h-full" href={"/meu-negocio/servicos"}>
            <div className="bg-BeColorBG w-full h-32 rounded-xl my-2 flex justify-center items-center hoverGlowUp">
              <h2 className="text-white font-bold text-2xl">Serviços</h2>
            </div>
          </Link>

          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiSolarPower className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Energia Solar</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <FaUserTie className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Prestadores de serviços</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiShop className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Comércio varejista</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <TbPackages className="h-12 w-12 stroke-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Comércio atacadista</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GiShipBow className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Importadoras</h2>
          </div>
          <div className="flex flex-col w-AtividadesMiniCards h-AtividadesMiniCards bg-BeColorBG rounded-xl my-2 justify-center p-2 items-center hoverGlowUp">
            <GoPackageDependents className="h-12 w-12 fill-BeGreenColor" />
            <h2 className="font-bold text-center leading-none text-white">Revendedoras</h2>
          </div>

        </div>

      </div>
    </CustomSection>
  )
}
