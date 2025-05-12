import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shortenLink } from "./api";

export function useShortenUrl(){
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:(urlInput:string)=>shortenLink(urlInput),
        onSuccess:()=>{
            console.log("Testing Success");
        },
        onSettled:async(_,error)=>{
            if(error){
                console.log("Some Error in the Muatation Hook");
            }
            await queryClient.invalidateQueries({
                queryKey:["all Links"]
            })
        }
    })
}