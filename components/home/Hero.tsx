import { FC, PropsWithChildren, useRef } from 'react'
import { useTranslation } from 'next-i18next'

import Icon from '@components/common/Icon'

import useHover from '@hooks/useHover'

const ContactButton: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef(null)
  const isHover = useHover(ref)

  return (
    <button
      ref={ref}
      className='w-40 rounded-full bg-primary py-3 text-white hover:shadow-2xl hover:brightness-125'
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
    <section className='mb-10 h-96 min-h-screen w-full bg-hero bg-cover bg-fixed bg-center bg-no-repeat lg:mb-20'>
      <div className='container relative flex h-full max-w-7xl flex-col items-center justify-center py-32 transition-all duration-300 lg:items-start'>
        <h1 className='mb-4 max-w-lg text-center text-4xl font-medium text-white lg:max-w-2xl lg:text-left lg:text-7xl'>
          {t('hero__title')}
        </h1>
        <p className='mb-8 max-w-2xl text-center text-white lg:max-w-xl lg:text-left lg:text-xl'>
          {t('hero__content')}
        </p>
        <ContactButton>{t('hero__button')}</ContactButton>
      </div>
    </section>
  )
}

export default Hero
