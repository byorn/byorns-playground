'use client'
import React from "react";


type IProps = {
    isLoggedIn: boolean
    onCommented?: (comment: string)=>void
}

export default  function CommentBoxTextarea({isLoggedIn, onCommented}: IProps) {

    return (
        <div className="relative w-[32rem]">

            <textarea className="textarea"  placeholder="Your Comment" rows={8} />
            <div className="flex w-full justify-between py-1.5">

                <button className="btn btn-primary " color="blue-gray">
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
                </button>
                <div className="flex gap-2">

                    <button  color="red"  className="rounded-md">
                        Cancel
                    </button>

                    <button disabled={!isLoggedIn}  className="rounded-md" onClick={()=>onCommented('Thank you! This is WIP and I do not receive messages yet!')}>
                        Post Comment
                    </button>

                    {!isLoggedIn && (

                     <button  className="rounded-md" onClick={() => location.href = '/api/auth/signin'}>
                        Sign In to Post Comment
                    </button>)}
                </div>
            </div>
        </div>
    );
}