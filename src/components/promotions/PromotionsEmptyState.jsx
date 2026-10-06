import { SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PromotionsEmptyState() {
  return <div className="rounded-[2rem] bg-white px-6 py-14 text-center shadow-soft ring-1 ring-ddavi-pastel/25"><SearchX className="mx-auto text-ddavi-primary-dark" size={38} aria-hidden="true" /><h2 className="mt-4 text-2xl font-black tracking-[-0.035em]">No hay promociones disponibles</h2><p className="mx-auto mt-2 max-w-lg leading-7 text-ddavi-muted">Explora nuestro catálogo para descubrir más productos.</p><Link to="/catalogo" className="btn-primary mt-6 inline-flex items-center justify-center">Ver catálogo</Link></div>
}
