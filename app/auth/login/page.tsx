"use client";
import LoginComponent from "@/components/login-compoent";
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
    <div className="sm:h-[50vh] h-[45vh] flex justify-center items-center">
      <LoginComponent/>
    </div>
  )
};

export default LoginPage;
