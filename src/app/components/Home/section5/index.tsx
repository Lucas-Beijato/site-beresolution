"use client"
import { useEffect, useState } from "react"
import Title from "@/app/components/title"
import { BiDownArrowAlt } from "react-icons/bi"
import CustomSection from "../../CustomSection"
import { IsIOS } from "@/app/funcs"

export default function Section5() {

  const [showHideImplantacao, setShowHideImplantacao] = useState(true)
  const [showHideSuporte, setShowHideSuporte] = useState(false)
  const [showHideDesenvolvimento, setShowHideDesenvolvimento] = useState(false)

  const [IsIOSVar, setIsIOS] = useState(false);

  useEffect(() => {
    let isIos = IsIOS()
    setIsIOS(isIos)
  }, [])


  return (
    <CustomSection imgURL={`/imgs/porque_ABe.${ IsIOSVar ? "jpg" : "webp" }`} imgCustomStyle="w-full h-full object-cover">

      <div className={`flex flex-col z-[10] w-full xl:w-mediunScreen px-3 py-6 xl:py-20 justify-center items-center`}>

        <Title title={"Porque a Be Resolution"} subtitle={"A BE RESOLUTION TE AJUDA"} />

        <div className="flex flex-col z-[1]">
          <div onClick={() => { setShowHideImplantacao(!showHideImplantacao) }} className="h-fit cursor-pointer rounded-lg border-2 mt-5 p-3 xl:p-5 border-BeGreenColor hoverGlowUp2">
            <div className="flex flex-row justify-between items-center py-2">
              <h3 className="font-bold text-BeGreenColor text-xl xl:text-2xl">Implantação</h3>
              <BiDownArrowAlt className={`fill-BeGreenColor w-8 h-8 ${showHideImplantacao && 'rotate-180'} transition transform duration-500`} />
            </div>

            <p className={`text-white ${showHideImplantacao ? 'content show' : 'content'}`}>
              Toda organização possui seus processos, suas metodologias e também suas particularidades, fazendo cada empresa única no mercado. A implantação de um software vai muito além de treinamentos e nós sabemos disto. O departamento de implantação da Be Resolution e Sistema é o setor que garante que o produto irá funcionar no cliente 100% de acordo com seus processos e suas regras de negócio.<br /><br />

              Toda implantação é documentada, sendo que o principal documento é o Escopo de Projeto, que tem por função nortear os implantadores a conduzir o andamento dos trabalhos, visando desta forma maior objetividade e produtividade, além de posicionar o cliente, de forma transparente, em que fase da implantação o projeto se encontra.<br /><br />

              O técnico implantador é o profissional responsável por entender a dinâmica de trabalho, e pode inclusive sugerir novos controles ou até mesmo determinar a padronização de determinadas funções no cliente, de forma a aumentar a produtividade e controles.<br /><br />

              <strong>Suas funções são basicamente:</strong><br />
              <strong className="text-BeGreenColor">{'>'}</strong> Parametrização do sistema de acordo com o projeto aprovado pela diretoria do cliente;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Seguir as normas de qualidade conforme a certificação MPS-BR;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Capacitar através de treinamentos os usuários do sistema;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Testar, validar e efetuar a entrega do produto.
            </p>
          </div>

          <div onClick={() => { setShowHideSuporte(!showHideSuporte) }} className="h-fit cursor-pointer rounded-lg border-2 mt-5 p-3 xl:p-5 border-BeGreenColor hoverGlowUp2 z-[1]">
            <div className="flex flex-row justify-between items-center py-2">
              <h3 className="font-bold text-BeGreenColor text-xl xl:text-2xl">Suporte</h3>
              <BiDownArrowAlt className={`fill-BeGreenColor w-8 h-8 ${showHideSuporte && 'rotate-180'} transition transform duration-500`} />
            </div>

            <p className={`text-white ${showHideSuporte ? 'content show' : 'content'}`}>
              Toda organização possui seus processos, suas metodologias e também suas particularidades, fazendo cada empresa única no mercado. A implantação de um software vai muito além de treinamentos e nós sabemos disto. O departamento de implantação da Be Resolution e Sistema é o setor que garante que o produto irá funcionar no cliente 100% de acordo com seus processos e suas regras de negócio.<br /><br />

              Toda implantação é documentada, sendo que o principal documento é o Escopo de Projeto, que tem por função nortear os implantadores a conduzir o andamento dos trabalhos, visando desta forma maior objetividade e produtividade, além de posicionar o cliente, de forma transparente, em que fase da implantação o projeto se encontra.<br /><br />

              O técnico implantador é o profissional responsável por entender a dinâmica de trabalho, e pode inclusive sugerir novos controles ou até mesmo determinar a padronização de determinadas funções no cliente, de forma a aumentar a produtividade e controles.<br /><br />

              <strong>Suas funções são basicamente:</strong><br />
              <strong className="text-BeGreenColor">{'>'}</strong> Parametrização do sistema de acordo com o projeto aprovado pela diretoria do cliente;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Seguir as normas de qualidade conforme a certificação MPS-BR;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Capacitar através de treinamentos os usuários do sistema;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Testar, validar e efetuar a entrega do produto.
            </p>
          </div>

          <div onClick={() => { setShowHideDesenvolvimento(!showHideDesenvolvimento) }} className="h-fit cursor-pointer rounded-lg border-2 mt-5 p-3 xl:p-5 border-BeGreenColor hoverGlowUp2 z-[1]">
            <div className="flex flex-row justify-between items-center py-2">
              <h3 className="font-bold text-BeGreenColor text-xl xl:text-2xl">Desenvolvimento</h3>
              <BiDownArrowAlt className={`fill-BeGreenColor w-8 h-8 ${showHideDesenvolvimento && 'rotate-180'} transition transform duration-500`} />
            </div>

            <p className={`text-white ${showHideDesenvolvimento ? 'content show' : 'content'}`}>
              Toda organização possui seus processos, suas metodologias e também suas particularidades, fazendo cada empresa única no mercado. A implantação de um software vai muito além de treinamentos e nós sabemos disto. O departamento de implantação da Be Resolution e Sistema é o setor que garante que o produto irá funcionar no cliente 100% de acordo com seus processos e suas regras de negócio.<br /><br />

              Toda implantação é documentada, sendo que o principal documento é o Escopo de Projeto, que tem por função nortear os implantadores a conduzir o andamento dos trabalhos, visando desta forma maior objetividade e produtividade, além de posicionar o cliente, de forma transparente, em que fase da implantação o projeto se encontra.<br /><br />

              O técnico implantador é o profissional responsável por entender a dinâmica de trabalho, e pode inclusive sugerir novos controles ou até mesmo determinar a padronização de determinadas funções no cliente, de forma a aumentar a produtividade e controles.<br /><br />

              <strong>Suas funções são basicamente:</strong><br />
              <strong className="text-BeGreenColor">{'>'}</strong> Parametrização do sistema de acordo com o projeto aprovado pela diretoria do cliente;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Seguir as normas de qualidade conforme a certificação MPS-BR;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Capacitar através de treinamentos os usuários do sistema;<br />
              <strong className="text-BeGreenColor">{'>'}</strong> Testar, validar e efetuar a entrega do produto.
            </p>
          </div>
        </div>

      </div>
    </CustomSection>
  )
}
