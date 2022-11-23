import { FC } from 'react'
import { useTheme } from 'next-themes'

import Icon from '@components/common/Icon'
import useIsClient from '@hooks/useIsClient'

interface SwitchThemeButtonProps {
  isScrolling: boolean
}

const SwitchThemeButton: FC<SwitchThemeButtonProps> = ({ isScrolling }) => {
  const isClient = useIsClient()
  const { theme, setTheme } = useTheme()

  if (!isClient) return null

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' && (
        <span className={`${isScrolling ? 'text-primary' : 'text-white'}`}>
          <Icon size={20} name='moon' />
        </span>
      )}
      {theme !== 'dark' && (
        <span className={`${isScrolling ? 'text-primary' : 'text-white'}`}>
          <Icon size={20} name='sun' />
        </span>
      )}
    </button>
  )
}

export default SwitchThemeButton
