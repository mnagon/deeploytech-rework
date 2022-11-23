import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import TH_FLAG from '@assets/flags/th.png'
import US_FLAG from '@assets/flags/us.png'

const SwitchLocaleButton: FC = () => {
  const { locale } = useRouter()

  return (
    <Link className='hover:brightness-125' href='/' locale={locale === 'en' ? 'th' : 'en'}>
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
