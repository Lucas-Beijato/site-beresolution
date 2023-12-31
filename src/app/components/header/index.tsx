"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import { AiFillCloseSquare } from 'react-icons/ai'

// Desktop function
function setDropdowAtividades(isOpen: string) {
  switch (isOpen) {
    case 'open': {
      document.getElementById('atividadesDropDown')?.classList.remove('hidden')
      document.getElementById('atividadesDropDown')?.classList.add('flex')
      break
    }
    case 'close': {
      document.getElementById('atividadesDropDown')?.classList.add('hidden')
      document.getElementById('atividadesDropDown')?.classList.remove('flex')
      break
    }
  }
}

// Desktop function
function setDropdownSolucoes(isOpen: string) {
  switch (isOpen) {
    case 'open': {
      document.getElementById('solucoesDropDown')?.classList.remove('hidden')
      document.getElementById('solucoesDropDown')?.classList.add('flex')
      break
    }
    case 'close': {
      document.getElementById('solucoesDropDown')?.classList.add('hidden')
      document.getElementById('solucoesDropDown')?.classList.remove('flex')
      break
    }
  }
}

// Menu Mobile
function setMenuMobileOpenClosed(action: string) {
  if (action === 'open') {
    document.getElementById('menuMobileModal')?.classList.add('flex')
    document.getElementById('menuMobileModal')?.classList.remove('hidden')
  } else {
    document.getElementById('menuMobileModal')?.classList.add('hidden')
    document.getElementById('menuMobileModal')?.classList.remove('flex')
  }

}



