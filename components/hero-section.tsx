"use client"

import { motion } from "motion/react"
import { Lock } from "lucide-react"
import { getWhatsappLink } from "@/lib/whatsapp"
import Image from "next/image"

export function HeroSection() {
  return (
    <header className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-14 sm:pt-16 md:pt-[72px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          alt="Escritório corporativo moderno"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl text-center space-y-5 sm:space-y-6 md:space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight sm:leading-tight md:leading-[1.2] text-primary-foreground font-[family-name:var(--font-space-grotesk)] tracking-tight text-balance"
          >
            Sua empresa conseguiria se defender hoje de uma fiscalização sobre
            riscos psicossociais?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl lg:text-2xl text-primary-foreground/80 font-light max-w-3xl mx-auto leading-relaxed"
          >
            A NR-01 exige provas documentais e evidências robustas de gestão de
            riscos psicossociais. Evite multas e processos trabalhistas
            milionários com nossa Arquitetura de Blindagem Quantificada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 sm:pt-6 md:pt-10 flex flex-col items-center gap-4 sm:gap-5"
          >
            <a
              href={getWhatsappLink(
                "Olá, gostaria de solicitar um Diagnóstico Estratégico."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-light transition-all transform hover:scale-105 text-primary-foreground font-bold py-3.5 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-xl text-base sm:text-lg md:text-xl shadow-2xl flex justify-center items-center gap-2 sm:gap-3 active:scale-95"
            >
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Solicitar Diagnóstico
            </a>
            <div className="flex flex-col items-center gap-0.5 sm:gap-1">
              <span className="text-[9px] sm:text-[10px] md:text-xs text-primary-foreground/70 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Avaliação técnica confidencial
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-brand-red-light font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Resposta em até 48h
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
