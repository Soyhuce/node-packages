import React, { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { NextPage } from 'next'

import { Stores } from '@/stores'

import '@soyhuce/css-reset'

import '@/styles/globals.scss'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return <Stores>{getLayout(<Component {...pageProps} />)}</Stores>
}

export default App
