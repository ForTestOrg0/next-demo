import type { ReactElement, ReactNode } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import RootLayout from './layout'
import '@/styles/globals.css';
import '@/ui/Tabs/styles.scss';
import { GetTokenUniqueIdProps, getTokenUniqueId } from '@/utils/api'
import BigNumber from 'bignumber.js'

// This config is required for number formatting
// https://mikemcl.github.io/bignumber.js/#toS
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
  ROUNDING_MODE: 1
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const getInitialProps: GetServerSideProps<{
  data: GetTokenUniqueIdProps,
  page: number,
}> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const data = await getTokenUniqueId(context.req.headers.host || '', {});

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page: page,
    },
  }
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}