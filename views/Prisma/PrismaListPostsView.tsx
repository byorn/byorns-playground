import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Post } from "@prisma/client";
import PrismaPost from "./PrismaPost";

type PrismaListPostsViewProp = {
    data: Post[]
}



const PrismaListPostsView = (props: PrismaListPostsViewProp):JSX.Element => {

    return (
        <>
            { props.data.map((post, index)=> <PrismaPost key={index} title={post.title} content={post.content}/>) }
        </>
    )
}
export default  PrismaListPostsView;