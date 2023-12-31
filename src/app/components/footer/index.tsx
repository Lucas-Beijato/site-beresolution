"use client"
import Image from 'next/image'
import { BiSolidRightArrow } from 'react-icons/bi';
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {

  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    setBaseURL(window.location.origin)
  })

  return (
    <footer className="w-full flex justify-center items-center py-6 bg-BeColorBG">
      <div className="w-mediunScreen flex justify-center items-center flex-col xl:flex-row">

        <div className="w-full p-5 xl:w-1/2 xl:p-0 flex flex-col justify-start">
          <Link href={baseURL + '/#inicio'}>
            <img className='w-4/6 xl:w-2/5' width={"260"} height={"39"} loading='lazy' src="/logos/logoBR.svg" alt={'Be Resolution logo'} />
          </Link>
          <h2 className='text-xl xl:text-3xl font-bold text-white'>Somos</h2>
          <p className='xl:text-xl text-white flex flex-row items-center'><BiSolidRightArrow className='fill-BeGreenColor pr-1' />Rápidos</p>
          <p className='xl:text-xl text-white flex flex-row items-center'><BiSolidRightArrow className='fill-BeGreenColor pr-1' />Diferentes</p>
          <p className='xl:text-xl text-white flex flex-row items-center'><BiSolidRightArrow className='fill-BeGreenColor pr-1' />Efetivos</p>
        </div>

        <div className="w-full p-5 xl:w-1/2 flex justify-start xl:justify-end">
          <div className='w-fit'>
            <h2 className='text-white text-2xl xl:text-4xl font-semibold'>Entre em contato</h2>
            <h3 className='text-lg xl:text-xl text-white py-2'>Nossas Redes e Contatos:</h3>
            <div className='flex flex-row'>
              <Link href={'tel:4430280123'}>
                <img loading='lazy' width={"40"} height={"40"} className='mx-1 hover:scale-105 w-10 hoverGlowUp' src="/VectorPhone.png" alt={'Telefone Be Resolution'} />
              </Link>
              <Link target='_blank' href='https://www.instagram.com/beresolution/'>
                <img loading='lazy' width={"40"} height={"40"} className='mx-1 hover:scale-105 w-10 hoverGlowUp' src="/VectorInsta.png" alt={'Instagram Be Resolution'} />
              </Link>
              <Link target='_blank' href='https://www.facebook.com/beresolution'>
                <img loading='lazy' width={"40"} height={"40"} className='mx-1 hover:scale-105 w-10 hoverGlowUp' src="/VectorFace.png" alt={'Facebook Be Resolution'} />
              </Link>
            </div>
            <Link href='mailto:contato@beresolution.com.br'>
              <p className='text-lg xl:text-xl text-white pt-3'>{'contato@beresolution.com.br'}</p>
            </Link>
            <p className='text-lg xl:text-xl text-white pt-3'>{'(44) 3028-0123'}</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
