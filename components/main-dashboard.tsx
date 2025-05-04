"use client";
import axios from "axios";
import { useState, useTransition } from "react";
import UrlInput from "./url-input";
import AllLinksComponent from "./all-links";
import { LinkData, useFetchLinks } from "@/hooks/useFetchLinks";

const MainDashboard = () => {
  const [inputLink, setInputLink] = useState("");
  const [isPending, startTransition] = useTransition();
  const isDisabled = isPending || inputLink.trim() === "";
  const {links,setLinks}=useFetchLinks();
  async function backendCall() {
    startTransition(async () => {
      console.log("links");
      const res:LinkData = await shortenUrl(inputLink);
      setLinks(prevLinks => [...prevLinks, res]);

      console.log(links);
    });
  }
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <UrlInput
        setInpuLink={setInputLink}
        onCLickFun={backendCall}
        isDisabled={isDisabled}
      />
      <AllLinksComponent/>
    </div>
  );
};

export default MainDashboard;

async function shortenUrl(urlInput: string): Promise<LinkData> {
  try {
    const response = await axios.post("/api/v1/shortenUrl", {
      url: urlInput,
    });

    const data = response.data as Partial<LinkData>;

    if (!data.id || !data.link || !data.slug) {
      throw new Error("Invalid response from API");
    }

    return {
      id: data.id,
      link: data.link,
      slug: data.slug,
    };
  } catch (e) {
    console.error("Error shortening URL:", e);
    throw new Error("Failed to shorten URL"); // ❗ Throw instead of returning
  }
}

