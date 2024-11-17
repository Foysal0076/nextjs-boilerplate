import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import FaviconLinks from '@/components/common/fav-icon-links'
import { Footer } from '@/components/footer'
import Navbar from '@/components/navigation/navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nextjs Tailwind Boilerplate',
  description: 'Next.js + Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={`${inter.variable}`}>
      <FaviconLinks />
      <body>
        <>
          <div className='flex min-h-screen flex-col justify-between pt-[3.75rem] md:pt-[4.5rem]'>
            <div>
              <Navbar />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </>
      </body>
    </html>
  )
}
