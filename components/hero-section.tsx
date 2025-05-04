"use client";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { LiaUnlinkSolid } from "react-icons/lia";
import UrlInput from "./url-input";
import { useRouter } from "next/navigation";
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });

const interFont=Inter({
    subsets:["latin"],
    weight: ["400", "500", "600", "700"],
})


const HeroSection = () => {

  const router=useRouter();
  function ClickMe()
  {
    router.push("/dashboard")
  }
  return (
    <div className="my-8 flex flex-col justify-center items-center sm:gap-y-8 gap-y-5">
        <div className="flex justify-center items-center gap-x-2 text-gray-900 text-wrap">
        <span className={cn("sm:text-6xl text-3xl font-bold ",poppinsFont.className)}>Simplify Your Links</span>
        <LiaUnlinkSolid className="sm:text-5xl  text-2xl"/>
        </div>
        <p className={cn("text-muted-foreground sm:text-lg text-sm font-medium sm:mx-0 mx-2",interFont.className)}>Shorten Long URL and Share Them with Ease.</p>
        <div>
        <UrlInput
        onCLickFun={ClickMe}
        />
        </div>
    </div>
  )
};

export default HeroSection;
