import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectCatalog from "@/components/ProjectCatalog";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechSkills from "@/components/TechSkills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050811] text-gray-100 flex flex-col relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top telemetry navigation bar */}
      <Navbar />

      {/* Main page content sections */}
      <main className="flex-1">
        {/* Hero Section / Terminal Init */}
        <Hero />

        {/* Featured Case Studies (Tier 1 Showcase) */}
        <FeaturedProjects />

        {/* All Projects Inventory (11 Projects Filterable Directory) */}
        <ProjectCatalog />

        {/* Experience Timeline, Certifications & Grants */}
        <ExperienceTimeline />

        {/* Technical Skills & Protocol Matrix */}
        <TechSkills />

        {/* Contact & Transmission Section */}
        <ContactSection />
      </main>

      {/* Cyber Telemetry Footer */}
      <Footer />
    </div>
  );
}
