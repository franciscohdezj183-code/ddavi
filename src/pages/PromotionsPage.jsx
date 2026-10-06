import { PromotionsGrid } from '../components/promotions/PromotionsGrid.jsx'
import { PromotionsHero } from '../components/promotions/PromotionsHero.jsx'
import { Container, SectionTitle } from '../components/ui.jsx'
import { promotions } from '../data/mockData.js'

const selectedPromotions = promotions.filter((promotion) => promotion.active).slice(0, 3)

export function PromotionsPage() {
  return (
    <>
      <PromotionsHero />
      <section id="promociones-disponibles" className="bg-white py-14 sm:py-18 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Selección especial" title="Promociones disponibles" description="Tres oportunidades para descubrir algo nuevo, elegir un detalle o celebrar una ocasión especial." />
          <PromotionsGrid promotions={selectedPromotions} />
        </Container>
      </section>
    </>
  )
}
