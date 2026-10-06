import { Home, LayoutGrid, MapPin, Tag } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  ['Inicio', '/', Home], ['Catálogo', '/catalogo', LayoutGrid], ['Promociones', '/promociones', Tag], ['Sucursales', '/sucursales', MapPin],
]

export function MobileNavigation() {
  return (
    <nav className="mobile-nav fixed inset-x-0 bottom-0 z-50 border-t border-ddavi-pastel/50 bg-white/96 px-2 pt-2 shadow-[0_-12px_28px_rgb(91_40_76_/_0.08)] backdrop-blur lg:hidden" aria-label="Navegación móvil">
      <div className="mx-auto grid max-w-lg grid-cols-4">
        {items.map(([label, to, Icon]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-1 text-[0.68rem] font-bold transition ${isActive ? 'bg-ddavi-light text-ddavi-primary-dark' : 'text-ddavi-muted'}`}><Icon size={20} aria-hidden="true" /><span>{label}</span></NavLink>)}
      </div>
    </nav>
  )
}
