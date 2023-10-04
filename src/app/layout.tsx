import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'] , variable: '--font-roboto'})

export const metadata: Metadata = {
  title: 'Contacts Queue',
  description: 'Get on the queue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}font-sans`}>{children}</body>
    </html>
  )
}
