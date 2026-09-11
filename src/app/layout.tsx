import type { Metadata, Viewport } from 'next'
import { Didot, Bodoni, Grotesk } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Émeraude — Салон красоты премиум-класса, Москва', template: '%s | Émeraude' },
  description: 'Индивидуальные программы ухода, косметология класса люкс, авторские программы. Запись на консультацию.',
  keywords: ['салон красоты премиум москва', 'уход за лицом люкс', 'мастера высокого уровня', 'эстетика красоты'],
  openGraph: { type: 'website', locale: 'ru_RU', siteName: 'Émeraude' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FDFBF7',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="bg-marble">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${Didot.className} ${Bodoni.className} ${Grotesk.className}`}>
        {children}
      </body>
    </html>
  )
}