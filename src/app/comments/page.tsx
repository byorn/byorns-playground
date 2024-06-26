import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <>
             <h1 className="text-5xl">You Shall Not Pass!</h1>
      github id    { process.env.GITHUB_ID }
          <br/>
          secret   { process.env.NEXTAUTH_SECRET }
          </>
      )}
    </>
  )
}
