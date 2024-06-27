'use client'
import React, { useState } from 'react'
import CommentBoxTextarea from "./TextArea";
import {Typography} from './MTComponents'

const Comments = () => {

    const [comment, setComment] = useState("");


    const element = <>
        <CommentBoxTextarea isLoggedIn={true} onCommented={(comment) => setComment(comment)}/>
        {/*
        // @ts-ignore */}
        <Typography variant="lead">
            {comment}
        </Typography>
    </>;
    return element
}
export default  Comments;