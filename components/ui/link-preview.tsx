"use client";
import { useState } from "react";
import { toast } from "sonner"
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";
interface LinkPreviewComponentProps {
  link: string;
  slug: string;
  viewCount?: number;
}

const LinkPreviewComponent = ({
  link,
  slug,
}: LinkPreviewComponentProps) => {

  const[click,setClicked]=useState(false);
  const slugUrl=`${process.env.NEXT_PUBLIC_BASE_URL}${slug}`;

  function copiedToClipboard(){
    handleCopy();
    console.log(slugUrl);
    toast("LinkWise URL Copied");
    setClicked(true);
    setTimeout(()=>{
      setClicked(false)
    },1000)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(slugUrl);
      
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
        <CardTitle>{slug}</CardTitle>
        {click ?<MdOutlineDone /> : <MdOutlineContentCopy onClick={copiedToClipboard} className="cursor-pointer"/>}
        </div>
        <div className="flex items-center justify-between mt-2">
        <CardDescription className=" sm:block hidden overflow-hidden text-ellipsis">
          {link.length > 40 ? `${link.slice(0, 40)}...` : link}
        </CardDescription>
        <CardDescription className=" sm:hidden block overflow-hidden text-ellipsis">
          {link.length > 20 ? `${link.slice(0, 20)}...` : link}
        </CardDescription>
        <a href={link} target="_blank">
        <MdOutlineOpenInNew />
        </a>
        </div>
      </CardHeader>
    </Card>
  );
};

export default LinkPreviewComponent;
