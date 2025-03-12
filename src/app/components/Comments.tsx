'use client'
import React, { useState } from 'react'
import CommentBoxTextarea from "./TextArea";
//import {Typography} from './MTComponents'
import Link from "next/link"
const Comments = () => {

    const [comment, setComment] = useState("");


    return( <>
        <CommentBoxTextarea isLoggedIn={true} onCommented={(comment) => setComment(comment)}/>
            {comment}

        <br/>
        <Link href={"/api/auth/signout"}>Log out</Link>
    </>
    )

}
export default  Comments;