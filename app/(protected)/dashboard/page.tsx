import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const DashboardPage = async() => {
    const session=await auth();
    if(!session?.user)
    {
        return;
    }
    const imageUrl=session?.user.image;
    return(
        <div>
            Settings Page 
            <br />
            <br />
            {JSON.stringify(session)};
            <br />
            <img src={imageUrl} alt="" />
            <form action={async()=>{
                "use server";
                await signOut();
            }}>
                <Button type="submit" variant="destructive">
                    Sign Out
                </Button>
            </form>
        </div>
    )
};

export default DashboardPage;
