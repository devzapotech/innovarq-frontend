import { AboutSection } from "./components/About/About";
import { HeroSection } from "./components/Hero/Hero";

const landingPage = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default landingPage;
