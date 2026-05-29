import type { Metadata } from 'next'
import { Bangers, Inter, Permanent_Marker } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bangers = Bangers({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})
const marker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marker',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'La Pobreza — No es falta de esfuerzo, es falta de oportunidades',
  description:
    'Campaña social educativa sobre la pobreza: el problema, sus causas, su impacto y qué podemos hacer para generar un cambio real.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${bangers.variable} ${marker.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
