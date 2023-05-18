import * as React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Page() {

    // @ts-ignore
    return (

        <div className="container mx-auto flex flex-wrap py-6">

            <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                <br/>

                <h4>
                    Front End related tech .... Still a work in progress ...

                    <br/><br/>
                    Hope to have some articles on following very soon ..
                    <br/><br/>
                    <ul className="list-disc">
                        <li> Whats new in React 18 </li>
                        <li> Tailwind CSS </li>
                        <li> Building micro front ends - ASTRO ? React ? </li>
                    </ul>
                </h4>


            </section>
        </div>

    )
}
