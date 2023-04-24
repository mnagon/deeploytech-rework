import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LOGO from '@assets/logos/logo.svg'
import LOGO_LIGHT from '@assets/logos/logo-light.svg'

interface LogoProps {
  className?: string
  width?: number
  light?: boolean
}

const Logo: FC<LogoProps> = ({ className, width, light }) => {
  return (
    <Link href='/' className={`transition-all hover:brightness-110 ${className}`}>
      <Image
        src={light ? LOGO_LIGHT : LOGO}
        alt='deeploytech logo'
        className='transition-all'
        width={width}
      />
    </Link>
  )
}

Logo.defaultProps = {
  className: '',
  width: 100,
  light: false,
}

export default Logo
