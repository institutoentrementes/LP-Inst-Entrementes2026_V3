"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { getWhatsappLink } from "@/lib/whatsapp"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-primary-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-14 sm:h-16 md:h-[72px]">
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/images/logo-entrementes.png"
            alt="Instituto Entrementes"
            width={240}
            height={40}
            className="h-7 sm:h-8 md:h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop CTA */}
        <a
          href={getWhatsappLink(
            "Olá, gostaria de falar com a equipe do Instituto Entrementes."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex bg-brand-red hover:bg-brand-red-light text-primary-foreground text-xs md:text-sm font-bold py-2 px-4 md:py-2.5 md:px-6 rounded-full transition-all shadow-lg active:scale-95"
        >
          Falar com nossa equipe
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-primary-foreground p-1.5"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-brand-dark/98 border-t border-primary-foreground/5 px-4 pb-4 pt-3">
          <a
            href={getWhatsappLink(
              "Olá, gostaria de falar com a equipe do Instituto Entrementes."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-brand-red hover:bg-brand-red-light text-primary-foreground text-sm font-bold py-3 rounded-xl transition-all active:scale-95"
          >
            Falar com nossa equipe
          </a>
        </div>
      )}
    </nav>
  )
}
