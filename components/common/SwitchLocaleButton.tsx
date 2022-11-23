import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import useIsClient from '@hooks/useIsClient'

import TH_FLAG from '@assets/flags/th.png'
import US_FLAG from '@assets/flags/us.png'

interface SwitchLocaleButtonProps {
  isScrolling: boolean
}

const SwitchLocaleButton: FC<SwitchLocaleButtonProps> = ({ isScrolling }) => {
  const { locale } = useRouter()
  const isClient = useIsClient()

  if (!isClient) return null

  return (
    <Link href='/' locale={locale === 'en' ? 'th' : 'en'}>
      <Image
        src={locale === 'en' ? US_FLAG : TH_FLAG}
        alt={locale === 'en' ? 'us flag' : 'th flag'}
        width={20}
        height={20}
      />
    </Link>
  )
}

export default SwitchLocaleButton
