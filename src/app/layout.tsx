
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Royalty Records - Premium Music Distribution',
  description: 'Professional royalty management and music distribution platform for artists worldwide.',
  keywords: 'music, royalties, distribution, artists, streaming, publishing',
  authors: [{ name: 'Royalty Records' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
