import * as React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Page() {


    return (
        <div className="container mx-auto flex flex-wrap py-6">


            <section className="w-full md:w-1/3 flex flex-col items-left px-3">

                <h2 className="flex flex-col items-left px-3">
                    Why am I learning Rust ?
                </h2>
                <br/><br/>
                <article>
                <ul className="list-disc">
                    <li> It helps me reconnect with the basics of software engineering by focusing more on low level code operations</li>
                    <li> Rust offers high performance than any other language. Maybe I can use Rust for build tools and CLI programs </li>
                    <li> Its a very challenging language, and has a steep learning curve. I enjoy tacking complex tasks. </li>
                    <li> Helps me be a better engineer </li>
                </ul>
                </article>
                <br/><br/>
                My Rust Github project:  <a className="accent-red-500" href="https://github.com/byorn/learning_rust">https://github.com/byorn/learning_rust</a>

            </section>
        </div>

    )
}
