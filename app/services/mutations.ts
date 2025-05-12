import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUrlCard, shortenLink } from "./api";

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

export function useDeleteUrl(){
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:(id:number)=>deleteUrlCard(id),
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