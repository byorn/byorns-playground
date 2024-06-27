import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'


export const metadata = {
  title: 'NextAuth Tutorial',
  description: 'Learn NextAuth.js by Dave Gray',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
            <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">

            {children}
          </main>
            </>


  )
}
