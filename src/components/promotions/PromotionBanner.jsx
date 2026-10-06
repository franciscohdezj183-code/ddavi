import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImagePlaceholder } from '../ui.jsx'

export function PromotionBanner({ promotion, eyebrow, campaign = false, children }) {
  const label = eyebrow ?? promotion.badge ?? 'Promoción destacada'

  return (
    <article className={`grid overflow-hidden rounded-[2rem] p-4 shadow-soft ring-1 ring-ddavi-pastel/25 md:grid-cols-[1.08fr_0.92fr] md:items-center md:p-6 ${campaign ? 'bg-ddavi-primary-dark text-white' : 'bg-white'}`}>
      <ImagePlaceholder ratio="landscape" label={promotion.imageLabel} className={campaign ? 'border-white/20 bg-white/10 text-white' : ''} />
      <div className="p-3 sm:p-6">
        <p className={`section-kicker ${campaign ? 'text-ddavi-pastel' : ''}`}>{label}</p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] sm:text-4xl">{promotion.title}</h2>
        <p className={`mt-4 max-w-xl leading-7 ${campaign ? 'text-white/75' : 'text-ddavi-muted'}`}>{promotion.description}</p>
        {children}
        <Link to={`/catalogo?${promotion.catalogQuery}`} className={`mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-extrabold transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 ${campaign ? 'bg-white text-ddavi-primary-dark hover:bg-ddavi-light focus-visible:outline-white/60' : 'bg-ddavi-primary-dark text-white hover:bg-ddavi-accent focus-visible:outline-ddavi-primary/40'}`}>
          Ver productos <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
