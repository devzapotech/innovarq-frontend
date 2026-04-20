import { AboutSection } from "./components/About/About";
import { ContactSection } from "./components/Contact/Contact";
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
      <ContactSection />
    </div>
  );
};

export default landingPage;
