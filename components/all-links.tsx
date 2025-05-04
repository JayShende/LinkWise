import LinkPreviewComponent from "./ui/link-preview";
import { useFetchLinks } from "@/hooks/useFetchLinks";
import LoadingDots from "./ui/loader";

const AllLinksComponent = () => {
  const { links,isLoading } = useFetchLinks();
  // console.log(links);
  // console.log(Array.isArray(links) === true);

  if(isLoading){
    return(
      <LoadingDots/>
    )
  }

  return (
    <div className="sm:w-[500px] w-[300px] mt-5 p-5 h-auto overflow-y-scroll">
      {links.map((x) => (
        <LinkPreviewComponent
          slug={x.slug}
          link={x.link}
          key={x.id || x.slug} // Use a unique key!
        />
      ))}
    </div>
  );
};

export default AllLinksComponent;
