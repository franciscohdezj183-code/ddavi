import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../ui.jsx'

export function BranchesFinalCTA() {
  return <section className="py-12 sm:py-16"><Container><div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ddavi-primary-dark px-6 py-10 text-white sm:px-10 md:flex-row md:items-center"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-ddavi-pastel">Sigue explorando</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Encuentra algo especial para ti.</h2><p className="mt-2 text-white/75">Conoce las novedades y productos disponibles en nuestro catálogo demostrativo.</p></div><Link to="/catalogo" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-ddavi-primary-dark transition hover:bg-ddavi-light">Ver catálogo <ArrowRight size={17} /></Link></div></Container></section>
}
