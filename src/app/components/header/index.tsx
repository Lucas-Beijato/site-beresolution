"use client"
import logo from '../../../../public/logos/mainLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

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

const Header = () => {

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
  })

  return (

    <nav className="w-full top-0 sticky z-20 bg-BeColorBG flex justify-center items-center">
      <div id='mainContainerHeader' className='w-mediunScreen flex flex-row justify-between items-center navAnimationEnd'>
        <div className='w-2/6 flex flex-row justify-start items-center'>
          <Link href={'/'}>
            <Image priority src={logo} alt={'Be Resolution logo'} />
          </Link>
        </div>

        <div className='flex w-3/6 box-border text-white text-xl font-semibold flex-row justify-end items-center'>
          <Link className='hover:text-BeGreenColor px-2' href="/">Início</Link>

          <div onMouseOver={() => { setDropdowAtividades('open') }} onMouseLeave={() => { setDropdowAtividades('close') }} className='hover:text-BeGreenColor cursor-pointer flex flex-col transition transform duration-150 px-2 items-center'>
            <h3 className='flex flex-row items-center'>Atividades<IoMdArrowDropdown /></h3>
            <div id='atividadesDropDown' className='w-52 flex-col font-normal text-white absolute mt-6 p-3 text-lg hidden bg-BeColorBG rounded-xl'>
              <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção11</Link>
              <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção12</Link>
              <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção13</Link>
              <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção14</Link>
            </div>
          </div>

          <div onMouseOver={() => { setDropdownSolucoes('open') }} onMouseLeave={() => { setDropdownSolucoes('close') }} className='hover:text-BeGreenColor cursor-pointer flex flex-col transition transform duration-150 px-2 items-center'>
            <h3 className='flex flex-row items-center'>Soluções<IoMdArrowDropdown /></h3>
            <div id='solucoesDropDown' className='w-52 font-normal flex-col text-white absolute mt-6 p-3 text-lg hidden bg-BeColorBG rounded-xl'>
              <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção21</Link>
              <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção22</Link>
              <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção23</Link>
              <Link className='hover:bg-BeGreenColor hover:text-white p-2 rounded-xl hover:scale-105 transition duration-150' href={''}>Opção24</Link>
            </div>
          </div>

          {/* <Link className='hover:text-BeGreenColor px-2' href="">Contato</Link> */}
          <Link className='hover:text-BeGreenColor px-2' href="#sobreNos">Sobre nós</Link>
        </div>

        <div className='w-1/6 flex flex-row justify-end items-center'>
          <a className='transition transform duration-150 hover:scale-105 drop-shadow-md text-xl font-semibold bg-BeGreenColor p-4 rounded-xl text-white' href="#contato">Entre em contato</a>
        </div>
      </div>
    </nav >
  )
}

export default Header
