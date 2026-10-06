import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../ui.jsx'

export function PromotionsFinalCTA() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ddavi-primary-dark px-6 py-10 text-white sm:px-10 md:flex-row md:items-center">
          <div><Sparkles size={28} className="text-ddavi-pastel" aria-hidden="true" /><h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">¿Quieres descubrir más?</h2><p className="mt-2 max-w-2xl text-white/75">Explora nuestro catálogo completo y encuentra tu próximo favorito.</p></div>
          <div className="flex flex-wrap gap-3"><Link to="/catalogo" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-ddavi-primary-dark transition hover:bg-ddavi-light">Ver catálogo <ArrowRight size={17} aria-hidden="true" /></Link><Link to="/catalogo?nuevo=1" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:bg-white/10">Ver novedades</Link></div>
        </div>
      </Container>
    </section>
  )
}
