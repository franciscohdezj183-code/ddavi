import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/mockData.js'

const highlightImages = {
  belleza: ['/belleza1.jfif', '/belleza2.jfif'],
  accesorios: ['/accesorios1.jfif', '/accesorios2.jfif'],
  regalos: ['/regalos1.jfif', '/regalos2.jfif'],
}

export function CategoryHighlights() {
  const highlights = categories.filter((category) => ['regalos', 'belleza', 'accesorios'].includes(category.slug))

  return (
    <section className="relative h-[calc(100svh-5rem)] min-h-0 overflow-hidden bg-ddavi-light">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-4 text-ddavi-text [text-shadow:0_2px_12px_rgb(255_255_255_/_0.95)] sm:px-8 sm:pt-8 lg:px-12 lg:pt-10 xl:px-16">
        <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-ddavi-accent sm:text-xs">Ideas para descubrir</p>
        <h2 className="mt-1 text-xl font-black tracking-[-0.04em] sm:mt-2 sm:text-3xl lg:text-4xl">Encuentra lo que buscas</h2>
        <p className="mt-1 max-w-xl text-xs font-medium sm:mt-2 sm:text-base">Tres caminos rápidos para inspirarte sin perderte entre opciones.</p>
      </div>

      <div className="grid h-full w-full grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
        {highlights.map((category) => {
          const [primaryImage, hoverImage] = highlightImages[category.slug]
          return (
            <article key={category.id} className="group relative min-h-0 overflow-hidden">
              <img src={primaryImage} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-0 group-focus-within:scale-[1.025] group-focus-within:opacity-0" aria-hidden="true" />
              <img src={hoverImage} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full scale-[1.025] object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100" aria-hidden="true" />
              <div className="image-panel-copy absolute inset-0 z-10 flex flex-col items-center justify-end px-3 pb-5 text-center text-white sm:px-6 sm:pb-8 lg:px-8 lg:pb-12">
                <h3 className="max-w-md text-xl font-extrabold tracking-[-0.035em] sm:text-2xl lg:text-[clamp(1.75rem,2.2vw,2.5rem)]">{category.name}</h3>
                <Link
                  to={`/catalogo?categoria=${category.slug}`}
                  className="mt-2 inline-flex min-h-10 items-center gap-1.5 border-b border-white pb-0.5 text-sm font-bold text-white transition hover:border-ddavi-primary hover:text-ddavi-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white sm:mt-4"
                  aria-label={`Ver más productos de ${category.name}`}
                >
                  Ver más
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
