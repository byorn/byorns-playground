import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Image from "next/image";

export default function Home() {

  return (
      <Box sx={{ overflowX: 'hidden' }}>
              <Container>
                  <Image src={"/byorns-playground-logo.png"}  width={300} height={100}
                       alt={'myimage'}/>

                  <h3> Mar 19 - 2023 </h3> Currently looking into Machine learning algorthms as I am interested in getting my hands on Machine Learning.
                  Meanwhile, I also experiment  with new libraries like <Link href={'https://swr.vercel.app/docs/getting-started'}>SWR. (Stale While Revalidate) library  </Link>
                  Using SWR, the data on page will automatically get updated (Refreshed), whenever the data in the backend/db is updated.

                  <h3> Mar 13 - 2023 </h3> Experimenting on an <Link href={'/prisma-with-ssr'}>ORM framework, PRISMA. </Link>
                  The data will be loaded on the Server, for SEO Optimisation. This page also include a Form that is been validated using React-Hook-Forms.
                  click <Link href={'/prisma-with-ssr'}> here  to see CRUD operations using PRISMA, where data is persisted on AWS RDS. </Link>
                  <h3>Mar 01 - 2023 </h3> This site is built using NextJS 13, and is deployed  to AWS Amplify.
                  Experimented on <Link href={'/front-page'}> Material UI components </Link>. Click  <Link href={'/front-page'}>here</Link> to find a initial
                  mock up of a page with a header and logo, and side menu that fits for mobile devices as well.
                       <br/><br/>
                  I also enjoy solving alogorthms and datastructure challenges.
                  Heres a list of <Link href={'/dsa'}> most popular challenges .</Link> I was able to solve one medium difficulty challenge from this list.

              </Container>
      </Box>
  )
}
