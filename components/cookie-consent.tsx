"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Shield, X } from "lucide-react"

function CookieOption({
  title,
  desc,
  checked,
  onChange,
  disabled,
}: {
  title: string
  desc: string
  checked: boolean
  onChange?: (value: boolean) => void
  disabled?: boolean
}) {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/5 gap-3">
      <div className="flex-grow min-w-0">
        <h5 className="text-primary-foreground font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">
          {title}
        </h5>
        <p className="text-primary-foreground/40 text-[10px] sm:text-xs">{desc}</p>
      </div>
      <button
        disabled={disabled}
        onClick={() => onChange && onChange(!checked)}
        className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors shrink-0 ${
          checked ? "bg-brand-red" : "bg-primary-foreground/20"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        aria-label={`${title}: ${checked ? "ativado" : "desativado"}`}
        role="switch"
        aria-checked={checked}
      >
        <span
          className={`inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 transform rounded-full bg-primary-foreground transition-transform ${
            checked ? "translate-x-4 sm:translate-x-6" : "translate-x-0.5 sm:translate-x-1"
          }`}
        />
      </button>
    </div>
  )
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (data: { analytics: boolean; marketing: boolean }) => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ ...data, date: new Date().toISOString() })
    )
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-[100] p-3 sm:p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl bg-brand-darker border border-primary-foreground/10 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {!showSettings ? (
              <div className="p-4 sm:p-5 md:p-8 flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:gap-6">
                <div className="bg-brand-red/20 p-2.5 sm:p-3 rounded-xl hidden md:block shrink-0">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-brand-red-light" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-primary-foreground font-bold text-base sm:text-lg mb-1 sm:mb-2 font-[family-name:var(--font-space-grotesk)]">
                    Privacidade e Cookies
                  </h4>
                  <p className="text-primary-foreground/50 text-xs sm:text-sm leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência. Ao clicar
                    em &quot;Aceitar Todos&quot;, você concorda com o uso de
                    cookies conforme nossa Política de Privacidade.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 w-full md:w-auto shrink-0">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground/70 border border-primary-foreground/10 rounded-xl hover:bg-primary-foreground/5 transition-colors w-full sm:w-auto"
                  >
                    Configurações
                  </button>
                  <button
                    onClick={() =>
                      saveConsent({ analytics: true, marketing: true })
                    }
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground bg-brand-red hover:bg-brand-red-light rounded-xl shadow-lg transition-all active:scale-95 w-full sm:w-auto"
                  >
                    Aceitar Todos
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h4 className="text-primary-foreground font-bold text-base sm:text-xl font-[family-name:var(--font-space-grotesk)]">
                    Preferências de Cookies
                  </h4>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-primary-foreground/50 hover:text-primary-foreground p-1"
                    aria-label="Fechar configurações"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-8">
                  <CookieOption
                    title="Essenciais"
                    desc="Necessários para o funcionamento do site."
                    checked={true}
                    disabled={true}
                  />
                  <CookieOption
                    title="Analíticos"
                    desc="Nos ajudam a entender o tráfego do site."
                    checked={prefs.analytics}
                    onChange={(v) => setPrefs({ ...prefs, analytics: v })}
                  />
                  <CookieOption
                    title="Marketing"
                    desc="Utilizados para anúncios relevantes."
                    checked={prefs.marketing}
                    onChange={(v) => setPrefs({ ...prefs, marketing: v })}
                  />
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground/70 w-full sm:w-auto"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => saveConsent(prefs)}
                    className="px-4 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground bg-brand-red hover:bg-brand-red-light rounded-xl shadow-lg w-full sm:w-auto"
                  >
                    Salvar Preferências
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
