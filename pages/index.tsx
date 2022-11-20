import { NextPage, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Hero from '@components/home/Hero'
import AboutUs from '@components/home/AboutUs'
import ProductSupport from '@components/home/ProductSupport'
import Services from '@components/home/Services'
import Integration from '@components/home/Integration'
import Works from '@components/home/Works'
import Clients from '@components/home/Clients'
import Ads from '@components/home/Ads'

const HomePage: NextPage = () => (
  <>
    <Hero />
    <AboutUs />
    <ProductSupport />
    <Services />
    <Integration />
    <Works />
    <Clients />
    <Ads />
  </>
)

export default HomePage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
