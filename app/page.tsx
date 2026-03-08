import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RegulatorySection } from "@/components/regulatory-section"
import { SolutionSection } from "@/components/solution-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsappFab } from "@/components/whatsapp-fab"
import { CookieConsent } from "@/components/cookie-consent"

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased text-foreground bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <RegulatorySection />
        <SolutionSection />
        <CtaSection />
      </main>
      <WhatsappFab />
      <CookieConsent />
      <Footer />
    </div>
  )
}
