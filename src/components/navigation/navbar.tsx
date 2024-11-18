import Image from 'next/image'
import Link from 'next/link'

import NavDrawerMenu from '@/components/navigation/nav-drawer/nav-drawer-menu'
import ThemeSwitch from '@/components/theme/theme-switch'
import { pageRoutes } from '@/shared/config/page-routes'

export default function Navbar() {
  return (
    <header
      className='fixed top-0 z-40 flex h-[var(--navbar-height)] w-full items-center border-b border-border/30 backdrop-blur-md md:h-[var(--navbar-height-md)]'
      aria-label='Main navigation'>
      <nav
        className='flex w-full items-center justify-between px-4 md:px-8'
        aria-label='Main navigation'>
        <div className='tracking-tighter'>
          <Link href={pageRoutes.home}>
            <Image
              src='/images/site-logo-light.png'
              className='block dark:hidden'
              alt='Logo Light'
              width={40}
              height={40}
              priority
            />
            <Image
              src='/images/site-logo-dark.png'
              className='hidden dark:block'
              alt='Logo Dark'
              aria-hidden='true'
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>
        <div className='flex gap-4'>
          <ThemeSwitch />
          <div className='flex md:hidden'>
            <NavDrawerMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}
