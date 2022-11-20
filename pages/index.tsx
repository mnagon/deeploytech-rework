import { NextPage, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import TestButton from '@components/TestButton'
import Icon from '@components/common/Icon'

const HomePage: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <div className='container flex max-w-7xl flex-col items-center gap-4'>
      <h1>{t('title')}</h1>
      <p>let try to rework dee ploythec website</p>
      <Icon name='magnifying-chart' size={900} color='addddasdf asdf ' />
      <TestButton />
    </div>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
