import { FaLink } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const NavBar = () => {
  return (
    <div className="w-full h-auto  py-5">
      <div className="sm:mx-[60px] mx-[20px] flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <FaLink className="sm:text-3xl text-xl text-gray-900" />
          <span
            className={cn(
              "sm:text-3xl text-xl font-bold text-gray-900",
              poppinsFont.className
            )}
          >
            LinkWise
          </span>
        </div>
        <div className={cn("sm:flex hidden gap-x-5 text-red-500 font-semibold",poppinsFont.className)}>
            <Button variant="secondary">Features</Button>
            <Button variant="secondary">FAQ</Button>
            <Button variant="secondary">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
