import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import Head from 'next/head'
import localFont from 'next/font/local'

const eina = localFont({
  src: [
    {
      path: '../styles/fonts/Eina01.otf',
      weight: '400',
    },
    {
      path: '../styles/fonts/Eina01-SemiBold.otf',
      weight: '600',
    },
  ],
  variable: '--font-eina'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${eina.variable} font-sans`}>
      <Head>
        <title>Subscan | Aggregate Substrate ecological network high-precision Web3 explorer</title>
        <meta name="description" data-vmid="description" content="Subscan | Substrate ecological explorer: Search, analyze, and visualize blockchain that occurs on Substrate based network (Polkadot, Kusama, Moonbeam, Acala, Darwinia), such as extrinsics, transfers, accounts, tokens, prices, staking, PLO and other activities." />
      </Head>
      <Header />
      {children}
      <Footer reactVersion="v18" nextVersion='v13' />
    </div>
  )
}
