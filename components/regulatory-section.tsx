import { AlertTriangle, FileText, ShieldCheck } from "lucide-react"
import { RiskCard } from "./risk-card"

export function RegulatorySection() {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tighter font-[family-name:var(--font-space-grotesk)] text-balance">
            Realidade Regulatória & Risco Financeiro
          </h2>
          <div className="w-12 sm:w-16 md:w-24 h-1 sm:h-1.5 bg-brand-red mx-auto mt-4 sm:mt-6 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 max-w-7xl mx-auto">
          <RiskCard
            icon={<AlertTriangle className="w-5 h-5 sm:w-7 sm:h-7" />}
            title="Multas Milionárias"
            text="Processos trabalhistas podem resultar em multas que ultrapassam seis dígitos."
            highlight="Risco civil e penal direto"
            variant="red"
          />
          <RiskCard
            icon={<FileText className="w-5 h-5 sm:w-7 sm:h-7" />}
            title="Passivo Trabalhista"
            text="A falta de provas da gestão de riscos é o principal passivo trabalhista moderno."
            highlight="Sua empresa está exposta?"
            variant="dark"
          />
          <RiskCard
            icon={<ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />}
            title="Reputação em Risco"
            text="Casos de burnout e assédio afetam diretamente o valor da marca e talentos."
            highlight="Proteja seu maior ativo"
            variant="dark"
          />
        </div>
      </div>
    </section>
  )
}
