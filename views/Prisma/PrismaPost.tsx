import Card from "@mui/material/Card";
import {Button, CardActionArea, CardActions} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export type PrismaPost = {
    title: string,
    content?: string | null
}
const PrismaPost = ( {title, content }:PrismaPost):JSX.Element => {
    return <Card sx={{ maxWidth: 345, marginBottom: 1 }}>
        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { title }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}

export default PrismaPost;