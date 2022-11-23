import { FC } from 'react'
import { useTheme } from 'next-themes'

import Icon from '@components/common/Icon'

interface SwitchThemeButtonProps {
  className?: string
}

const SwitchThemeButton: FC<SwitchThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className='hover:brightness-125'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' && (
        <span className={className}>
          <Icon size={20} name='moon' />
        </span>
      )}
      {theme !== 'dark' && (
        <span className={className}>
          <Icon size={20} name='sun' />
        </span>
      )}
    </button>
  )
}

SwitchThemeButton.defaultProps = {
  className: 'text-white',
}

export default SwitchThemeButton
