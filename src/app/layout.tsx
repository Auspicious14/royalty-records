
import type { Metadata } from 'next'
import './global.css'
import { AppContextProvider } from '@/context'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kings Productions & Management - Where Legend Hits Are Made',
  description: 'Premier entertainment and business hub focused on promoting artists and creating premium content.',
  keywords: 'music production, artist management, entertainment, booking, talent agency',
  authors: [{ name: 'Kings Productions & Management' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Kings Productions & Management',
    description: 'Where Legend Hits Are Made',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <AppContextProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  )
}
