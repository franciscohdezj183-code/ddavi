import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ProductFinalCTA() {
  return <section className="mb-8 rounded-[2rem] bg-white px-6 py-8 ring-1 ring-ddavi-pastel/30 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8"><div><h2 className="text-2xl font-black tracking-[-0.03em]">¿Buscas algo más?</h2><p className="mt-2 text-ddavi-muted">Explora nuestro catálogo y descubre más novedades.</p></div><Link to="/catalogo" className="btn-primary mt-5 inline-flex items-center justify-center gap-2 sm:mt-0">Ver catálogo <ArrowRight size={17} /></Link></section>
}
