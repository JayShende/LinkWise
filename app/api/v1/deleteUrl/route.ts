import { client } from "@/app/lib";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({
      message: "Session Error",
    });
  }

  const sessionUserId = session?.user?.id;
  const body = await req.json();
  const urlId = body.id;
  //    Verify that the url id belong to the user only
  const linkUser = await client.links.findFirst({
    where: {
      id: urlId,
    },
  });

  if (linkUser?.userId != sessionUserId) {
    return new NextResponse("Inavlid Req", { status: 403 });
  }

//    Now Proceed with The Deletion of the URL Entry

  try{
    const response=await client.links.delete({
        where:{
            id:urlId,
            userId:sessionUserId
        }
    })
    return NextResponse.json({
        message:"Deleteion Success",
        res:response
    })
  }
  catch(e){
    return NextResponse.json({
        message:"Error",
        error:e
    })
  }

}
