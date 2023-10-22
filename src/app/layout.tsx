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

      </head>
      <body >{children}</body>
    </html>
  )
}
