import * as React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Page() {

    return (

        <div className="container mx-auto flex flex-wrap py-6">

            <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                <h4>

                    <br/><br/>
                    I recently finished my CKAD certification. I am now Certified Kubernetes Application Developer from The Linux Foundataion.
                    <ul>
                        <li> Using AWS CDK to build LAMDA and S3 environments </li>
                        <li> Automating with AWS Code pipeline </li>
                    </ul>
                </h4>


            </section>
        </div>

    )
}
