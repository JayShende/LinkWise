
import { auth } from "@/auth";
import NavbarDashboard from "@/components/navbar-dashboard";



const DashboardPage = async() => {
    const session=await auth();
    if(!session?.user)
    {
        return;
    }
    const imageUrl=session?.user.image;
    const userName=session.user.name;
    if(!userName)
    {
        return;
    }
    if(!imageUrl )
    {
        return;
    }
    return(
       <>
       <NavbarDashboard
       imageUrl={imageUrl}
       userName={userName}
       />

       </>
    )
};

export default DashboardPage;
