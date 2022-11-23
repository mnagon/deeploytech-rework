import { FC, PropsWithChildren, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

import Icon from '@components/common/Icon'

import useHover from '@hooks/useHover'

const ContactButton: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef(null)
  const isHover = useHover(ref)

  return (
    <motion.button
      ref={ref}
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.6,
        duration: 0.3,
        ease: 'easeOut',
      }}
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
    </motion.button>
  )
}

const Hero: FC = () => {
  const { t } = useTranslation('home')

  return (
    <section className='h-96 min-h-screen w-full bg-hero bg-cover bg-fixed bg-center bg-no-repeat'>
      <div className='container relative flex h-full max-w-7xl flex-col items-center justify-center py-32 transition-all duration-300 lg:items-start'>
        <motion.h1
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className='mb-4 max-w-lg text-center text-4xl font-medium text-white lg:max-w-2xl lg:text-left lg:text-7xl'
        >
          {t('hero__title')}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: 'easeOut',
          }}
          className='mb-8 max-w-2xl text-center text-white lg:max-w-xl lg:text-left lg:text-xl'
        >
          {t('hero__content')}
        </motion.p>
        <ContactButton>{t('hero__button')}</ContactButton>
      </div>
    </section>
  )
}

export default Hero
