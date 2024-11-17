import Link from 'next/link'

import NavDrawerMenu from '@/components/navigation/nav-drawer/nav-drawer-menu'
import ThemeSwitch from '@/components/theme/theme-switch'
import { pageRoutes } from '@/shared/config/page-routes'

export default function Navbar() {
  return (
    <header
      className='fixed top-0 z-40 flex h-[var(--navbar-height)] w-full items-center border-b border-border/30 backdrop-blur-3xl md:h-[var(--navbar-height-md)]'
      aria-label='Main navigation'>
      <nav
        className='flex w-full items-center justify-between bg-background px-4 md:px-8'
        aria-label='Main navigation'>
        <div className='tracking-tighter'>
          <Link href={pageRoutes.home} className='h5 font-medium text-primary'>
            Home
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
