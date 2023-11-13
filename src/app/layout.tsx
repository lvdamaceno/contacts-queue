import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'] , variable: '--font-roboto'})

export const metadata: Metadata = {
  title: 'Fila de Atendimento',
  description: 'Clique no botão e comece um novo atendimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${roboto.variable}font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
