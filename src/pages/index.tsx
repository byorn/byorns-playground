import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Image from "next/image";
import styles from 'styles/Home.module.css'
export default function Home() {

  return (
      <Box sx={{ overflowX: 'hidden' }}>
              <Container>
                  <div className={styles.flexContainer}>
                  <Image src={"/byorns-playground-logo.png"}  width={300} height={100}
                       alt={'myimage'} className={styles.largeColumn}/>
                      <Link href={'/'} className={`${styles.eventsMenuColumn} ${styles.linkSelected}`}>Events</Link>
                      <Link href={'/about'} className={styles.abountMenuColumn}>About</Link>
                  </div>
                  <h3> Apr 25 - 2023 </h3> Solved Leet code problem - <Link href={'https://leetcode.com/problems/clone-graph/'}> Clone Graph </Link>
                  I also enjoy solving alogorthms and datastructure challenges for coding interviews.
                  Heres a list of <Link href={'/dsa'}> most popular challenges .</Link> <br/>

                  <h3> Apr 15 - 2023 </h3> I finished the first part of my machine learning course from coursera.  I now know how to use Python
                  to do a Linear regression prediction on numerical data. Also learnt classifications ( Classification regression )  for non numerical predictions.
                  My certificate can be found <Link href={'https://coursera.org/share/32651e47da1353d2a0fdc5fe23c52cee'}>here</Link>. I still have more to learn here, and doing this as a hobby.

                  <h3> Apr 9 - 2023 </h3> Started learning RUST.

                  <h3> Mar 19 - 2023 </h3> Heard about <Link href={'https://swr.vercel.app/docs/getting-started'}>SWR. (Stale While Revalidate) library  </Link>
                  Using SWR, the data on page will automatically get updated (Refreshed), whenever the data in the backend/db is updated.

                  <h3> Mar 13 - 2023 </h3> Experimenting on an <Link href={'/prisma-with-ssr'}>ORM framework, PRISMA. </Link>
                  The data will be loaded on the Server, for SEO Optimisation. This page also include a Form that is been validated using React-Hook-Forms.
                  click <Link href={'/prisma-with-ssr'}> here  to see CRUD operations using PRISMA, where data is persisted on AWS RDS. </Link>
                  <h3>Mar 01 - 2023 </h3> This site is built using NextJS 13, and is deployed  to AWS Amplify.
                  Experimented on <Link href={'/front-page'}> Material UI components </Link>. Click  <Link href={'/front-page'}>here</Link> to find a initial
                  mock up of a page with a header and logo, and side menu that fits for mobile devices as well.
                       <br/><br/>


              </Container>
      </Box>
  )
}
