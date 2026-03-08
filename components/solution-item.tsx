import type { ReactNode } from "react"

interface SolutionItemProps {
  icon: ReactNode
  title: string
  text: string
}

export function SolutionItem({ icon, title, text }: SolutionItemProps) {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-5">
      <div className="text-brand-red bg-background p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-md shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2 font-[family-name:var(--font-space-grotesk)]">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
