import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const tones = { rose: 'bg-ddavi-light', lavender: 'bg-violet-100', cream: 'bg-ddavi-cream', mint: 'bg-emerald-100', peach: 'bg-orange-100' }

export function PromotionCard({ promotion, index = 0 }) {
  const destination = promotion.productId ? `/producto/${promotion.productId}` : `/catalogo?${promotion.catalogQuery}`

  return (
    <article className={`interactive-card flex min-h-[30rem] flex-col overflow-hidden rounded-[2rem] p-6 shadow-soft ring-1 ring-ddavi-pastel/20 sm:p-7 ${tones[promotion.tone] ?? 'bg-ddavi-light'}`}>
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-white/85 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-ddavi-primary-dark">{promotion.badge}</span>
        <span className="text-5xl font-black tracking-[-0.08em] text-ddavi-primary-dark/15">0{index + 1}</span>
      </div>
      {promotion.image && (
        <Link to={destination} className="my-3 flex min-h-44 flex-1 items-center justify-center" aria-label={`Ver ${promotion.productName ?? promotion.title}`}>
          <img src={promotion.image} alt={promotion.imageLabel} className="h-48 w-full object-contain drop-shadow-[0_18px_22px_rgba(61,35,52,0.18)] transition duration-300 hover:scale-[1.03]" />
        </Link>
      )}
      <div className="mt-auto">
        <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">{promotion.title}</h2>
        <p className="mt-3 max-w-sm leading-7 text-ddavi-muted">{promotion.shortDescription}</p>
        <Link to={destination} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-ddavi-primary-dark">Ver promoción <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </article>
  )
}
