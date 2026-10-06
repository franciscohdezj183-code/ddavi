import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { businessConfig } from '../../config/businessConfig.js'
import { buildWhatsAppUrl } from '../../utils/productMessaging.js'
import { Brand } from '../Brand.jsx'
import { Container } from '../ui.jsx'

const footerLinks = [['Inicio', '/'], ['Catálogo', '/catalogo'], ['Promociones', '/promociones'], ['Sucursales', '/sucursales']]

function PendingSocial({ icon: Icon, label }) {
  return <span className="inline-flex items-center gap-2 text-sm text-ddavi-muted" aria-label={`${label}, pendiente de configurar`}><Icon size={17} aria-hidden="true" /> {label}</span>
}

export function PublicFooter() {
  const whatsappUrl = buildWhatsAppUrl(businessConfig.whatsapp, 'Hola, quisiera información de D Davi Novedades.')

  return (
    <footer className="border-t border-ddavi-pastel/40 bg-white pb-6 pt-12" id="contacto">
      <Container>
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div><Brand /><p className="mt-4 max-w-xs text-sm leading-6 text-ddavi-muted">{businessConfig.slogan}</p></div>
          <div><h2 className="text-sm font-extrabold">Explora</h2><nav className="mt-4 flex flex-col gap-3" aria-label="Navegación del pie">{footerLinks.map(([label, to]) => <Link key={to} to={to} className="text-sm text-ddavi-muted transition hover:text-ddavi-primary-dark">{label}</Link>)}</nav></div>
          <div><h2 className="text-sm font-extrabold">Síguenos</h2><div className="mt-4 flex flex-col gap-3"><PendingSocial icon={Facebook} label="Facebook" /><PendingSocial icon={Instagram} label="Instagram" /></div></div>
          <div><h2 className="text-sm font-extrabold">Contacto</h2><div className="mt-4"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ddavi-muted transition hover:text-ddavi-primary-dark"><MessageCircle size={17} aria-hidden="true" />WhatsApp</a></div></div>
        </div>
        <div className="mt-10 border-t border-ddavi-pastel/35 pt-5 text-center text-xs font-semibold text-ddavi-muted">D Davi Novedades©</div>
      </Container>
    </footer>
  )
}
