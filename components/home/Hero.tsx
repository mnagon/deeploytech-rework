import { FC, PropsWithChildren, useState } from 'react'
import { useTranslation } from 'next-i18next'

import Icon from '@components/common/Icon'

const ContactButton: FC<PropsWithChildren> = ({ children }) => {
  const [isHover, setHover] = useState<boolean>(false)

  return (
    <button
      className='w-40 rounded-full bg-primary py-3 hover:shadow-2xl hover:brightness-125'
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
    </button>
  )
}

const Hero: FC = () => {
  const { t } = useTranslation('home')

  return (
    <section className='h-96 min-h-screen w-full bg-hero bg-cover bg-fixed bg-center bg-no-repeat py-20'>
      <div className='container flex h-full max-w-7xl flex-col items-center justify-center lg:items-start'>
        <h1 className='mb-4 text-center text-4xl font-medium sm:w-8/12 lg:w-7/12 lg:text-left lg:text-7xl'>
          {t('hero__title')}
        </h1>
        <p className='mb-8 w-2/3 text-center lg:w-1/2 lg:text-left lg:text-xl'>
          {t('hero__content')}
        </p>
        <ContactButton>{t('hero__button')}</ContactButton>
      </div>
    </section>
  )
}

export default Hero