export default function Header() {

  const [baseURL, setBaseURL] = useState('')

  const [listAtividades, setStateListAtividades] = useState(false)
  const [listSolucoes, setListSolucoes] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        document.querySelector('#mainContainerHeader')?.classList.add('navAnimationInitial')
        document.querySelector('#mainContainerHeader')?.classList.remove('navAnimationEnd')
        document.querySelector('#navMenuContainer')?.classList.remove('nav_bg_style_start')
        document.querySelector('#navMenuContainer')?.classList.add('nav_bg_style_end')
      } else {
        document.querySelector('#mainContainerHeader')?.classList.remove('navAnimationInitial')
        document.querySelector('#mainContainerHeader')?.classList.add('navAnimationEnd')
        document.querySelector('#navMenuContainer')?.classList.add('nav_bg_style_start')
        document.querySelector('#navMenuContainer')?.classList.remove('nav_bg_style_end')
      }
    })
    setBaseURL(window.location.origin)
  })

  return (
    <nav id='navMenuContainer' className="w-full top-0 sticky z-20 nav_bg_style_start">
      <div className='w-full flex justify-center items-center'>
        <div id='mainContainerHeader' className='w-full xl:w-mediunScreen px-4 xl:px-0 flex flex-row justify-between items-center navAnimationEnd'>

          <div className='w-4/6 max-w-[500px] xl:w-2/6 flex flex-row justify-start items-center'>
            <Link href={baseURL + '/#inicio'}>
              <img className='w-[250px]' width={"250"} height={"250"} loading='lazy' src="/logos/logoBR.svg" alt={'Be Resolution logo'} />
            </Link>
          </div>

          { /* Desktop components */
            <>
              <div className='xl:flex hidden w-3/6 box-border text-white text-xl font-semibold flex-row justify-end items-center'>
                <Link className='hover:text-BeGreenColor px-2' href={baseURL + '/#inicio'}>Início</Link>

                <div onMouseOver={() => setDropdowAtividades('open')} onMouseLeave={() => setDropdowAtividades('close')} className='hover:text-BeGreenColor cursor-pointer flex flex-col transition transform duration-150 px-2 items-center'>
                  <Link href={'/meu-negocio'}>
                    <h3 className='flex flex-row items-center'>Meu negócio<IoMdArrowDropdown /></h3>
                  </Link>
                  <div id='atividadesDropDown' className='w-52 flex-col font-normal text-white absolute mt-6 p-3 text-lg hidden bg-BeColorBG rounded-xl'>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 hoverGlowUp' href={'/meu-negocio/distribuicao'}>Distribuidoras</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 hoverGlowUp' href={'/meu-negocio/industria'}>Indústria</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 hoverGlowUp' href={'/meu-negocio/servicos'}>Serviços</Link>
                  </div>
                </div>

                <div onMouseOver={() => setDropdownSolucoes('open')} onMouseLeave={() => setDropdownSolucoes('close')} className='hover:text-BeGreenColor cursor-pointer flex flex-col transition transform duration-150 px-2 items-center'>
                  <Link href={'/solucoes'}>
                    <h3 className='flex flex-row items-center'>Soluções<IoMdArrowDropdown /></h3>
                  </Link>
                  <div id='solucoesDropDown' className='w-52 font-normal flex-col text-white absolute mt-6 p-3 text-lg hidden bg-BeColorBG rounded-xl'>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 hoverGlowUp' href={''}>Opção21</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 hoverGlowUp' href={''}>Opção22</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 hoverGlowUp' href={''}>Opção23</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 hoverGlowUp' href={''}>Opção24</Link>
                  </div>
                </div>

                <Link className='hover:text-BeGreenColor px-2' href={baseURL + '/#sobreNos'}>Sobre nós</Link>
              </div>

              <div className='xl:flex hidden w-1/6 flex-row justify-end items-center'>
                <a className='hoverGlowUp drop-shadow-md text-xl font-semibold bg-BeGreenColor p-4 rounded-xl text-white' href={baseURL + '/#contato'}>Entre em contato</a>
              </div>
            </>
          }

          { /* Mobile components */
            <>
              <div className='w-2/6 xl:hidden flex justify-end items-center'>
                <button title='Abrir menu mobile' className='w-7 h-7' onClick={() => setMenuMobileOpenClosed('open')}><FaBars className='w-full h-full fill-BeGreenColor'/></button>
              </div>

              <div id='menuMobileModal' className='hidden bg-[#000] bg-opacity-50 flex-col h-[100vh] top-0 left-0 fixed z-10 justify-center items-center w-screen xl:hidden'>
                <div className='w-11/12 flex flex-col items-end text-white bg-BeColorBG p-4 rounded-xl'>
                  <button onClick={() => setMenuMobileOpenClosed('closed')} className='flex pb-2 justify-end'><AiFillCloseSquare className="w-7 h-7 fill-BeGreenColor" /></button>
                  <Link className='w-full border-b-2 border-BeGreenColor hover:bg-BeGreenColor p-2 my-1' onClick={() => setMenuMobileOpenClosed('closed')} href={baseURL + '/#inicio'}>Início</Link>

                  <div className='flex flex-col w-full'>
                    <h2 className='w-full border-b-2 border-BeGreenColor hover:bg-BeGreenColor p-2 my-1' onClick={() => setStateListAtividades(!listAtividades)}>Meu negócio</h2>
                    <div className={`flex flex-col w-full ${listAtividades ? 'content show' : 'content'}`}>
                      <Link onClick={() => setMenuMobileOpenClosed('closed')} className='p-2 flex flex-row items-center' href="/meu-negocio/distribuicao"><IoMdArrowDropright className='fill-BeGreenColor' />Distribuidoras</Link>
                      <Link onClick={() => setMenuMobileOpenClosed('closed')} className='p-2 flex flex-row items-center' href="/meu-negocio/industria"><IoMdArrowDropright className='fill-BeGreenColor' />Indústria</Link>
                      <Link onClick={() => setMenuMobileOpenClosed('closed')} className='p-2 flex flex-row items-center' href="/meu-negocio/servicos"><IoMdArrowDropright className='fill-BeGreenColor' />Serviços</Link>
                    </div>
                  </div>

                  <div className='flex flex-col w-full'>
                    <h2 className='w-full border-b-2 border-BeGreenColor hover:bg-BeGreenColor p-2 my-1' onClick={() => setListSolucoes(!listSolucoes)}>Soluções</h2>
                    <div className={`flex flex-col w-full ${listSolucoes ? 'content show' : 'content'}`}>
                      <Link onClick={() => setMenuMobileOpenClosed('closed')} className='p-2 flex flex-row items-center' href=""><IoMdArrowDropright className='fill-BeGreenColor' />Serviços 1</Link>
                      <Link onClick={() => setMenuMobileOpenClosed('closed')} className='p-2 flex flex-row items-center' href=""><IoMdArrowDropright className='fill-BeGreenColor' />Serviços 2</Link>
                      <Link onClick={() => setMenuMobileOpenClosed('closed')} className='p-2 flex flex-row items-center' href=""><IoMdArrowDropright className='fill-BeGreenColor' />Serviços 3</Link>
                    </div>
                  </div>


                  <Link className='w-full border-b-2 border-BeGreenColor hover:bg-BeGreenColor p-2 my-1' onClick={() => setMenuMobileOpenClosed('closed')} href={baseURL + '/#sobreNos'}>Sobre nós</Link>
                  <Link className='w-full border-b-2 border-BeGreenColor hover:bg-BeGreenColor p-2 my-1' onClick={() => setMenuMobileOpenClosed('closed')} href={baseURL + '/#contato'}>Entre em contato</Link>
                  <div className='flex w-full mt-4 justify-center items-center'>
                    <img className='w-2/3' src="/logos/logoBR.svg" alt={'Logo Be Resolution'} />
                  </div>

                </div>
              </div>
            </>
          }

        </div>
      </div>

    </nav >
  )
}
