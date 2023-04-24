import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Image, { StaticImageData } from 'next/image'
import Marquee from 'react-fast-marquee'
import { useTheme } from 'next-themes'

import Headline from '@components/common/Headline'

import useMediaQuery from '@hooks/useMediaQuery'

import ANYA_LOGO from '@assets/logos/clients/anya.png'
import DAY9_LOGO from '@assets/logos/clients/day9.png'
import DOAE_LOGO from '@assets/logos/clients/doae.png'
import DTAC_LOGO from '@assets/logos/clients/dtac.png'
import FUTURE_SKILLS_LOGO from '@assets/logos/clients/future-skills.png'
import PEA_LOGO from '@assets/logos/clients/pea.png'
import SKYLLER_LOGO from '@assets/logos/clients/skyller.png'
import BOOKFIRST_LOGO from '@assets/logos/clients/bookfirst.png'
import LING_LOGO from '@assets/logos/clients/ling.png'
import CHEEVAMITR_LOGO from '@assets/logos/clients/cheevamitr.png'
import MEMORIZE_LOGO from '@assets/logos/clients/memorize.png'
import QUEQ_LOGO from '@assets/logos/clients/queq.png'

import YOUNGHAPPY_LOGO from '@assets/logos/clients/younghappy.png'
import NUDD_LOGO from '@assets/logos/clients/nudd.png'

interface CustomMarqueeProps {
  direction: 'left' | 'right'
  itemList: Array<StaticImageData>
}

const CustomMarquee: FC<CustomMarqueeProps> = ({ direction, itemList }) => {
  const { theme } = useTheme()
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  return (
    <Marquee
      direction={direction}
      speed={30}
      gradientColor={theme === 'dark' ? [31, 41, 55] : [255, 255, 255]}
      gradientWidth={isLargeScreen ? 300 : 20}
      className='mt-12'
    >
      {itemList.map((e, index) => (
        <div
          className='mx-2 flex h-16 w-28 items-center justify-center rounded bg-white p-1 lg:mx-4 lg:h-20 lg:w-40 lg:p-2 '
          key={index}
        >
          <div className='relative h-full max-h-[60px] w-full max-w-[85px]'>
            <Image src={e} alt='client logo' fill objectFit='contain' />
          </div>
        </div>
      ))}
    </Marquee>
  )
}

const CLIENT_LIST = [
  YOUNGHAPPY_LOGO,
  DAY9_LOGO,
  DOAE_LOGO,
  SKYLLER_LOGO,
  DTAC_LOGO,
  FUTURE_SKILLS_LOGO,
  PEA_LOGO,
]
const CLIENT_LIST2 = [
  NUDD_LOGO,
  BOOKFIRST_LOGO,
  LING_LOGO,
  CHEEVAMITR_LOGO,
  ANYA_LOGO,
  MEMORIZE_LOGO,
  QUEQ_LOGO,
]

const Clients: FC = () => {
  const { t } = useTranslation('home')
  return (
    <section id='clients' className='pt-10 pb-14 lg:pt-14 lg:pb-24'>
      <div className='container max-w-7xl'>
        <Headline>{t('clients__title')}</Headline>
        <p className='font-prompt text-2xl font-medium dark:text-white lg:text-2xl'>
          {t('clients__subtitle')}
        </p>
        <p className='mt-8 mb-20 text-slate-800 dark:text-white'>{t('clients__content')}</p>
        <CustomMarquee direction='left' itemList={CLIENT_LIST} />
        <CustomMarquee direction='right' itemList={CLIENT_LIST2} />
      </div>
    </section>
  )
}

export default Clients
