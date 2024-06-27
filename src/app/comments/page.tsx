import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"
import Comments from "../components/Comments"
import CommentBoxTextarea from "../components/TextArea"
export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
          <>
            <div className="grid grid-cols-1 gap-10 place-content-evenly">
              <div> <UserCard user={session?.user} pagetype={"Home"}/></div>

              <div>
                <div className="px-11 mx-9 pt-10">
                 <Comments />
                </div>
              </div>

            </div>
          </>
      ) : (
          <>
            <CommentBoxTextarea isLoggedIn={false}/>
          </>
      )}
    </>
  )
}
