import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/globals.css'

export const metadata = {
  title: 'Subscan | Aggregate Substrate ecological network high-precision Web3 explorer',
  description:
    'Subscan | Substrate ecological explorer: Search, analyze, and visualize blockchain that occurs on Substrate based network (Polkadot, Kusama, Moonbeam, Acala, Darwinia), such as extrinsics, transfers, accounts, tokens, prices, staking, PLO and other activities.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
