import * as React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Page() {

    // @ts-ignore
    return (

        <div className="container mx-auto flex flex-wrap py-6">

            <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                <h4>
                    With the AI trend moving fast, and also to be a well rounded engineer, I
                    decided to take a course on Machine Learning, from Standford University - Coursera.

                    <br/><br/>
                    I learnt how to use Python for Linear Regression models, and Classification Models <br/><br/>
                    Hope to include my github project about this <br/><br/>
                    My certificate can be found <Link className={'text-blue-600 visited:text-purple-600'} href={'https://coursera.org/share/32651e47da1353d2a0fdc5fe23c52cee'}>here</Link>.

                    <br/><br/>
                    I still have more to learn here, and doing this as a hobby.*
                </h4>


            </section>
        </div>

    )
}
