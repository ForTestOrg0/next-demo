import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <p>This is referenda_v2 home page</p>
      <Link href="/referenda_v2/001">referenda-001</Link>
    </main>
  )
}
