'use client'
import React, { useState } from 'react'
import CommentBoxTextarea from "./TextArea";
import {Typography} from './MTComponents'
import Link from "next/link"
const Comments = () => {

    const [comment, setComment] = useState("");


    const element = <>
        <CommentBoxTextarea isLoggedIn={true} onCommented={(comment) => setComment(comment)}/>
        {/*
            // @ts-ignore */}
        <Typography variant="lead">
            {comment}
        </Typography>
        <br/>
        <Link href={"/api/auth/signout"}>Log out</Link>
    </>;
    return element
}
export default  Comments;