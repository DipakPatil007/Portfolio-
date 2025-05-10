import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectShowcase from '@/components/sections/project-showcase';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectShowcase />
      <ContactSection />
    </>
  );
}
