import Link from 'next/link'

import { pageRoutes } from '@/shared/config/page-routes'

export default function Navbar() {
  return (
    <header
      className='fixed top-0 z-40 flex h-[3.75rem] w-full items-center border-b border-border/30 backdrop-blur-3xl md:h-[4.5rem] dark:border-border'
      aria-label='Main navigation'>
      <nav
        className='flex w-full items-center justify-between px-4 md:px-8'
        aria-label='Main navigation'>
        <div className='tracking-tighter'>
          <Link
            href={pageRoutes.home}
            className='h5 text-primary-400 font-extrabold'>
            Home
          </Link>
        </div>
        <div className='flex gap-4'>
          {/* <ThemeSwitcher /> */}
          Theme
          <div className='flex md:hidden'>
            {/* <NavigationDrawerMenu /> */}
            Drawer Menu
          </div>
        </div>
      </nav>
    </header>
  )
}
