import { ArrowDown } from 'lucide-react'
import { Container, ImagePlaceholder } from '../ui.jsx'

export function BranchesHero() {
  return (
    <section className="bg-ddavi-cream py-10 sm:py-14 lg:py-18">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-[2.25rem] bg-white p-5 shadow-soft ring-1 ring-ddavi-pastel/25 md:grid-cols-[0.9fr_1.1fr] md:p-8 lg:p-10">
          <div className="order-2 md:order-1"><p className="section-kicker">Dónde encontrarnos</p><h1 className="mt-2 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">Nuestras sucursales</h1><p className="mt-5 max-w-xl text-base leading-7 text-ddavi-muted sm:text-lg">Encuentra la sucursal D Davi más cercana y visítanos.</p><a href="#listado-sucursales" className="btn-primary mt-7 inline-flex items-center gap-2">Ver sucursales <ArrowDown size={18} aria-hidden="true" /></a></div>
          <ImagePlaceholder ratio="hero" label="Imagen de sucursal" className="order-1 md:order-2" />
        </div>
      </Container>
    </section>
  )
}
