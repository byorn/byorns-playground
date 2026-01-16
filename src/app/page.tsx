import * as React from "react";
import Image from "next/image";
import HeaderPageContents from "@/components/header-page-contents";
import {getServerSession} from "next-auth/next";
import {options} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";


export default async function Home() {
    const session = await getServerSession(options)
    if (session) {
        redirect('/comments')
    }
  return (
     <>
        <div className="container mx-auto flex flex-wrap py-6">



            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                <div className="w-full border-1 border-gray-400 shadow flex flex-col my-4 p-6">
                <p className="text-xl font-semibold pb-5 text-white">About Me</p>

                    <Image
                        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                        src={'https://byorns-playground.s3.ap-southeast-2.amazonaws.com/profile-pic.jpeg'}
                        width={200}
                        height={200}
                        alt={"Profile Pic"}
                        priority={true}
                    />

                    <p className="pt-6 pb-2">
                        Seasoned Staff Software Engineer with commercial experience building projects using React/Typescript
                        on the front end. <br/><br/>
                        On the back end Java and Spring, Golang , NodeJS and AWS
                        <br/><br/>
                        I also have exposure to automating the devops pipelines to build cloud native software utilizing
                        Kubernetes/Docker and integrating with AWS services.<br/><br/>

                        I hope to build an AI agent so that recruiters can interact with my AI self on work experience and tech used. This is comming soon .....

                    </p>


                    <a href={'https://cms.byorns-playground.com/'}
                        className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                         Get to know me
                     </a>
                 </div>


             </aside>

            <HeaderPageContents />

         </div>


     </>);
}
