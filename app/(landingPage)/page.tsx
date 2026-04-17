import { AboutSection } from "./components/About/About";
import { HeroSection } from "./components/Hero/Hero";
import { ProjectsSection } from "./components/Projects/Projects";
import { ServicesSection } from "./components/Services/Services";

const landingPage = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
    </div>
  );
};

export default landingPage;
