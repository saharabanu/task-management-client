'use client'

import Header from '@/components/ui/Header'
import './globals.css'
import Providers from '@/lib/Providers'





export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
      <body>
      <header className="fixed top-0 left-0 text-center w-full header bg-blue-400 py-4 text-white font-bold text-lg shadow-lg">
      <Header/>
      </header>
      {children}
      </body>
    </html>
    </Providers>
  )
}
