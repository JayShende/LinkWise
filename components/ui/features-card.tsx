import { IconType } from "react-icons";

interface FeaturesCardInterface{
    icon:IconType,
    heading:string,
    label:string
}

import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });

  const interFont=Inter({
      subsets:["latin"],
      weight: ["400", "500", "600", "700"],
  })
const FeaturesCard = ({
  icon:Icon,
  heading,
  label
}:FeaturesCardInterface) => {
  return (
    <div className="w-[250px] h-[300px] flex flex-col items-center shadow-xl rounded-md px-4">
      <Icon
      className="text-3xl  my-16"
      />
      <div className={cn("flex text-xl font-semibold",poppinsFont.className)}>
        {heading}
      </div>
      <div className={cn("text-muted-foreground text-center my-2",interFont.className)}>
        {label}
      </div>

    </div>
  )
};

export default FeaturesCard;
