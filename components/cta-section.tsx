import { MessageCircle } from "lucide-react"
import { getWhatsappLink } from "@/lib/whatsapp"

export function CtaSection() {
  return (
    <section className="bg-brand-gray/20 py-12 sm:py-20 md:py-32 text-center">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-brand-dark mb-4 sm:mb-6 font-[family-name:var(--font-space-grotesk)] text-balance">
          Conformidade não se declara. Se comprova.
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed">
          Agende seu Diagnóstico Estratégico agora mesmo e blinde sua empresa.
        </p>
        <a
          href={getWhatsappLink(
            "Olá, gostaria de agendar um Diagnóstico Estratégico."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto bg-brand-red hover:bg-brand-red-light text-primary-foreground font-bold py-3.5 sm:py-4 md:py-5 px-6 sm:px-10 md:px-14 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl shadow-xl transition-all transform hover:scale-105 active:scale-95"
        >
          Falar com nossa equipe
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </section>
  )
}
