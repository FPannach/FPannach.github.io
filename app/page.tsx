import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TeachingSection } from "@/components/teaching-section"
import { ResearchSection } from "@/components/research-section"
import { PublicationsSection } from "@/components/publications-section"
import { CVSection } from "@/components/cv-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeachingSection />
      <ResearchSection />
      <PublicationsSection />
      <CVSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
