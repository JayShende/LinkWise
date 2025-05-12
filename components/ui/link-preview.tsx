"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDeleteUrl } from "@/app/services/mutations";
interface LinkPreviewComponentProps {
  link: string;
  slug: string;
  id: number;
  viewCount?: number;
}

const LinkPreviewComponent = ({
  link,
  slug,
  id,
}: LinkPreviewComponentProps) => {
  const [click, setClicked] = useState(false);
  const slugUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`;
  const deleteUrlMuatation = useDeleteUrl();
  function copiedToClipboard() {
    handleCopy();
    toast.success("LinkWise URL Copied");
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  }

  async function deleteUrl() {
    await deleteUrlMuatation.mutateAsync(id);
    toast.error("Link Wise URL Deleted");
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
          <div className="flex gap-x-3">
            {click ? (
              <MdOutlineDone />
            ) : (
              <MdOutlineContentCopy
                onClick={copiedToClipboard}
                className="cursor-pointer"
              />
            )}
            <a href={link} target="_blank">
              <MdOutlineOpenInNew />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <CardDescription className=" sm:block hidden overflow-hidden text-ellipsis">
            {link.length > 40 ? `${link.slice(0, 40)}...` : link}
          </CardDescription>
          <CardDescription className=" sm:hidden block overflow-hidden text-ellipsis">
            {link.length > 20 ? `${link.slice(0, 20)}...` : link}
          </CardDescription>
          <MdDelete
            className="text-red-500 cursor-pointer"
            onClick={deleteUrl}
          />
        </div>
      </CardHeader>
    </Card>
  );
};

export default LinkPreviewComponent;
