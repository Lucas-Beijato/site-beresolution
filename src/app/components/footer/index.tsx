"use client"
import logo from '../../../../public/logos/mainLogo.png'
import phoneIcon from '../../../../public/VectorPhone.png'
import instaIcon from '../../../../public/VectorInsta.png'
import faceIcon from '../../../../public/VectorFace.png'
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
    <footer className="w-full flex justify-center items-center py-6">
      <div className="w-mediunScreen flex flex-row">

        <div className="w-1/2 flex flex-col justify-start">
          <Link href={ baseURL + '/#inicio'}>
            <Image loading='lazy' src={logo} alt={'Be Resolution logo'} />
          </Link>
          <h2 className='text-3xl font-bold text-white'>Somos</h2>
          <p className='text-xl text-white flex flex-row items-center'><BiSolidRightArrow className='fill-BeGreenColor pr-1' />Rápidos</p>
          <p className='text-xl text-white flex flex-row items-center'><BiSolidRightArrow className='fill-BeGreenColor pr-1' />Diferentes</p>
          <p className='text-xl text-white flex flex-row items-center'><BiSolidRightArrow className='fill-BeGreenColor pr-1' />Efetivos</p>
        </div>

        <div className="w-1/2 flex justify-end">
          <div className='w-fit'>
            <h2 className='text-white text-4xl font-semibold'>Entre em contato</h2>
            <h3 className='text-xl text-white py-2'>Nossas Redes e Contatos:</h3>
            <div className='flex flex-row'>
              <Link href={''}>
                <Image loading='lazy' className='mx-1 hover:scale-105 w-10 transition duration-150 ' src={phoneIcon} alt={'Telefone Be Resolution'} />
              </Link>
              <Link href={''}>
                <Image loading='lazy' className='mx-1 hover:scale-105 w-10 transition duration-150' src={instaIcon} alt={'Instagram Be Resolution'} />
              </Link>
              <Link href={''}>
                <Image loading='lazy' className='mx-1 hover:scale-105 w-10 transition duration-150' src={faceIcon} alt={'Facebook Be Resolution'} />
              </Link>
            </div>
            <Link href={''}>
              <p className='text-xl text-white pt-3'>{'email@email.com.br'}</p>
            </Link>
            <p className='text-xl text-white pt-3'>{'(44) 1 11222333'}</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
