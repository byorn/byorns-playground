import Link from "next/link";





export default function Home() {

  return (
    <>
        <p> Click here for a simple <Link href={'/front-page'}>front page</Link> </p>
    </>
  )
}
