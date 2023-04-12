''
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={`/referenda_v2`}>referenda_v2</Link>
    </main>
  )
}
