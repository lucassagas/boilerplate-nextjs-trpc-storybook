import GlobalStyles from '@/styles/GlobalStyles'
import { trpc } from '@/utils/trpc'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import React from 'react'

type NextPageWithLayout = NextPage & {
  layout?: () => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

NProgress.configure({
  showSpinner: false,
})

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function App({ Component, pageProps }: AppPropsWithLayout) {
  const CustomLayout = Component.layout ?? React.Fragment

  return (
    <CustomLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </CustomLayout>
  )
}

export default trpc.withTRPC(App)
