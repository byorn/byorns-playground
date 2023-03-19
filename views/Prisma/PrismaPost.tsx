import Card from "@mui/material/Card";
import {Button, CardActionArea, CardActions} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export type PrismaPost = {
    title: string,
    content?: string | null,
    updatedAt: Date
}
const PrismaPost = ( {title, content, updatedAt }:PrismaPost):JSX.Element => {
    return <Card sx={{ maxWidth: 345, marginBottom: 1 }}>
        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    { title }
                </Typography>
                <Typography paddingTop={3} variant="body2" color="text.secondary">
                    {content}
                </Typography>
                <Typography paddingTop={7} sx={{ fontSize: 9 }} color="text.secondary" gutterBottom>
                    <>Updated At: { updatedAt }</>
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}

export default PrismaPost;