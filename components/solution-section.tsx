import { BarChart3, Cpu, Medal } from "lucide-react"
import { SolutionItem } from "./solution-item"
import Image from "next/image"

export function SolutionSection() {
  return (
    <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          alt="Tecnologia e dados"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-solution-overlay" />
        <div className="absolute inset-0 bg-tech-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold text-foreground uppercase font-[family-name:var(--font-space-grotesk)] mb-8 sm:mb-12 md:mb-16 text-balance">
          Nossa Solução Comprovada
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 mb-8 sm:mb-12 md:mb-16">
          <SolutionItem
            icon={<BarChart3 className="w-5 h-5 sm:w-7 sm:h-7" />}
            title="Arquitetura de Blindagem Quantificada"
            text="Metodologia exclusiva para estruturar, mensurar e documentar a gestão de riscos psicossociais."
          />
          <SolutionItem
            icon={<Cpu className="w-5 h-5 sm:w-7 sm:h-7" />}
            title="Sistema QRP (Quantificação de Risco)"
            text="Método que gera evidências integradas entre setores, transformando dados em provas quantificáveis."
          />
        </div>

        <div className="bg-brand-darker rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-12 flex flex-col items-center text-center md:flex-row md:text-left gap-4 sm:gap-6 shadow-2xl border border-primary-foreground/10">
          <div className="text-primary-foreground bg-brand-red p-3 sm:p-4 rounded-full shadow-inner shrink-0">
            <Medal className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16" />
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold text-base sm:text-xl md:text-2xl mb-2 sm:mb-3 uppercase tracking-wide font-[family-name:var(--font-space-grotesk)]">
              Garantia de Lastro Probatório Blindado
            </h4>
            <p className="text-primary-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed">
              Garantimos a solidez das provas documentais em qualquer
              fiscalização trabalhista sobre NR-01.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
