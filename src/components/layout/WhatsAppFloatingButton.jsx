import { MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { businessConfig } from '../../config/businessConfig.js'
import { buildWhatsAppUrl } from '../../utils/productMessaging.js'

export function WhatsAppFloatingButton() {
  const href = buildWhatsAppUrl(businessConfig.whatsapp, 'Hola, quisiera información de D Davi Novedades.')
  const location = useLocation()
  const sideClass = location.pathname === '/sucursales' ? 'left-4 lg:left-6' : 'right-4 lg:right-6'

  return <a href={href} target="_blank" rel="noopener noreferrer" className={`whatsapp-fab fixed z-40 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-ddavi-primary-dark px-5 text-sm font-extrabold text-white shadow-brand transition hover:-translate-y-1 hover:bg-ddavi-accent focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ddavi-primary/50 ${sideClass}`} aria-label="Contactar a D Davi por WhatsApp"><MessageCircle size={23} strokeWidth={2.2} aria-hidden="true" /><span>WhatsApp</span></a>
}
