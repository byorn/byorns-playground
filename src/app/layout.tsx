import './globals.css'
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import MyImage  from '../../public/byorns-playground-logo.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const metadata = {
  title: 'Byorns-Playground',
  description: 'Byorns playground is all about tech !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <link
          rel="shortcut icon"
          href="/favicon.ico"
      />

      <meta name="theme-color" content="#ffffff" />
      <meta
          name="description"
          content="Byorn's portfolio of software development technologies. A playground for research and development"
      />
      <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
          property="og:title"
          content="Byorn's playground for all things full-stack software R & D"
      />
      <meta
          property="og:description"
          content="Byorn's portfolio of software development technologies. A playground for research and development"
      />
      <meta
          property="og:url"
          content="https://www.byorns-playground.com/"
      />
    </head>
      <body>

      <nav className="w-full py-4 bg-amber-950 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">

          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li><Link className="hover:text-gray-200 hover:underline px-4" href={'/'}>Home</Link></li>
              <li><Link className="hover:text-gray-200 hover:underline px-4" href={'/about'}>About</Link></li>
              <li><Link className="hover:text-gray-200 hover:underline px-4"
                        href={'https://cms.byorns-playground.com/'}>Blog</Link></li>

            </ul>
          </nav>

          <div className="flex items-center text-lg no-underline text-white pr-6">
          <a className="pl-6" href="https://github.com/byorn">
              <FontAwesomeIcon icon={faGithub} className="text-white-800 w-8 h-8"/>
            </a>
            <a className="pl-6" href="https://au.linkedin.com/in/byorndesilva">
              <FontAwesomeIcon icon={faLinkedin} className="text-white-800 w-8 h-8"/>
            </a>
          </div>
        </div>

      </nav>

      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-6">
          <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="/">
            <Image src={MyImage}  width={400} height={100}
                   alt={'myimage'} className={'largeColumn'}/>
          </a>
        </div>
      </header>

      {children}

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


      <footer className="w-full border-t bg-white pb-12">

      <div className="w-full container mx-auto flex flex-col items-center">

        <div className="uppercase pb-6">&copy; byorns-playground.com</div>
      </div>
      </footer>
      </body>
    </html>
  )
}
