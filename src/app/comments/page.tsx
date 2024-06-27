import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <>
             <h1 className="text-5xl">This page is protected. <br/><br/>
               To view your details:

               <Link href="/api/auth/signin">Sign In</Link></h1>
         </>
      )}
    </>
  )
}
