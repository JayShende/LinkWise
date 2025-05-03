
import Image from "next/image";

interface userProfileProps {
  url: string;
  userName: string;
}

import * as React from "react";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { IoHome } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";


export function UserProfile({ url, userName }: userProfileProps) {


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={url}
          alt="profile-pic"
          width={45}
          height={45}
          className="rounded-full ring-2 ring-gray-600 sm:w-11 w-8 sm:h-11 h-8 "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="sm:w-45 w-30 sm:mr-5 mr-2 p-2 text-center ">
        <DropdownMenuLabel>Hello 👋 {userName} </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="px-0 ">
          <DropdownMenuItem className="flex items-center  gap-x-2">
            <IoHome className="text-muted-foreground"/> Home
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <form action={async()=>{
                "use server";
                await signOut();
            }}>
       <DropdownMenuItem className="flex items-center gap-x-2">
        <TbLogout2  className="text-red-600"/> Logout
          </DropdownMenuItem>
       </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
