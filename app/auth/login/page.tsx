"use client";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  
    function onClick(provider:"github"){
        signIn(provider,{
            callbackUrl:DEFAULT_LOGIN_REDIRECT
        })
    }
    return (
    <div>
      <Button
            size="lg"
            className="w-[50%]"
            variant="outline"
            onClick={()=>onClick("github")}
            >
                <FaGithub className=""/>
            </Button>
    </div>
  )
};

export default LoginPage;
