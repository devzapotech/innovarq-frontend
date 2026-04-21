import { AboutSection } from "./components/About/About";
import { ContactSection } from "./components/Contact/Contact";
import { HeroSection } from "./components/Hero/Hero";
import { ProcessSection } from "./components/Process/Process";
import { ProjectsSection } from "./components/Projects/Projects";
import { ServicesSection } from "./components/Services/Services";
import { TeamSection } from "./components/Team/Team";
import { TestimonialsSection } from "./components/Testimonials/Testimonials";
import { ValueSection } from "./components/Value/Value";

const landingPage = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <ValueSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default landingPage;
