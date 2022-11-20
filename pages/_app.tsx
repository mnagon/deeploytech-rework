import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'

import '@styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
