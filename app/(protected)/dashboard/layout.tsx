import { Toaster } from "@/components/ui/sonner"
import { ReactNode } from "react";

interface DashBoardLayoutProps{
    children:ReactNode
}

const DashBoardLayout = ({children}:DashBoardLayoutProps) => {
  return (
    <div>
    {children}
    <Toaster />
    </div>
  )
};

export default DashBoardLayout;
