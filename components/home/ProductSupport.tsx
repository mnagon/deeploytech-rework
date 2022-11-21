import { FC, PropsWithChildren, useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import Icon from '@components/common/Icon'

import PDKM_LOGO from '@assets/logos/products/pdkm.svg'
import DAYWORK_LOGO from '@assets/logos/products/daywork.svg'
import YOUNGHAPPY_LOGO from '@assets/logos/products/younghappy.svg'
import NEXTATE_LOGO from '@assets/logos/products/nextate.svg'
import OURPOINT_LOGO from '@assets/logos/products/ourpoint.svg'

const PDKMLink: FC<PropsWithChildren> = ({ children }) => {
  const [isHover, setHover] = useState<boolean>(false)

  return (
    <a
      href='https://www.pdkm.tech/'
      target='_blank'
      rel='noreferrer'
      className='inline-block w-48 rounded-full border border-primary py-3 text-center text-primary hover:shadow-2xl hover:brightness-125'
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className={`relative inline-block transition-all duration-200 ${
          isHover ? 'mr-2 pl-1' : 'pl-5'
        } `}
      >
        {children}
      </span>
      <Icon
        name='chevron-double-right'
        className={`inline-block w-4 text-base transition-all duration-200 ${
          isHover ? 'opacity-100' : 'ml-0 opacity-0'
        }`}
      />
    </a>
  )
}

const ProductSupport: FC = () => {
  const { t } = useTranslation('home')

  return (
    <section className='mb-10 bg-neutral-100 py-16 lg:mb-20'>
      <div className='container grid max-w-7xl gap-16 lg:grid-cols-2'>
        <div>
          <div className='mb-8 flex justify-center lg:justify-start'>
            <Image src={PDKM_LOGO} alt='pdkm logo' />
          </div>
          <div className='grid grid-cols-4 gap-8'>
            <Image src={DAYWORK_LOGO} alt='daywork logo' />
            <Image src={YOUNGHAPPY_LOGO} alt='younghappy logo' />
            <Image src={NEXTATE_LOGO} alt='nextate logo' />
            <Image src={OURPOINT_LOGO} alt='ourpoint logo' />
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='mb-2 text-2xl font-semibold lg:mb-4 lg:text-4xl'>
            {t('product__title1')}
            <br />
            <strong className='font-semibold  text-primary'>{t('product__title2')}</strong>
          </h2>
          <p className='mb-8 text-slate-600'>{t('product__content')}</p>
          <PDKMLink>{t('product__button')}</PDKMLink>
        </div>
      </div>
    </section>
  )
}

export default ProductSupport
