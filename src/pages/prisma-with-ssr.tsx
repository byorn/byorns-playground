import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import {Button, CircularProgress, Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Main from "../../layouts/Main";
import { prisma } from 'server/db/prismaClient'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Post } from "@prisma/client";
import PrismaListPostsView from "../../views/Prisma/PrismaListPostsView";
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from "react-hook-form";
type PrismaProps = InferGetServerSidePropsType<typeof getServerSideProps>;
import useSWRMutation from 'swr/mutation'

type PostFormInputs = {
    title: string,
    content: string,
};


export default function PrismaWithSsr({posts}: PrismaProps) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<PostFormInputs>();
    const router = useRouter();
    const [ loading, setLoading ] = useState<boolean>(false);

    const onSubmit: SubmitHandler<PostFormInputs> = (data) => {
        setLoading ( true );
        saveToPrismaDB(data);
    }

    const saveToPrismaDB = async (postData: PostFormInputs):Promise<void> => {
        const response = await fetch('/api/posts',
            {method: 'POST',
                 body: JSON.stringify({ title: postData.title, content: postData.content})
                 });
        const postObj = await response.json();
        if ( postObj ) {
            setLoading(false);
            router.push('/prisma-with-ssr');
        }
    }


    return <Box sx={{ overflowX: 'hidden' }}>
        <Main bgcolor={'background.paper'} hideMenu>
<Container>
    <form onSubmit={handleSubmit(onSubmit)}>
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
                fullWidth
                {...register("title", { required: true, minLength: 10, maxLength: 50 })}
                error={errors.title? true : false }
                helperText={errors.title ? 'Title is required and must be at least 10 characters and not more than 50 characters!' : ''}
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
                multiline
                rows={5}
                fullWidth
                {...register("content", { required: true, minLength: 20, maxLength: 150 , pattern: /^[A-Za-z]+$/i})}
                error={errors.content? true : false }
                helperText={errors.content ? errors.content.type === 'pattern' ? 'Do not enter numbers mate' : 'Content is required and must be at least 20 characters and not more than 150 characters!' : ''}

            />
            </Grid>
    </Grid>
    <Grid container spacing={1} marginTop={1} marginBottom={1}>
    <Grid item xs={12} sm={12} >
        { loading &&  (<CircularProgress /> ) }
        { !loading && (
        <Button    sx={{ height: 54 }}
                   variant="contained"
                   color="primary"
                   size="medium"
                   fullWidth
                   type="submit">
            Create Note
        </Button>) }
    </Grid>
    </Grid>
    </form>

</Container>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} >
                    <h2> List of Notes</h2>
                    </Grid>
                    <Grid item xs={12} sm={12} >
                    <PrismaListPostsView data={posts} />
                    </Grid>
                </Grid>
            </Container>

        </Main>


    </Box>;

}


type PostPageProps = {
    posts: Post[]
}

export const getServerSideProps:GetServerSideProps<PostPageProps> = async () => {
    const posts:Post[] = await prisma.post.findMany({
        orderBy: [
            {
                updatedAt: 'desc',
            },
        ],
    });
    const postPageProps: PostPageProps = {
        posts: JSON.parse(JSON.stringify(posts))
    }
    return { props: postPageProps }
}