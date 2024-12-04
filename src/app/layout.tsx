import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import FaviconLinks from '@/components/fav-icon-links'
import { Footer } from '@/components/footer'
import Navbar from '@/components/navigation/navbar'
import RouteProgressBar from '@/components/route-progress-bar'
import NextThemeProvider from '@/components/theme/next-theme-provider'
import { AuthProvider } from '@/features/auth/auth-provider'
import ReduxProvider from '@/redux/redux-provider'

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
      <body suppressHydrationWarning>
        <AuthProvider>
          <ReduxProvider>
            <RouteProgressBar />
            <NextThemeProvider>
              <div className='flex min-h-screen flex-col justify-between pt-[var(--navbar-height)] md:pt-[var(--navbar-height-md)]'>
                <div>
                  <Navbar />
                  <main>{children}</main>
                </div>
                <Footer />
              </div>
              <Toaster position='top-center' reverseOrder={false} />
            </NextThemeProvider>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
