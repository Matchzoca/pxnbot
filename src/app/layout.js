import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PIXELBOT!',
  description: 'O melhor Bot de todos os tempos! rsrs >.>',
  author: 'Pixelon K3321',
  keywords: 'bot, pixelbot, inteligência artificial',
  viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content={metadata.viewport} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
