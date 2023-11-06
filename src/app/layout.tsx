import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Be Resolution',
  description: 'Created by RRXP Martech',
  icons: {
    icon: '/icon/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className='scroll-smooth' lang="pt-br">
      <body className='bg-white w-full h-fit'>
        <main className='w-full h-fit'>
          <Header />
          <section className='box-border mt-[-108px]'>{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  )

}
