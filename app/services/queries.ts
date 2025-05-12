import { useQuery } from "@tanstack/react-query";
import { getallLinks } from "./api";


export function useGetLinks(){
    return useQuery({
        queryKey:["all Links"],
        queryFn:getallLinks,
         refetchOnWindowFocus: true
    })
}