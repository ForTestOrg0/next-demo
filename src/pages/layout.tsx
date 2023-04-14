import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Subscan | Aggregate Substrate ecological network high-precision Web3 explorer</title>
        <meta name="description" data-vmid="description" content="Subscan | Substrate ecological explorer: Search, analyze, and visualize blockchain that occurs on Substrate based network (Polkadot, Kusama, Moonbeam, Acala, Darwinia), such as extrinsics, transfers, accounts, tokens, prices, staking, PLO and other activities." />
      </Head>
      <Header />
      {children}
      <Footer reactVersion="v18" nextVersion='v13' />
    </>
  )
}
