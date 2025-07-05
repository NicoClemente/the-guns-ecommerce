// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Guns - Armería Especializada | Armas, Municiones y Equipamiento Táctico',
  description: 'Armería especializada en venta de armas de fuego, municiones, óptica y equipamiento táctico. Retiro en local. CLU requerido. Buenos Aires, Argentina.',
  keywords: 'armería, armas de fuego, pistolas, rifles, escopetas, municiones, óptica, equipamiento táctico, airsoft, CLU, Buenos Aires',
  authors: [{ name: 'The Guns' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'The Guns - Armería Especializada',
    description: 'Armería especializada en venta de armas de fuego, municiones y equipamiento táctico.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://theguns.com.ar',
    siteName: 'The Guns',
    images: [{
      url: '/images/LogoTheGuns.png',
      width: 1200,
      height: 630,
      alt: 'The Guns - Armería Especializada'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Guns - Armería Especializada',
    description: 'Armería especializada en venta de armas de fuego, municiones y equipamiento táctico.',
  },
  other: {
    'geo.region': 'AR-C',
    'geo.placename': 'Buenos Aires',
    'geo.position': '-34.6118;-58.3960'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://theguns.com.ar" />
        <meta name="theme-color" content="#dc2626" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}