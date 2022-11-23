import { FC, useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'

import Logo from '@components/common/Logo'
import SwitchThemeButton from '@components/common/SwitchThemeButton'
import SwitchLocaleButton from '@components/common/SwitchLocaleButton'

const Navbar: FC = () => {
  const [isScrolling, setScrolling] = useState<boolean>(false)
  const { t } = useTranslation('home')

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    setScrolling(currentScrollPos >= 1)
  }

  useEffect(() => {
    if (!window) return

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [typeof window, handleScroll])

  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full transition-all ${
        isScrolling
          ? 'bg-white py-3 shadow dark:border-b dark:border-slate-600 dark:bg-gray-800 dark:shadow-none'
          : 'py-8'
      }`}
    >
      <div className='container flex max-w-7xl justify-between'>
        <Logo width={isScrolling ? 100 : 140} />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className='flex items-center space-x-4'>
          <SwitchLocaleButton isScrolling={isScrolling} />
          <SwitchThemeButton isScrolling={isScrolling} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
