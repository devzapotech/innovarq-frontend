import { AboutSection } from "./components/About/About";
import { HeroSection } from "./components/Hero/Hero";
import { ProjectsSection } from "./components/Projects/Projects";
import { ServicesSection } from "./components/Services/Services";
import { TestimonialsSection } from "./components/Testimonials/Testimonials";

const landingPage = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default landingPage;
