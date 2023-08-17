import * as React from "react";
import Link from "next/link";

import Image from "next/image";


export default function Home() {

  return (
     <>
        <nav className="w-full py-4 border-t border-b bg-gray-100" >
             <div className="block sm:hidden">
                 <a
                     href="#"
                     className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"

                 >
                 Topics <i className="open ? 'fa-chevron-down': 'fa-chevron-up' fas ml-2"></i>
                </a>
            </div>
            <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <Link  href={'/front-end'} className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Front End</Link>
                <Link  href={'/back-end'} className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Back End</Link>
                <Link  href={'/dev-ops'} className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Dev-Ops</Link>
                <Link  href={'/ml'} className="hover:bg-gray-400 rounded py-2 px-4 mx-2">ML</Link>
            </div>
            </div>
        </nav>

         <div className="container mx-auto flex flex-wrap py-6">

              <section className="w-full md:w-2/3 flex flex-col items-center px-3">


                  <article className="flex flex-col shadow my-4">

                      <a href="#" className="hover:opacity-75">
                          <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"/>
                      </a>
                      <div className="bg-white flex flex-col justify-start p-6">
                          <a href="/back-end" className="text-blue-700 text-sm font-bold uppercase pb-4">Back End</a>
                          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">I built a web server in Rust ! </a>
                          <p className="text-sm pb-3">
                              By <a href="#" className="font-semibold hover:text-gray-800">Byorn de Silva</a>, Published on
                              Aug 15th, 2023
                          </p>
                          <a href="#" className="pb-6"> I was keen on learning Rust, so I bought a tutorial from udemy and started building a webserver
                              in Rust.
                              </a>

                              <a href="/back-end/rust" className="uppercase text-gray-800 hover:text-black">Continue Reading <i
                                  className="fas fa-arrow-right"></i></a>


                      </div>
                  </article>

                 <article className="flex flex-col shadow my-4">

                     <a href="#" className="hover:opacity-75">
                         <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"/>
                     </a>
                     <div className="bg-white flex flex-col justify-start p-6">
                         <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Front End</a>
                         <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">This site&lsquo;s front end tech stack </a>
                         <p className="text-sm pb-3">
                             By <a href="#" className="font-semibold hover:text-gray-800">Byorn de Silva</a>, Published on
                             May 17th, 2023
                         </p>
                         <a href="#" className="pb-6">This site was built on React 18 / NextJS 13.4 and Tailwind CSS. When NextJS 13.4 was released, I had to redo the whole site, as it was first built on NextJS 12. This site implements
                         the new server side app folder and client side rendering separation, which is why NextJS is awesome cause React does not need to be loaded on the browser which reduces the javascript bundle size and page loading time.
                         NextJS is also really great for SEO, as the html is not minified inside Javascript which helps SEO Bots to travel the website easily ..
                         </a>
                         <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i
                             className="fas fa-arrow-right"></i></a>
                     </div>
                 </article>

                 <article className="flex flex-col shadow my-4">

                     <a href="#" className="hover:opacity-75">
                         <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"/>
                     </a>
                     <div className="bg-white flex flex-col justify-start p-6">
                         <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Back End, Dev-Ops</a>
                         <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">This site&lsquo;s back end and CI-CD pipeline tech stack</a>
                         <p className="text-sm pb-3">
                             By <a href="#" className="font-semibold hover:text-gray-800">Byorn de Silva</a>, Published on
                             May 17th, 2023
                         </p>
                         <a href="#" className="pb-6">Next JS 13, supports NodeJS/Express like Lambda services, where sensitive data processing can be handled on server components.
                         This app could have been deployed to Vercel, but I chose AWS Amplify. Deploying to AWS Amplify is easy, as it provides you a CLI and CI/CD build pipeline.</a>
                         <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i
                             className="fas fa-arrow-right"></i></a>
                     </div>
                 </article>


                 <div className="flex items-center py-8">
                     <a href="#"
                        className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                     <a href="#"
                        className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                     <a href="#"
                        className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i
                         className="fas fa-arrow-right ml-2"></i></a>
                 </div>

             </section>


             <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                 <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                     <p className="text-xl font-semibold pb-5">About Me</p>

                     <img
                         src="https://byorns-playground.s3.ap-southeast-2.amazonaws.com/profile-pic.jpeg"
                         width={300}
                         height={100}
                         alt="Picture of the author"
                     />
                     <p className="pb-2">The best way to learn new tech is by learning the fundamentals and then practically building things. Being able to teach others is also a great way to solidify your understanding on things.
                        This is why I built this site in the form of a CMS. It is mainly for me to experiment on NextJS, and AWS Amplify.
                        More content coming soon ..!
                     </p>


                     <a href="/about"
                        className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                         Get to know me
                     </a>
                 </div>



             </aside>

         </div>








      </>);
}
