import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../ui.jsx'

export function HeroSection() {
  return (
    <section className="hero-grid relative min-h-screen overflow-hidden bg-white">
      <img src="/fondoinicio.png" alt="" className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/45 to-white/5" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="orb orb-one" /><div className="orb orb-two" />
      <Container className="relative grid min-h-screen content-center gap-9 pb-10 pt-24 sm:pb-12 sm:pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-14 lg:pt-28">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(2.7rem,10vw,5rem)] font-black leading-[0.98] tracking-[-0.055em]">Encuentra algo que te <span className="text-ddavi-primary-dark">encante.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ddavi-muted sm:text-lg sm:leading-8">Descubre novedades, regalos, accesorios y productos para cada ocasión.</p>
          <div className="mt-8 flex flex-col gap-3 xs:flex-row">
            <Link to="/catalogo" className="btn-primary inline-flex items-center justify-center gap-2">Ver productos <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link to="/sucursales" className="btn-secondary inline-flex items-center justify-center gap-2"><MapPin size={17} aria-hidden="true" /> Ver sucursales</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
