import FeaturesCard from "./ui/features-card";
import { LiaUnlinkSolid } from "react-icons/lia";
import { SiGoogleanalytics } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });

const FeaturesSection = () => {
  return (
    <div className=" flex flex-col sm:my-28 my-20"
    id="#features"
    >
        <span className={cn("text-center text-3xl text-gray-900 sm:mb-4 mb-10 font-bold",poppinsFont.className)}>
            Features
        </span>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-x-8">
      <FeaturesCard
      icon={LiaUnlinkSolid}
      heading="Easy To Use"
      label="Shorten Your Links in Just one Click"
      />
      <FeaturesCard
      icon={SiGoogleanalytics}
      heading="Detailed Analytics"
      label="Track Links and user Engagement"
      />
      <FeaturesCard
      icon={MdSecurity}
      heading="Customizable Links"
      label="Create Branded links that build Trust"
      />
      </div>
    </div>
  )
};

export default FeaturesSection;
