
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";
import RainbowRainBackground from "@/components/RainbowRainBackground";

const Index = () => {
  useEffect(() => {
    document.title = "Anish Reddy Gurujala | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <RainbowRainBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection delay={0.5}>
          <ExperienceSection />
        </AnimatedSection>
        <AnimatedSection delay={0.6}>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
