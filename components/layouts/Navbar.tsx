import { FC } from 'react'
import { useTranslation } from 'next-i18next'

import Logo from '@components/common/Logo'
import SwitchThemeButton from '@components/common/SwitchThemeButton'
import SwitchLocaleButton from '@components/common/SwitchLocaleButton'

import useMediaQuery from '@hooks/useMediaQuery'
import useIsClient from '@hooks/useIsClient'
import useIsScrolling from '@hooks/useIsScrolling'

const Navbar: FC = () => {
  const { t } = useTranslation('home')

  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const isScrolling = useIsScrolling()
  const isClient = useIsClient()

  if (!isClient) return null

  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full transition-all ${
        isScrolling
          ? 'bg-white py-3 shadow dark:border-b dark:border-slate-600 dark:bg-gray-800 dark:shadow-none'
          : 'py-5 lg:py-8'
      }`}
    >
      <div className='container flex max-w-7xl justify-between'>
        <Logo width={isScrolling || !isLargeScreen ? 100 : 140} />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className='flex items-center space-x-4'>
          <SwitchLocaleButton />
          <SwitchThemeButton className={`${isScrolling ? 'text-primary' : 'text-white'}`} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
