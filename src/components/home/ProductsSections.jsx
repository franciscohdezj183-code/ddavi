import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../../data/mockData.js'
import { Badge, Container, ImagePlaceholder, SectionTitle } from '../ui.jsx'

function ProductShelf({ eyebrow, title, description, items, background = 'bg-white' }) {
  return (
    <section className={`${background} min-h-[calc(100svh-5rem)] py-14 sm:py-18`}>
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="grid grid-cols-2 items-start gap-4 lg:grid-cols-4 lg:gap-5">
            {items.map((product) => (
              <article key={product.id} className="group min-w-0">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-ddavi-light shadow-soft ring-1 ring-ddavi-pastel/25">
                  {product.image ? (
                    <img src={product.image} alt={product.imageLabel || product.name} className="aspect-[4/5] w-full rounded-[1.75rem] bg-white object-contain" loading="lazy" decoding="async" />
                  ) : (
                    <ImagePlaceholder ratio="portrait" label={product.imageLabel} className="rounded-[1.75rem] border-0 bg-ddavi-light" />
                  )}
                  <Link
                    to={`/producto/${product.id}`}
                    className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 text-xs font-extrabold text-ddavi-primary-dark transition hover:text-ddavi-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/45 sm:text-sm"
                    aria-label={`Ver ${product.name}`}
                  >
                    Ver
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
                <div className="px-1 pt-4">
                  <h3 className="text-sm font-extrabold tracking-[-0.02em] sm:text-base">{product.name}</h3>
                  <p className="mt-1 text-base font-bold text-ddavi-accent sm:text-lg">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
          <Link
            to="/catalogo"
            className="btn-secondary inline-flex items-center justify-center gap-2 justify-self-end px-4 py-3 text-center lg:justify-self-auto"
          >
            <span>Todos</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export function NewProductsSection() {
  const items = products.filter((product) => product.isNew).slice(-6).reverse()
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleItems = [
    items[activeIndex],
    items[(activeIndex + 1) % items.length],
    items[(activeIndex + 2) % items.length],
  ]

  const moveCarousel = (direction) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + items.length) % items.length)
  }

  const imageHeights = [
    'h-[21rem] sm:h-[27rem] lg:h-[29rem]',
    'h-[18rem] sm:h-[23rem] lg:h-[25rem]',
    'h-[20rem] sm:h-[25rem] lg:h-[27rem]',
    'h-[17rem] sm:h-[22rem] lg:h-[24rem]',
    'h-[20rem] sm:h-[26rem] lg:h-[28rem]',
    'h-[18rem] sm:h-[24rem] lg:h-[26rem]',
  ]

  return (
    <section className="min-h-[calc(100svh-5rem)] overflow-hidden bg-ddavi-light/45 py-12 sm:py-16">
      <Container className="grid min-h-[calc(100svh-13rem)] gap-8 lg:grid-cols-[minmax(14rem,0.72fr)_minmax(0,3fr)] lg:items-start lg:gap-10">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-extrabold tabular-nums text-ddavi-text">{activeIndex + 1} / {items.length}</p>
          <p className="section-kicker mt-5">Recién llegados</p>
          <h2 className="max-w-sm text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-[clamp(2.7rem,4vw,4.5rem)]">Lo más nuevo</h2>
          <p className="mt-4 max-w-xs leading-7 text-ddavi-muted">Descubre los productos que acaban de llegar.</p>
          <div className="mt-7 flex gap-3" aria-label="Controles del carrusel">
            <button type="button" onClick={() => moveCarousel(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-ddavi-pastel bg-white text-ddavi-text transition hover:border-ddavi-primary-dark hover:text-ddavi-primary-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ddavi-primary/45" aria-label="Ver productos anteriores">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => moveCarousel(1)} className="grid h-12 w-12 place-items-center rounded-full border border-ddavi-pastel bg-white text-ddavi-text transition hover:border-ddavi-primary-dark hover:text-ddavi-primary-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ddavi-primary/45" aria-label="Ver productos siguientes">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div key={activeIndex} className="new-products-pair grid w-full min-w-0 grid-cols-3 items-start gap-3 pb-5 sm:gap-5" aria-live="polite" aria-label={`Productos ${activeIndex + 1}, ${(activeIndex + 1) % items.length + 1} y ${(activeIndex + 2) % items.length + 1} de ${items.length}`}>
          {visibleItems.map((product, itemIndex) => {
            const productIndex = (activeIndex + itemIndex) % items.length
            return (
              <article key={product.id} className="min-w-0">
                <div className={`relative overflow-hidden bg-white ${imageHeights[productIndex % imageHeights.length]}`}>
                  {product.image ? (
                    <img src={product.image} alt={product.imageLabel || product.name} className="absolute inset-0 h-full w-full bg-white object-contain" loading="lazy" decoding="async" />
                  ) : (
                    <ImagePlaceholder ratio="portrait" label={product.imageLabel} className="absolute inset-0 h-full w-full rounded-none border-0 bg-white p-4" />
                  )}
                  {product.badge && <div className="absolute left-3 top-3 z-10"><Badge variant={product.badgeVariant}>{product.badge}</Badge></div>}
                </div>
                <div className="pt-4">
                  <h3 className="text-sm font-extrabold tracking-[-0.02em] sm:text-base">{product.name}</h3>
                  <p className="mt-1 text-base font-bold text-ddavi-accent sm:text-lg">{product.price}</p>
                  <Link to={`/producto/${product.id}`} className="mt-3 inline-flex min-h-10 items-center border-b border-ddavi-text text-sm font-bold text-ddavi-text transition hover:border-ddavi-primary-dark hover:text-ddavi-primary-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ddavi-primary/40">
                    Ver producto
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export function FeaturedProductsSection() {
  return <ProductShelf eyebrow="Selección D Davi" title="Productos destacados" description="Una selección que no querrás perderte." items={products.filter((product) => product.featured).slice(0, 4)} />
}
