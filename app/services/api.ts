
import axios from "axios"

interface Link {
  id: number;
  link: string;
  slug: string;
}

export const getallLinks=async():Promise<Link[]>=>{
    const response=await axios<Link[]>({
        method:"post",
        url:"/api/v1/getUrl"
    })
    console.log(response.data);
    return response.data;
}

export const shortenLink=async(urlInput:string)=>{
    const response=await axios({
        method:"post",
        url:"/api/v1/shortenUrl",
        data:{
            url:urlInput
        }
    })
    return response.data
}