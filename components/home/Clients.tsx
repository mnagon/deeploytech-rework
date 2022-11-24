import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useTheme } from 'next-themes'

import Headline from '@components/common/Headline'

import useMediaQuery from '@hooks/useMediaQuery'

import ANYA_LOGO from '@assets/logos/clients/anya.svg'
import DAY9_LOGO from '@assets/logos/clients/day9.svg'
import DOAE_LOGO from '@assets/logos/clients/doae.svg'
import DTAC_LOGO from '@assets/logos/clients/dtac.svg'
import FUTURE_SKILLS_LOGO from '@assets/logos/clients/future-skills.svg'
import PEA_LOGO from '@assets/logos/clients/pea.svg'
import SKYLLER_LOGO from '@assets/logos/clients/skyller.svg'
import BOOKFIRST_LOGO from '@assets/logos/clients/bookfirst.svg'
import LING_LOGO from '@assets/logos/clients/ling.svg'
import CHEEVAMITR_LOGO from '@assets/logos/clients/cheevamitr.svg'
import MEMORIZE_LOGO from '@assets/logos/clients/memorize.svg'
import QUEQ_LOGO from '@assets/logos/clients/queq.svg'

const CLIENT_LIST = [
  ANYA_LOGO,
  DAY9_LOGO,
  DOAE_LOGO,
  SKYLLER_LOGO,
  DTAC_LOGO,
  FUTURE_SKILLS_LOGO,
  PEA_LOGO,
]
const CLIENT_LIST2 = [
  SKYLLER_LOGO,
  BOOKFIRST_LOGO,
  LING_LOGO,
  CHEEVAMITR_LOGO,
  ANYA_LOGO,
  MEMORIZE_LOGO,
  QUEQ_LOGO,
]

const Clients: FC = () => {
  const { t } = useTranslation('home')
  const { theme } = useTheme()
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  return (
    <section id='clients'>
      <div className='container max-w-7xl'>
        <Headline>{t('clients__title')}</Headline>
        <p className='font-prompt text-2xl font-medium dark:text-white lg:text-2xl'>
          {t('clients__subtitle')}
        </p>
        <p className='mt-8 text-slate-800 dark:text-white'>{t('clients__content')}</p>
        <Marquee
          pauseOnHover
          speed={30}
          gradientColor={theme === 'dark' ? [31, 41, 55] : [248, 251, 253]}
          className='mt-20'
        >
          {CLIENT_LIST.map((e) => (
            <div
              className='mx-2 flex h-16 w-28 items-center justify-center rounded bg-white p-1 lg:mx-4 lg:h-20 lg:w-40 lg:p-2 '
              key={e}
            >
              <div className='relative h-full w-full'>
                <Image src={e} alt='client logo' fill />
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          direction='right'
          speed={30}
          gradientColor={theme === 'dark' ? [31, 41, 55] : [255, 255, 255]}
          gradientWidth={isLargeScreen ? 300 : 20}
          className='mt-12'
        >
          {CLIENT_LIST2.map((e) => (
            <div
              className='mx-2 flex h-16 w-28 items-center justify-center rounded bg-white p-1 lg:mx-4 lg:h-20 lg:w-40 lg:p-2 '
              key={e}
            >
              <div className='relative h-full w-full'>
                <Image src={e} alt='client logo' fill />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Clients
