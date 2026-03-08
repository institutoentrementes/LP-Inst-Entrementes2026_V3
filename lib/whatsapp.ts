const WHATSAPP_NUMBER = "5531998900757"

export function getWhatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
