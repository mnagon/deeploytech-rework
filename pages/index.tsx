import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Hero from '@components/home/Hero'
import AboutUs from '@components/home/AboutUs'
import SoftSkills from '@components/home/SoftSkills'
import ProductSupport from '@components/home/ProductSupport'
import Services from '@components/home/Services'
import Integration from '@components/home/Integration'
import Works from '@components/home/Works'
import Clients from '@components/home/Clients'
import Promote from '@components/home/Promote'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Deeploy technology Make Solution for Your Business</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content='You’re here because you need or looking for creative software development team. We can be your solution. And we will provide a software that belongs to you.'
      />
    </Head>
    <Hero />
    <AboutUs />
    <SoftSkills />
    <ProductSupport />
    <Services />
    <Integration />
    <Works />
    <Clients />
    <Promote />
  </>
)

export default HomePage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  }
}
