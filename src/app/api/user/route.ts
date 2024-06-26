import  { NextResponse, NextRequest } from 'next/server'
import { options } from "../auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

type ResponseData = {
    message: string
}

export async function GET(){

    const session = await getServerSession(options)

    if (session) {
        console.log("logged in", session);
    }else{
        console.log("not logged in");
    }

        return NextResponse.json({
            message: "world"
        });
}

export async function POST(request: Request){
    console.log(request.body);
    const data  = await request.json();
    console.log('byorn data', data);
    return NextResponse.json({
        message: "world"
    });
}