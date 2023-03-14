import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import {Button, Container} from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Main from "../../layouts/Main";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { prisma } from 'server/db/prismaClient'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Post } from "@prisma/client";
import PrismaListPostsView from "../../views/Prisma/PrismaListPostsView";
import { useRouter } from 'next/router'
type PrismaProps = InferGetServerSidePropsType<typeof getServerSideProps>;
export default function Prisma({posts}: PrismaProps) {

    const router = useRouter();

    const saveToPrismaDB = async ():Promise<void> => {
        const response = await fetch('/api/posts',
            {method: 'POST',
                 body: JSON.stringify({ title: 'test', content: 'test'})
                 });
        const postObj = await response.json();
        alert ('will perform a silent page refetch with Next Router, to refetch the saved data');
        router.push('/prisma');
    }
    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Main bgcolor={'background.paper'} hideMenu>
    <Container>
        <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Typography
                        variant={'subtitle1'}
                        sx={{ marginBottom: 0 }}
                        fontWeight={700}
                    >
                        Title
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                    label="Title"
                    variant="outlined"
                    name={'title'}
                    fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={12}>
                <Typography
                    variant={'subtitle1'}
                    sx={{ marginBottom: 0 }}
                    fontWeight={700}
                >
                    Content
                </Typography>
                </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    label="Content"
                    variant="outlined"
                    name={'bio'}
                    multiline
                    rows={5}
                    fullWidth
                />
                </Grid>
        </Grid>
        <Grid container spacing={1} marginTop={1} marginBottom={1}>
        <Grid item xs={12} sm={12} >
            <Button variant="contained" startIcon={<AddTaskIcon />} onClick={saveToPrismaDB}>
                Create Post
            </Button>
            <Typography>On Click calls Next API and persists to AWS RDS via Prisma Client </Typography>
        </Grid>
        </Grid>

    </Container>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12} >
                        <h2> List of Posts</h2>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                        <PrismaListPostsView data={posts} />
                        </Grid>
                    </Grid>
                </Container>

            </Main>


        </Box>
);

}


type PostPageProps = {
    posts: Post[]
}

export const getServerSideProps:GetServerSideProps<PostPageProps> = async () => {
    const posts:Post[] = await prisma.post.findMany();
    const postPageProps: PostPageProps = {
        posts: JSON.parse(JSON.stringify(posts))
    }
    return { props: postPageProps }
}