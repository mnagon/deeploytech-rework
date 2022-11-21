import { FC } from 'react'
import { useTranslation } from 'next-i18next'

interface Rating {
  title: string
  description: string
}

const Rating: FC<Rating> = ({ title, description }) => (
  <li className='flex flex-col items-center space-y-1 text-center font-prompt text-white lg:space-y-2'>
    <span className='text-3xl font-medium lg:text-5xl'>{title}</span>
    <span className='max-w-[164px] text-sm'>{description}</span>
  </li>
)

const AboutUs: FC = () => {
  const { t } = useTranslation('home')

  const RATING_LIST: Array<Rating> = [
    {
      title: '100%',
      description: t('about-us__satisfication-level'),
    },
    {
      title: '5.0',
      description: t('about-us__rating'),
    },
    {
      title: '100%',
      description: t('about-us__growth-rate'),
    },
    {
      title: '130+',
      description: t('about-us__doing-projects'),
    },
  ]

  return (
    <section className='py-12 lg:py-24'>
      <div className='container flex max-w-7xl flex-col items-center text-center'>
        <h2 className='mb-4 text-sm text-primary'>{t('about-us__title')}</h2>
        <p className='mb-4 font-prompt text-2xl font-medium lg:text-4xl'>
          {t('about-us__subtitle1')}
          <strong className='font-medium text-primary'>{t('about-us__subtitle2')}</strong>
        </p>
        <p className='mb-6 text-slate-600  sm:w-3/4 lg:mb-8 lg:w-1/2'>{t('about-us__content')}</p>
        <ul className='grid w-full grid-cols-2 gap-12 rounded-2xl bg-primary p-8 lg:grid-cols-4 '>
          {RATING_LIST.map((e, i) => (
            <Rating {...e} key={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutUs
