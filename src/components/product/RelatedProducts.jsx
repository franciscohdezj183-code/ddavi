import { ProductCard, SectionTitle } from '../ui.jsx'

export function RelatedProducts({ products }) {
  if (!products.length) return null

  return (
    <section className="border-t border-ddavi-pastel/35 py-10 sm:py-14" aria-label="Productos relacionados">
      <SectionTitle eyebrow="Más para descubrir" title="También te puede gustar" description="Opciones relacionadas con la categoría de este producto." />
      <div className="related-products-marquee mt-7 overflow-hidden" tabIndex="0" aria-label="Carrusel automático de productos relacionados">
        <div className="related-products-track flex w-max">
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="related-products-group flex gap-4 pr-4 sm:gap-5 sm:pr-5" aria-hidden={copyIndex === 1 ? 'true' : undefined} inert={copyIndex === 1 ? '' : undefined}>
              {products.map((product) => <div key={`${copyIndex}-${product.id}`} className="w-[15.5rem] shrink-0 sm:w-[18rem] lg:w-[20rem]"><ProductCard product={product} /></div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
