
import { client } from "@/app/lib";
import { redirect } from "next/navigation";

interface SlugPageInterface{
    params:{
        slug:string
    }
}
const SlugPage = async({
    params
}:SlugPageInterface) => {
    
    
    const {slug}=await params
    const link=await redirectFun(slug);
    if(link==false){
        return(
            <div>
                This Link Dont Exist
            </div>
        )
    }
    return (
    <div>
      Inside the Slug Page
      <br />
      {slug}
      <br />
      {link}
    </div>
  )
};

async function redirectFun(slug:string){
    let  linksData;
    try{
        linksData=await client.links.findFirst({
            where:{
                slug:slug
            }
        })
    }catch{
        console.log("Some Error while Making an DB Call");
    }

    const link=linksData?.link;
    if(link==undefined){
        return false;
    }
    redirect(link);
}

export default SlugPage;
