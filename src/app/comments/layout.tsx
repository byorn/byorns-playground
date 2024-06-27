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
          <main className="flex justify-center items-start p-6 min-h-screen">
           {children}
          </main>
  )
}
