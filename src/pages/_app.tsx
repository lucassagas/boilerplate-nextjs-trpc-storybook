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

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const CustomLayout = Component.layout ?? React.Fragment

  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  )
}
