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

                  <h3> Mar 13 - 2023 </h3> Experimenting on an <Link href={'/prisma'}>ORM framework, PRISMA. </Link>
                  click <Link href={'/prisma'}> here </Link> for a demo of persisting data via PRISMA apis to a AWS RDS remote db.
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
