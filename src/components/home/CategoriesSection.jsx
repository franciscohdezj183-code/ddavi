import { Link } from 'react-router-dom'
import { categories } from '../../data/mockData.js'

const collageLayout = [
  'col-span-2 lg:col-span-5 lg:row-span-2',
  'col-span-1 lg:col-span-4 lg:row-span-1',
  'col-span-1 lg:col-span-3 lg:row-span-1',
  'col-span-1 lg:col-span-3 lg:row-span-1',
  'col-span-1 lg:col-span-4 lg:row-span-1',
]

const categoryImages = {
  novedades: ['/novedadesmujer.jfif', '/novedadeshombre.jfif'],
  belleza: ['/bellezamujer.jfif', '/bellezahombre.jfif'],
  accesorios: ['/accesoriosmujer.jfif', '/accesorioshombre.jfif'],
  regalos: ['/regalosjumer.jfif', '/regaloshombre.jfif'],
  hogar: ['/hogarmujer.jfif', '/hogarhombre.jfif'],
}

export function CategoriesSection() {
  return (
    <section className="relative h-[calc(100svh-5rem)] min-h-0 overflow-hidden bg-ddavi-light">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-5 pt-4 text-ddavi-text [text-shadow:0_2px_12px_rgb(255_255_255_/_0.95)] sm:px-8 sm:pt-8 lg:px-12 lg:pt-10 xl:px-16">
        <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-ddavi-accent sm:text-xs">Categorías</p>
        <h2 className="mt-1 text-xl font-black tracking-[-0.04em] sm:mt-2 sm:text-3xl lg:text-4xl">Explora por categoría</h2>
        <p className="mt-1 max-w-xl text-xs font-medium sm:mt-2 sm:text-base">Encuentra más rápido lo que estás buscando.</p>
      </div>

      <div className="grid h-full w-full grid-cols-2 grid-rows-3 lg:grid-cols-12 lg:grid-rows-2" aria-label="Collage de categorías">
        {categories.map((category, index) => {
          const [primaryImage, hoverImage] = categoryImages[category.slug]
          return (
            <Link
              key={category.id}
              to={`/catalogo?categoria=${category.slug}`}
              className={`group relative overflow-hidden border border-white/70 focus-visible:z-30 focus-visible:outline focus-visible:outline-3 focus-visible:outline-inset focus-visible:outline-white ${collageLayout[index]}`}
              aria-label={`Ver productos de ${category.name}`}
            >
              <img src={primaryImage} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-0 group-focus-visible:scale-[1.025] group-focus-visible:opacity-0" aria-hidden="true" />
              <img src={hoverImage} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full scale-[1.025] object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100" aria-hidden="true" />
              <div className="image-panel-copy absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/10 px-3 text-center text-white">
                <h3 className="text-xl font-black tracking-[-0.04em] sm:text-2xl lg:text-[clamp(1.75rem,2.5vw,3rem)]">{category.name}</h3>
                <span className="mt-2 border-b border-white pb-0.5 text-xs font-bold sm:text-sm">Ver productos</span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
