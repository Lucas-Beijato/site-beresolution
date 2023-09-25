import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Be Resolution',
  description: 'Created by RRXP Martech',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className='scroll-smooth' lang="pt-br">
      <body className='bg-BeColorBG flex flex-col justify-center items-center w-full'>
        <main className='w-full flex flex-col justify-center items-center'>
          <Header/>
          <section className='flex flex-col w-full h- fit'>{children}</section>
          <Footer/>
        </main>
      </body>
    </html>
  )

}
