"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsappLink } from "@/lib/whatsapp"

export function WhatsappFab() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href={getWhatsappLink("Ola, estou vindo do site.")}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-primary-foreground p-3 sm:p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-90"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  )
}
