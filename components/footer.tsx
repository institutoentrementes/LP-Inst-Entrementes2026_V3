import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-dark py-8 sm:py-10 md:py-12 text-center border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 space-y-3 sm:space-y-4">
        <p className="text-xs sm:text-sm text-primary-foreground font-medium">
          &copy; 2026 Instituto Entrementes. Todos os direitos reservados.
        </p>
        <p className="text-[10px] sm:text-xs text-primary-foreground/50">
          CNPJ: 48.319.338/0001-37 | Belo Horizonte - MG
        </p>
        <p className="text-[10px] sm:text-xs text-primary-foreground/50">
          Responsável Técnico: Leonardo Lanna - CRP 04/60663
        </p>
        <div className="flex justify-center gap-5 sm:gap-6 pt-3 sm:pt-4">
          <a
            href="https://www.linkedin.com/in/leolannapsi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/50 hover:text-brand-red transition-colors"
            aria-label="LinkedIn de Leonardo Lanna"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.instagram.com/leolanna.psi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/50 hover:text-brand-red transition-colors"
            aria-label="Instagram de Leonardo Lanna"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
