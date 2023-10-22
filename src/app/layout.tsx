import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'عروسی پلای سعید و هانیه',
  description: 'عروسی پلای سعید و هانیه',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">

      <head>
        <meta property="og:title" content="عروسی پلای سعید و هانیه" />
        <meta property="og:description" content="هر چیزی که در مورد مراسم شام عروسی سعید و هانیه میخواین بدونین اینجاس" />
        <meta property="og:image" content="https://aroosipala.vercel.app/og.jpg" />
        <meta property="og:url" content="https://saeedohoneye.ir" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="عروسی پلای سعید و هانیه" />

        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />

      </head>
      <body >{children}</body>
    </html>
  )
}
