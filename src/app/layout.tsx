import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@shared/Footer'
import Header from '@shared/Header'
import ReactQueryProviders from '@shared/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LITAE LOG',
  description: 'Front-end developer LITAE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={` bg-[#F0F2F5]`}>
        <ReactQueryProviders>
          <Header />
          <main className="max-w-[1024px] mx-auto py-[36px] lg:py-[76px] px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </ReactQueryProviders>
      </body>
    </html>
  )
}
