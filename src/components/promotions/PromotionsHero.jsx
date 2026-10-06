import { ArrowDown, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../ui.jsx'

export function PromotionsHero() {
  return (
    <section className="relative isolate flex min-h-[68svh] items-center overflow-hidden bg-ddavi-primary-dark py-16 text-white sm:py-20">
      <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border-[4rem] border-white/[0.06]" aria-hidden="true" />
      <div className="absolute -bottom-44 left-[42%] h-80 w-80 rounded-full bg-ddavi-primary/20 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-ddavi-pastel"><Sparkles size={17} aria-hidden="true" /> Promociones</p>
          <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7.4rem)] font-black leading-[0.9] tracking-[-0.065em]">Algo especial, <span className="text-ddavi-pastel">a mejor precio.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">Una selección breve de oportunidades para encontrar tu próximo favorito.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#promociones-disponibles" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-ddavi-primary-dark transition hover:bg-ddavi-light">Ver promociones <ArrowDown size={17} aria-hidden="true" /></a>
            <Link to="/catalogo?promocion=1" className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:bg-white/10">Explorar catálogo</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
