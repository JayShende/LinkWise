import { client } from "@/app/lib";
import { auth } from "@/auth";
import {nanoid} from "nanoid";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    const session=await auth();
    if(!session?.user?.id)
    {
        return NextResponse.json({
            message:"Session Error"
        })
    }
    const userId=session?.user?.id;
    const body = await req.json();
    const url=body.url;
    console.log(url);
    const slug=nanoid(5);
    let user;
    try{
        user=await client.links.create({
            data:{
                link:url,
                slug:slug,
                userId:userId
            }
        })
        console.log(user);
    }
    catch{
        return NextResponse.json({
            message:"Some Error"
        });
    }

    return NextResponse.json({
        slug:slug,
        user:user
    })
    // generate an random 5 digit slug and add an corrosponding entry in db
}