'use client'

import Header from '@/components/ui/Header'
import './globals.css'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'




// export const metadata = {
//   title: 'Task Management App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
      <body>
      <header className="fixed top-0 left-0 text-center w-full header bg-black py-4 text-white font-bold text-lg shadow-lg">
      <Header/>
      </header>
      {children}
      </body>
    </html>
    </Provider>
  )
}
