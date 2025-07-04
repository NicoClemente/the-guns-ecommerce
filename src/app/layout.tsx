import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Guns - Armería Especializada',
  description: 'Armería especializada en equipamiento táctico, deportivo y de defensa personal. Armas, municiones, óptica y accesorios.',
  keywords: 'armería, armas, pistolas, rifles, municiones, óptica, equipamiento táctico, airsoft',
  authors: [{ name: 'The Guns' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'The Guns - Armería Especializada',
    description: 'Armería especializada en equipamiento táctico, deportivo y de defensa personal.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://theguns.vercel.app',
    siteName: 'The Guns',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Guns - Armería Especializada',
    description: 'Armería especializada en equipamiento táctico, deportivo y de defensa personal.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}