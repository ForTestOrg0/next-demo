import Head from 'next/head'
import METADATA from '@/config/metadata'
import { GetServerSidePropsContext } from 'next'
import type { AppProps } from 'next/app'
import { BareServerSideProps } from '@/types/page'
import { convertToRGB } from '@/utils/color'
type MetaProps = {
  metadata: {
    title: string
    description: string
  }
}

// const eina = localFont({
//   src: [
//     {
//       path: '../styles/fonts/Eina01.otf',
//       weight: '400',
//     },
//     {
//       path: '../styles/fonts/Eina01-SemiBold.otf',
//       weight: '600',
//     },
//   ],
//   variable: '--font-eina',
// })
export default function RootLayout({
  context,
  children,
  pageProps,
}: {
  context?: GetServerSidePropsContext
  children: React.ReactNode
  pageProps: AppProps & MetaProps & BareServerSideProps
}) {
  const metadata = pageProps?.metadata || {}
  const rbg = convertToRGB(pageProps?.chain?.chainConf.theme.colors[0] || '#E90979')
  return (
    <div id="subscan-app" className={`font-sans flex h-screen flex-col ${context?.req.cookies.theme || ''} ${pageProps?.chain?.chainConf?.id || ''}`}>
      <Head>
        <title>{metadata?.title || METADATA['default']['title']}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <meta name="Keywords" content="Polkadot,explorer,Kusama,Edgeware,search,extrinsic"></meta>
        <meta name="description" content={metadata?.description || METADATA['default']['description']} />
        <meta property="og:title" content={metadata?.title || METADATA['default']['title']} />
        <meta property="og:description" content={metadata?.description || METADATA['default']['description']} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.subscan.io/favicon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@subscan_io" />
        <meta name="twitter:title" data-vmid="twitter:title" content={metadata?.title || METADATA['default']['title']} />
        <meta name="twitter:image" content="https://www.subscan.io/favicon.png" />
        <meta name="twitter:description" content={metadata?.description || METADATA['default']['description']} />
        {pageProps?.chain?.chainConf?.id && (
          <style>{`
        body {
          --ui-network: ${rbg[0]} ${rbg[1]} ${rbg[2]};
        }
        `}</style>
        )}
      </Head>
      {children}
    </div>
  )
}
