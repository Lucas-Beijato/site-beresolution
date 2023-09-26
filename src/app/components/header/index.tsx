"use client"
import logo from '../../../../public/logos/mainLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';

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

function setMenuMobileOpen() {
  document.getElementById('menuMobileModal')?.classList.remove('hidden')
}

function setMenuMobileClose() {
  document.getElementById('menuMobileModal')?.classList.add('hidden')
}

export default function Header() {

  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        document.querySelector('#mainContainerHeader')?.classList.add('navAnimationInitial')
        document.querySelector('#mainContainerHeader')?.classList.remove('navAnimationEnd')
      } else {
        document.querySelector('#mainContainerHeader')?.classList.remove('navAnimationInitial')
        document.querySelector('#mainContainerHeader')?.classList.add('navAnimationEnd')
      }
    })
    setBaseURL(window.location.origin)
  })

  return (
    <nav className="w-full top-0 sticky z-20 bg-BeColorBG">
      <div className='w-full flex justify-center items-center'>
        <div id='mainContainerHeader' className='w-full xl:w-mediunScreen px-4 xl:px-0 flex flex-row justify-between items-center navAnimationEnd'>

          <div className='w-4/6 max-w-[500px] xl:w-2/6 flex flex-row justify-start items-center'>
            <Link href={baseURL + '/#inicio'}>
              <Image loading='lazy' src={logo} alt={'Be Resolution logo'} />
            </Link>
          </div>

          { /* Desktop components */
            <>
              <div className='xl:flex hidden w-3/6 box-border text-white text-xl font-semibold flex-row justify-end items-center'>
                <Link className='hover:text-BeGreenColor px-2' href={baseURL + '/#inicio'}>Início</Link>

                <div onMouseOver={() => { setDropdowAtividades('open') }} onMouseLeave={() => { setDropdowAtividades('close') }} className='hover:text-BeGreenColor cursor-pointer flex flex-col transition transform duration-150 px-2 items-center'>
                  <Link href={'/atividades'}>
                    <h3 className='flex flex-row items-center'>Atividades<IoMdArrowDropdown /></h3>
                  </Link>
                  <div id='atividadesDropDown' className='w-52 flex-col font-normal text-white absolute mt-6 p-3 text-lg hidden bg-BeColorBG rounded-xl'>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={'/atividades/distribuicao'}>Distribuidoras</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={'/atividades/industria'}>Indústria</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={'/atividades/servicos'}>Serviços</Link>
                  </div>
                </div>

                <div onMouseOver={() => { setDropdownSolucoes('open') }} onMouseLeave={() => { setDropdownSolucoes('close') }} className='hover:text-BeGreenColor cursor-pointer flex flex-col transition transform duration-150 px-2 items-center'>
                  <Link href={'/solucoes'}>
                    <h3 className='flex flex-row items-center'>Soluções<IoMdArrowDropdown /></h3>
                  </Link>
                  <div id='solucoesDropDown' className='w-52 font-normal flex-col text-white absolute mt-6 p-3 text-lg hidden bg-BeColorBG rounded-xl'>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção21</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção22</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção23</Link>
                    <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção24</Link>
                  </div>
                </div>

                {/* <Link className='hover:text-BeGreenColor px-2' href="">Contato</Link> */}
                <Link className='hover:text-BeGreenColor px-2' href={baseURL + '/#sobreNos'}>Sobre nós</Link>
              </div>

              <div className='xl:flex hidden w-1/6 flex-row justify-end items-center'>
                <a className='transition transform duration-150 hover:scale-105 drop-shadow-md text-xl font-semibold bg-BeGreenColor p-4 rounded-xl text-white' href={baseURL + '/#contato'}>Entre em contato</a>
              </div>
            </>
          }

          { /* Mobile components */
            <>
              <div className='w-2/6 xl:hidden flex justify-end items-center'>
                <button className='w-7 h-7' onClick={() => setMenuMobileOpen()}><FaBars className='w-full h-full fill-BeGreenColor' /></button>
              </div>

              <div onClick={() => setMenuMobileClose()} id='menuMobileModal' className='hidden bg-[#000] bg-opacity-50 flex-col flex top-0 bottom-0 left-0 fixed z-10 justify-center items-center w-screen xl:hidden'>
                <div className='w-1/2 flex flex-col items-start text-white'>
                  <Link onClick={() => setMenuMobileClose()} href={baseURL + '/#inicio'}>Início</Link>
                  <Link onClick={() => setMenuMobileClose()} href={'/atividades'}>Atividades</Link>
                  <Link onClick={() => setMenuMobileClose()} href={'/solucoes'}>Soluções</Link>
                  <Link onClick={() => setMenuMobileClose()} href={baseURL + '/#sobreNos'}>Sobre nós</Link>
                  <Link onClick={() => setMenuMobileClose()} href={baseURL + '/#contato'}>Entre em contato</Link>
                </div>
              </div>
            </>
          }




        </div>
      </div>

    </nav >
  )
}
