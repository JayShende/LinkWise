"use server";
import { NextResponse } from "next/server";
import { client } from "@/app/lib";
import { auth } from "@/auth";

export async function POST() {

    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({
        message: "Session Error",
      });
    }

    const userId=session?.user?.id;
    console.log(userId);

    // fetching data 
    let datafetched;
    try{
        datafetched=await client.links.findMany({
            where:{
                userId:userId
            },
            orderBy:{
                id:"desc"
            }
        })
    }catch{
        return NextResponse.json({
            message:"Error in making an DB Call"
        })
    }
    
    // console.log(datafetched);
    const filteredData = datafetched.map(({ id, link, slug }) => ({
        id,
        link,
        slug,
    }));
    return NextResponse.json(filteredData);
        
}
