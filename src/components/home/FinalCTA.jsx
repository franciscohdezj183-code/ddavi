import { ArrowRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../ui.jsx'

export function FinalCTA() {
  return (
    <section className="min-h-[calc(100svh-5rem)] bg-white py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-ddavi-pastel/45 bg-ddavi-light px-6 py-10 text-center sm:px-10 sm:py-14">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-ddavi-primary/10" /><div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-ddavi-primary-dark/10" />
          <div className="relative mx-auto max-w-2xl"><span className="mx-auto mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-white text-ddavi-accent shadow-soft"><Heart size={20} aria-hidden="true" /></span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">¿Buscas algo especial?</h2><p className="mx-auto mt-4 max-w-lg leading-7 text-ddavi-muted">Explora nuestro catálogo y encuentra tu próximo favorito.</p><Link to="/catalogo" className="btn-primary mt-7 inline-flex items-center gap-2">Explorar catálogo <ArrowRight size={17} /></Link></div>
        </div>
      </Container>
    </section>
  )
}
