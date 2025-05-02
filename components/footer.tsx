import { FaLink } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const interFont=Inter({
    subsets:["latin"],
    weight: ["400", "500", "600", "700"],
})

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center mt-36 mb-10">
      <div className="flex gap-x-2 items-center">
        <FaLink className="text-3xl text-gray-900" />
        <span
          className={cn(
            "text-3xl font-bold text-gray-900",
            poppinsFont.className
          )}
        >
          LinkWise
        </span>
      </div>
      <div className="gap-x-6 flex">
        <Button variant="link" className="cursor-pointer">
          Privacy
        </Button>
        <Button variant="link" className="cursor-pointer">Contact</Button>
      </div>
      <div className="flex gap-x-2 text-2xl text-gray-900">
        <FaXTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
      <span className={cn("text-muted-foreground font-medium",interFont.className)}>
        © 2025 LinkWise, All rights reserved
      </span>
    </div>
  );
};

export default Footer;
