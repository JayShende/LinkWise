
import SessionInfo from "@/lib/session-info";
import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";
import NavBar from "./navbar";

const LandingPage = async() => {
  const isLoggedIn = await SessionInfo();
  return (
    <>
    <NavBar
    isLoggedIn={isLoggedIn}
    />
    <HeroSection/>
    <FeaturesSection/>
    </>
  )
};

export default LandingPage;
