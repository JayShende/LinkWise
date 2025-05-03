"use client";
import { FaLink } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const NavBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = isLoggedIn;
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
        <div
          className={cn(
            "sm:flex hidden gap-x-5  font-semibold",
            poppinsFont.className
          )}
        >
          <Link href="#features">
            <Button variant="secondary">Features</Button>
          </Link>
          <Button variant="secondary">FAQ</Button>
          {user ? (
            <Link href="/dashboard">
              <Button variant="secondary">Dashboard</Button>
            </Link>
          ) : (
            <Link href="/auth/login">
              <Button variant="secondary">Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <RxCross2 size={24} /> : <TiThMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-[100%] left-0 w-full bg-white dark:bg-gray-900 shadow-md border-t mt-3 px-5 py-4 space-y-3">
          <a
            href="#features"
            className="block text-base font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#examples"
            className="block text-base font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Examples
          </a>
          <a
            href="#testimonials"
            className="block text-base font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>

          {/* Add login/dashboard */}
          {user ? (
            <Link href="/dashboard" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full mt-2">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/auth/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full mt-2">
                Login
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
