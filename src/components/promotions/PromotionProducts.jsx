import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, ProductCard, SectionTitle } from '../ui.jsx'

export function PromotionProducts({ eyebrow, title, description, products, actionHref, background = '' }) {
  return (
    <section className={`${background} py-12 sm:py-16`}>
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} action={actionHref && <Link to={actionHref} className="btn-secondary inline-flex items-center gap-2">Ver todo <ArrowRight size={16} aria-hidden="true" /></Link>} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </Container>
    </section>
  )
}
