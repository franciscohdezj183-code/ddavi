import { PromotionCard } from './PromotionCard.jsx'

export function PromotionsGrid({ promotions }) {
  if (!promotions.length) return null
  return <div className="mt-8 grid gap-5 md:grid-cols-3">{promotions.map((promotion, index) => <PromotionCard key={promotion.id} promotion={promotion} index={index} />)}</div>
}
