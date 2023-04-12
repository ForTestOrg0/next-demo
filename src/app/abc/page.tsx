import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <p>This is abc home page</p>
      <Link  href='/abc/001'>abc-001</Link>
    </main>
  )
}
