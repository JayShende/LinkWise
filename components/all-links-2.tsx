"use client";

import { LinkData } from "@/hooks/useFetchLinks";
import LinkPreviewComponent from "./ui/link-preview";
import LoadingDots from "./ui/loader";
import { useGetLinks } from "@/app/services/queries";

const AllLinksComponent2 = () => {
  const getLinks = useGetLinks();
  if (getLinks.isPending) {
    return <LoadingDots />;
  }
  if (getLinks.isError) {
    return <span>Some Error in Fetching Data</span>;
  }

  return (
    <div className="sm:w-[500px] w-[350px] mt-5 p-5 h-auto overflow-y-scroll">
      {getLinks.data.map((x: LinkData) => (
        <LinkPreviewComponent
          slug={x.slug}
          link={x.link}
          id={x.id}
          key={x.id || x.slug} // Use a unique key!
        />
      ))}

    
    </div>
  );
};

export default AllLinksComponent2;
