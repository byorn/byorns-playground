import * as React from "react";
import Link from "next/link";

import Image from "next/image";


export default function Home() {

  return (
     <>
        <div className="container mx-auto flex flex-wrap py-6">

            <section className="w-full md:w-2/3 flex flex-col items-center">

                <article className="flex flex-col shadow max-w-full">

                    <div className="bg-white flex flex-col justify-start  mx-auto max-w-full py-6 px-12">
                        <a href="https://cms.byorns-playground.com"
                           className="text-blue-700 text-sm font-bold uppercase pb-4">
                            NextJS 14</a>
                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">See my blog and projects
                            portfolio</a>
                        <p className="text-sm pb-3">
                            By <a href="#" className="font-semibold hover:text-gray-800">Byorn de Silva</a>, Published
                            on
                            Apr 15th 2024
                        </p>
                        <a href="#" className="pb-6"> I cloned an open source CMS written in NextJS 14, and hosted it
                            in Vercel.</a>
                        <a href="https://cms.byorns-playground.com"
                           className="uppercase text-gray-800 hover:text-black">View blog
                            <i className="fas fa-arrow-right"></i></a>
                    </div>
                </article>
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
                     <p className="pb-2">
                         Welcome to my blog! Here, I delve into the world of Next.js and Tailwind CSS, experimenting and pushing the boundaries of web development. Through this platform, I showcase my project portfolio, demonstrating my skills and creativity in building dynamic and engaging web experiences
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
