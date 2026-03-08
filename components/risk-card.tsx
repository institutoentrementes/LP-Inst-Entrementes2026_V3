import type { ReactNode } from "react"

interface RiskCardProps {
  icon: ReactNode
  title: string
  text: string
  highlight: string
  variant?: "red" | "dark"
}

export function RiskCard({
  icon,
  title,
  text,
  highlight,
  variant = "dark",
}: RiskCardProps) {
  const colorClass =
    variant === "red" ? "text-brand-red" : "text-brand-dark"

  return (
    <div className="bg-brand-gray/40 p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl border border-border flex flex-col h-full hover:-translate-y-1 transition-all">
      <div
        className={`${colorClass} mb-4 sm:mb-6 bg-background w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm`}
      >
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 font-[family-name:var(--font-space-grotesk)] text-foreground">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-grow leading-relaxed">
        {text}
      </p>
      <div className="pt-3 sm:pt-4 border-t border-border/50">
        <p className={`${colorClass} font-bold text-sm sm:text-base`}>{highlight}</p>
      </div>
    </div>
  )
}
