import { FC, PropsWithChildren, useRef } from 'react'
import { motion, useScroll, Variants, useTransform } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import Icon from '@components/common/Icon'
import HERO_BACKGROUND from '@assets/images/hero-background.jpg'

import useHover from '@hooks/useHover'

const textVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const buttonVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const ContactButton: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef(null)
  const isHover = useHover(ref)

  return (
    <motion.a
      ref={ref}
      variants={buttonVariant}
      href='/#contact'
      initial='hidden'
      animate='visible'
      transition={{
        delay: 0.6,
        duration: 0.3,
        ease: 'easeOut',
      }}
      className='inline-block w-40 cursor-pointer rounded-full bg-primary py-3 text-center text-white hover:shadow-2xl hover:brightness-125'
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
    </motion.a>
  )
}

const Hero: FC = () => {
  const { t } = useTranslation('home')

  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [150, 0], [0, 1])
  return (
    <section className='relative h-96 min-h-screen w-full'>
      <div className='fixed -z-10 h-full w-full'>
        <Image
          src={HERO_BACKGROUND}
          alt='hero background'
          title='hero background'
          placeholder='blur'
          quality={100}
          unoptimized
          priority
          fill
          objectFit='cover'
        />
      </div>
      <motion.div
        style={{ opacity }}
        className='container relative flex h-full max-w-7xl flex-col items-center justify-center py-32 lg:items-start'
      >
        <motion.h1
          variants={textVariant}
          initial='hidden'
          animate='visible'
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className='mb-4 max-w-lg whitespace-pre-line text-center text-4xl font-medium text-white lg:max-w-2xl lg:text-left lg:text-7xl'
        >
          {t('hero__title')}
        </motion.h1>
        <motion.p
          variants={textVariant}
          initial='hidden'
          animate='visible'
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
      </motion.div>
    </section>
  )
}

export default Hero
