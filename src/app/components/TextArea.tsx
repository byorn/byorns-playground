'use client'
import React from "react";
import { Textarea, Button, IconButton } from './MTComponents'

type IProps = {
    isLoggedIn: boolean
    onCommented?: (comment: string)=>void
}

export default  function CommentBoxTextarea({isLoggedIn, onCommented}: IProps) {
    // @ts-ignore
    return (
        <div className="relative w-[32rem]">
            {/*
            // @ts-ignore */}
            <Textarea variant="static" placeholder="Your Comment" rows={8} />
            <div className="flex w-full justify-between py-1.5">
                {/*
                // @ts-ignore */}
                <IconButton variant="text" color="blue-gray" size="sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                    </svg>
                </IconButton>
                <div className="flex gap-2">
                    {/*
                    // @ts-ignore */}
                    <Button size="sm" color="red" variant="text" className="rounded-md">
                        Cancel
                    </Button>
                    {/*
                    // @ts-ignore */}
                    <Button disabled={!isLoggedIn} size="sm" className="rounded-md" onClick={()=>onCommented('Thank you! This is WIP and I do not receive messages yet!')}>
                        Post Comment
                    </Button>

                    {!isLoggedIn && (
                     <>{/*
                     // @ts-ignore */}
                     <Button size="sm" className="rounded-md" onClick={() => location.href = '/api/auth/signin'}>
                        Sign In to Post Comment
                    </Button></>)}
                </div>
            </div>
        </div>
    );
}