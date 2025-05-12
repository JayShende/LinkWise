"use client";

import { useState } from "react";
import UrlInput from "./url-input";

import AllLinksComponent2 from "./all-links-2";
import { useShortenUrl } from "@/app/services/mutations";

const MainDashboard = () => {
  const [inputLink, setInputLink] = useState("");

  const shortenUrlMutation = useShortenUrl();

  async function backendCall() {
    shortenUrlMutation.mutate(inputLink);
  }
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <UrlInput
        setInpuLink={setInputLink}
        onCLickFun={backendCall}
        isDisabled={shortenUrlMutation.isPending || inputLink.trim() === ""}
      />
      <AllLinksComponent2 />
    </div>
  );
};

export default MainDashboard;
