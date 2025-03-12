"use client"

import * as React from "react";

export default function HeaderPageContents(){
    return (<section className="w-full md:w-2/3 flex flex-col items-center">

            <article
                className="flex flex-col border-1 border-gray-400 shadow max-w-full hover:border  hover:border-blue-500 p-4"
                onClick={() => {
                    location.href = 'https://cms.byorns-playground.com/projects/a-quick-overview-of-projects-i-worked-on-commercially'
                }}>

                <div className="flex flex-col justify-start  mx-auto max-w-full py-6 px-12">
                    <a href="https://cms.byorns-playground.com/projects/a-quick-overview-of-projects-i-worked-on-commercially"
                       className="text-white text-sm font-bold uppercase pb-4">
                        Projects</a>
                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Work Experience</a>
                    <a href="#" style={{width: '500px'}} className="pb-6"> A brief overview of projects I have worked
                        on</a>
                </div>
            </article>
            <br/>
            <article
                className="flex flex-col border-1 border-gray-400 shadow max-w-full hover:border  hover:border-blue-500 p-4"
                onClick={() => {
                    location.href = 'https://www.devsbounty.com'
                }}>

                <div className="  flex flex-col justify-start  mx-auto max-w-full py-6 px-12">
                    <a href="https://www.devsbounty.com"
                       className="text-white text-sm font-bold uppercase pb-4">
                       Hobby Project
                    </a>
                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">www.devsbounty.com</a>
                    <a href="#" style={{width: '500px'}} className="pb-6"> A freelancing platform </a>
                </div>
            </article>
            <br/>
            <article
                className="flex flex-col border-1 border-gray-400 shadow max-w-full hover:border hover:border-blue-500 p-4"
                onClick={() => {
                    location.href = 'https://www.byorns-playground.com/comments'
                }}>

                <div className="  flex flex-col justify-start  mx-auto max-w-full py-6 px-12">
                    <a href="https://www.byorns-playground.com/comments"
                       className="text-white text-sm font-bold uppercase pb-4">
                        Authentication and Authorisation</a>
                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Next Auth </a>
                    <a href="#" style={{width: '500px'}} className="pb-6"> Using NextAuth to login with Github or any
                        other social provider, and protecing pages where a user is not logged in ...
                    </a>
                </div>
            </article>
            <br/>
            <article
                className="flex flex-col border-1 border-gray-400 shadow max-w-full hover:border hover:border-blue-500 p-4"
                onClick={() => {
                    location.href = 'https://cms.byorns-playground.com'
                }}>

                <div className="  flex flex-col justify-start  mx-auto max-w-full py-6 px-12">
                    <a href="https://cms.byorns-playground.com"
                       className="text-white text-sm font-bold uppercase pb-4">
                        NextJS 14</a>
                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">My Blog</a>
                    <a href="#" style={{width: '500px'}} className="pb-6"> I cloned an open source CMS written in
                        NextJS 14, and hosted it
                        in Vercel.</a>
                </div>
            </article>
        </section>
    );
}