
import { FaLink } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { UserProfile } from "./ui/user-profile";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface NavbarDashboardProps{
    imageUrl:string
    userName:string
}

const NavbarDashboard = ({
    imageUrl,
    userName
}:NavbarDashboardProps) => {

  return (
    <div className="w-full py-5 relative z-50">
      <div className="sm:mx-[60px] mx-[20px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-x-2 items-center">
          <FaLink className="sm:text-3xl text-xl text-gray-900 dark:text-white" />
          <Link href="/">
            <span
              className={cn(
                "sm:text-3xl text-xl font-bold text-gray-900 dark:text-white",
                poppinsFont.className
              )}
            >
              LinkWise
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <UserProfile
        url={imageUrl}
        userName={userName}
        />


        {/* Mobile Toggle */}
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <RxCross2 size={24} /> : <TiThMenu size={24} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
     
    </div>
  );
};

export default NavbarDashboard;
