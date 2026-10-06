import { Link } from 'react-router-dom'
import { Container } from '../ui.jsx'
import { PromotionBanner } from './PromotionBanner.jsx'

const categoryNames = { regalos: 'Regalos', hogar: 'Hogar', novedades: 'Novedades', accesorios: 'Accesorios', belleza: 'Belleza' }

export function SeasonalCampaign({ promotion }) {
  return (
    <section className="bg-ddavi-light/45 py-12 sm:py-16"><Container>
      <PromotionBanner promotion={promotion} eyebrow="Ejemplo de campaña · especial de temporada" campaign>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Categorías asociadas a la campaña">
          {promotion.categorySlugs.slice(0, 3).map((slug) => <Link key={slug} to={`/catalogo?categoria=${slug}`} className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs font-extrabold text-white transition hover:bg-white/20">{categoryNames[slug] ?? slug}</Link>)}
        </div>
      </PromotionBanner>
    </Container></section>
  )
}
