import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Clock3, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { branches } from '../../data/mockData.js'
import { Container, ImagePlaceholder, SectionTitle } from '../ui.jsx'

export function BranchesPreview() {
  const activeBranches = branches.filter((branch) => branch.active && branch.showOnHome)
  const [activeIndex, setActiveIndex] = useState(0)
  const branch = activeBranches[activeIndex]

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || activeBranches.length < 2) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % activeBranches.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [activeBranches.length])

  const changeBranch = (direction) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + activeBranches.length) % activeBranches.length)
  }

  if (!branch) return null

  const scheduleText = branch.scheduleType === 'known' && branch.schedule[0]
    ? `${branch.schedule[0].days} · ${branch.schedule[0].hours}`
    : branch.scheduleLabel

  return (
    <section className="min-h-[calc(100svh-5rem)] bg-ddavi-cream py-14 sm:py-18">
      <Container>
        <SectionTitle eyebrow="Dónde encontrarnos" title="Visítanos" description="Encuentra tu sucursal D Davi más cercana." action={<Link to="/sucursales" className="btn-secondary inline-flex items-center gap-2">Ver todas las sucursales <ArrowRight size={16} /></Link>} />

        <article className="mt-8 overflow-hidden rounded-[2.25rem] bg-white shadow-card ring-1 ring-ddavi-pastel/30">
          <div key={branch.id} className="branch-preview-content grid min-h-[30rem] md:grid-cols-[1.08fr_0.92fr]" aria-live="polite">
            <div className="relative min-h-[18rem] overflow-hidden md:min-h-[30rem]">
              {branch.image
                ? <img src={branch.image} alt={`Sucursal ${branch.shortName}`} className="absolute inset-0 h-full w-full object-cover" />
                : <ImagePlaceholder ratio="hero" label={branch.imageLabel || 'Imagen de sucursal'} className="absolute inset-0 h-full w-full rounded-none border-0 bg-ddavi-light" />}
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-ddavi-accent">Sucursal destacada</p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-5xl">{branch.shortName}</h3>
                <div className="mt-7 grid gap-4 text-sm leading-6 text-ddavi-muted sm:text-base">
                  <p className="flex items-start gap-3"><MapPin size={20} className="mt-0.5 shrink-0 text-ddavi-primary-dark" aria-hidden="true" />{branch.address}</p>
                  <p className="flex items-start gap-3"><Clock3 size={20} className="mt-0.5 shrink-0 text-ddavi-primary-dark" aria-hidden="true" />{scheduleText}</p>
                </div>
                <Link to={`/sucursales?sucursal=${branch.slug}`} className="btn-primary mt-8 inline-flex items-center gap-2">Ver información <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-ddavi-pastel/35 pt-5">
                <p className="text-sm font-extrabold tabular-nums text-ddavi-muted">{activeIndex + 1} / {activeBranches.length}</p>
                <div className="flex gap-2" aria-label="Cambiar sucursal">
                  <button type="button" onClick={() => changeBranch(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-ddavi-pastel text-ddavi-text transition hover:border-ddavi-primary-dark hover:text-ddavi-primary-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/40" aria-label="Ver sucursal anterior"><ArrowLeft size={19} aria-hidden="true" /></button>
                  <button type="button" onClick={() => changeBranch(1)} className="grid h-11 w-11 place-items-center rounded-full border border-ddavi-pastel text-ddavi-text transition hover:border-ddavi-primary-dark hover:text-ddavi-primary-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/40" aria-label="Ver siguiente sucursal"><ArrowRight size={19} aria-hidden="true" /></button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}
