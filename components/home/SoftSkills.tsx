import { FC } from 'react'
import { useTranslation } from 'next-i18next'

import Headline from '@components/common/Headline'
import Icon, { IconName } from '@components/common/Icon'

interface SkillProps {
  icon: IconName
  title: string
  content: string
}

const Skill: FC<SkillProps> = ({ icon, title, content }) => (
  <div className='text-center lg:text-left'>
    <span className='text-primary'>
      <Icon name={icon} size={56} />
    </span>
    <h3 className='mt-6 mb-2 text-xl font-medium lg:text-2xl'>{title}</h3>
    <p className='mx-auto max-w-lg text-slate-600'>{content}</p>
  </div>
)

const SoftSkills: FC = () => {
  const { t } = useTranslation('home')

  const SKILL_LIST: Array<SkillProps> = [
    {
      icon: 'hand-service',
      title: t('soft-skill__service__title'),
      content: t('soft-skill__service__content'),
    },
    {
      icon: 'thumb-up',
      title: t('soft-skill__quality__title'),
      content: t('soft-skill__quality__content'),
    },
    {
      icon: 'bright',
      title: t('soft-skill__design__title'),
      content: t('soft-skill__design__content'),
    },
  ]

  return (
    <section className='mb-10 lg:mb-20'>
      <div className='container max-w-7xl'>
        <Headline>{t('soft-skill__title')}</Headline>
        <p className='font-prompt text-2xl font-semibold lg:w-3/5 lg:text-3xl'>
          {t('soft-skill__content')}
        </p>
        <div className='mt-8 grid gap-16 lg:mt-16 lg:grid-cols-3'>
          {SKILL_LIST.map((e) => (
            <Skill {...e} key={e.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
