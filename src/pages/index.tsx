import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Image from "next/image";





export default function Home() {

  return (
      <Box sx={{ overflowX: 'hidden' }}>

              <Container>
                  <Image src={"/byorns-playground-logo.png"} width={500} height={80} alt={'myimage'}/>
                  <p> <h3>Mar 01 - 2023 </h3> I have been keen on researching on NextJS 13, and deploying it to AWS Amplify.
                        I wanted to start by building a clone of of Airtasker.com. <br/>
                       <Link href={'/front-page'}>Click here</Link> to find a WIP of that page.</p>
              </Container>
      </Box>
  )
}
