import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Image from "next/image";
import styles from 'styles/Home.module.css'
export default function About() {

  return (
      <Box sx={{ overflowX: 'hidden' }}>
              <Container>
                  <div className={styles.flexContainer}>
                  <Image src={"/byorns-playground-logo.png"}  width={300} height={100}
                       alt={'myimage'} className={styles.largeColumn}/>
                      <Link href={'/'} className={`${styles.eventsMenuColumn} `}>Events</Link>
                      <Link href={'/about'} className={`${styles.abountMenuColumn} ${styles.linkSelected}`}>About</Link>
                  </div>
                  <br/><br/>

                  <h4>I started with computers in 1985 on an 8086 IBM XT.  &nbsp;&nbsp; My first programming languages were Basic, and DBASE 3+. <br/><br/>
                      Now, my main programming languages are Javascript/Typescript, Java and React.
                      I also have experience deploying to AWS cloud and to Kubernetes clusters.
                      Throughout my career I have played many roles. Front End, API Back End, CI/CD Devops and also Technical leading and mentoring.
                      I am currently upskilling my self with Python for ML, and RUST.
                  </h4>

                  <h4>
                      To see my professional career please click my
                       <Link href={'https://au.linkedin.com/in/byorndesilva'}> LinkedIn page </Link> <br/>

                      <br/>
                      My Hobby Projects, including this side project, can be found in my
                       <Link href={'https://github.com/byorn'}> Github page: </Link>
                  </h4>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


              </Container>
      </Box>
  )
}
