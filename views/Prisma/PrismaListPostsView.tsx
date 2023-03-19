import * as React from 'react';
import Grid from "@mui/material/Grid";
import { Post } from "@prisma/client";
import PrismaPost from "./PrismaPost";

type PrismaListPostsViewProp = {
    data: Post[]
}



const PrismaListPostsView = (props: PrismaListPostsViewProp):JSX.Element => {

    return (
        <Grid container spacing={4}>
            { props.data.map((post, index)=> <PrismaPost key={index} title={post.title} content={post.content} updatedAt={post.updatedAt}/>) }
        </Grid>
    )
}
export default  PrismaListPostsView;