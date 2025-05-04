import { auth } from "@/auth";
import MainDashboard from "@/components/main-dashboard";
import NavbarDashboard from "@/components/navbar-dashboard";

const DashboardPage = async () => {
  const session = await auth();
  if (!session?.user) {
    return;
  }
  const imageUrl = session?.user.image;
  const userName = session.user.name;
  if (!userName) {
    return;
  }
  if (!imageUrl) {
    return;
  }
  return (
    <>
      <NavbarDashboard imageUrl={imageUrl} userName={userName} />
      <MainDashboard />
    </>
  );
};

export default DashboardPage;
