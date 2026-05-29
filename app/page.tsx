import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProblemaSection } from "@/components/problema-section"
import { CausasSection } from "@/components/causas-section"
import { ImpactoSection } from "@/components/impacto-section"
import { AccionesSection } from "@/components/acciones-section"
import { RecursosSection } from "@/components/recursos-section"
import { ContactoSection } from "@/components/contacto-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-ink">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemaSection />
        <CausasSection />
        <ImpactoSection />
        <AccionesSection />
        <RecursosSection />
        <ContactoSection />
      </main>
      <SiteFooter />
    </div>
  )
}
