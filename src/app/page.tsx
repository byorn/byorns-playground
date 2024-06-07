import * as React from "react";
import Link from "next/link";

import Image from "next/image";
import HomePageContent from "@/components/HomePageContent";


export default function Home() {

  return (
     <>
        <div className="container mx-auto flex flex-wrap py-6">

            <HomePageContent />

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
                        Full Stack Snr/Lead Engineer with commercial experience building projects using React/Typescript
                        on the front end. <br/><br/>
                        Most of my back end experience is Java/Springboot, and have some experience building Rest and
                        GraphQL API's using Node/Express/NextJS. <br/><br/>

                        I also have exposure to automating the devops pipelines to build cloud native software utilizing
                        Kubernetes/Docker and integrating with AWS services.<br/><br/>

                        This Website is a playground project, where I spike on new tech related to NextJS/React/Node and
                        AWS.
                    </p>


                    <a href={'https://cms.byorns-playground.com/'}
                        className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                         Get to know me
                     </a>
                 </div>


             </aside>

         </div>


     </>);
}
