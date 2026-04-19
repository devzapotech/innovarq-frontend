import { AboutSection } from "./components/About/About";
import { HeroSection } from "./components/Hero/Hero";
import { ProjectsSection } from "./components/Projects/Projects";
import { ServicesSection } from "./components/Services/Services";
import { TeamSection } from "./components/Team/Team";
import { TestimonialsSection } from "./components/Testimonials/Testimonials";

const landingPage = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
    </div>
  );
};

export default landingPage;
