import '@/styles/globals.css'

export const metadata = {
  title: 'Referenda',
  description:
    'Subscan | Substrate ecological explorer: Search, analyze, and visualize blockchain that occurs on Substrate based network (Polkadot, Kusama, Moonbeam, Acala, Darwinia), such as extrinsics, transfers, accounts, tokens, prices, staking, PLO and other activities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
