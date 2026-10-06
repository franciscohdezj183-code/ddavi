import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { promotions } from '../../data/mockData.js'
import { Container } from '../ui.jsx'

const slides = promotions.filter((promotion) => promotion.active).slice(0, 3)

const backgrounds = [
  'bg-ddavi-primary-dark text-white',
  'bg-ddavi-light text-ddavi-text',
  'bg-ddavi-cream text-ddavi-text',
]

export function PromotionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const promotion = slides[activeIndex]

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || slides.length < 2) return undefined

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [])

  if (!promotion) return null

  const isDark = activeIndex === 0
  const destination = promotion.productId ? `/producto/${promotion.productId}` : `/catalogo?${promotion.catalogQuery}`
  const imageFrame = promotion.productId === 38
    ? '-mr-5 w-[calc(100%+1.25rem)] sm:-mr-8 sm:w-[calc(100%+2rem)] lg:-mr-12 lg:w-[calc(100%+3rem)] xl:-mr-16 xl:w-[calc(100%+4rem)]'
    : promotion.productId === 39
      ? '-mr-5 w-[calc(100%+1.25rem)] sm:-mr-8 sm:w-[calc(100%+2rem)] lg:-mr-12 lg:w-[calc(100%+3rem)] xl:-mr-16 xl:w-[calc(100%+4rem)]'
      : 'w-full'
  const imageFraming = promotion.productId === 37
    ? 'left-[12%] top-0 h-[120%] w-full object-contain object-top sm:left-[15%] sm:h-[124%] lg:left-[18%] lg:h-[128%]'
    : promotion.productId === 38
      ? '-bottom-[4%] -right-px h-[108%] w-[115%] max-w-none translate-x-[5%] object-contain object-right sm:h-[112%] sm:w-[118%] sm:translate-x-[6%] lg:h-[116%] lg:w-[122%] lg:translate-x-[7%]'
      : promotion.productId === 39
        ? 'right-0 top-1/2 h-[112%] w-[124%] max-w-none -translate-y-1/2 translate-x-[6%] object-contain object-right sm:h-[116%] sm:w-[128%] sm:translate-x-[7%] lg:h-[120%] lg:w-[132%] lg:translate-x-[8%]'
        : 'inset-0 h-full w-full object-contain'

  return (
    <section className={`relative min-h-[calc(100svh-5rem)] overflow-hidden transition-colors duration-500 ${backgrounds[activeIndex]}`} aria-label="Promociones destacadas">
      {!promotion.image && <div className="absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full border-[6rem] border-current opacity-[0.06]" aria-hidden="true" />}
      {!promotion.image && <div className="absolute -bottom-32 left-[18%] h-80 w-80 rounded-full bg-ddavi-primary/15 blur-3xl" aria-hidden="true" />}

      <Container className="relative flex min-h-[calc(100svh-5rem)] items-end py-12 sm:py-16 lg:py-20">
        <article key={promotion.id} className="promotion-slide grid w-full items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(26rem,46rem)]" aria-live="polite">
          <div className="max-w-4xl">
            <p className={`text-sm font-black uppercase tracking-[0.22em] ${isDark ? 'text-ddavi-pastel' : 'text-ddavi-accent'}`}>{promotion.badge}</p>
            <h2 className="mt-4 max-w-4xl text-[clamp(3.4rem,9vw,8rem)] font-black leading-[0.88] tracking-[-0.07em]">{promotion.title}</h2>
            <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${isDark ? 'text-white/75' : 'text-ddavi-muted'}`}>{promotion.description}</p>
            <Link to={destination} className={`mt-8 inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-extrabold transition ${isDark ? 'bg-white text-ddavi-primary-dark hover:bg-ddavi-light' : 'bg-ddavi-primary-dark text-white hover:bg-ddavi-accent'}`}>
              Ver promoción <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative -mb-12 h-[min(58vh,34rem)] sm:-mb-16 sm:h-[min(66vh,41rem)] lg:-mb-20 lg:h-[min(76vh,50rem)]">
            {promotion.image && (
              <div className={`absolute inset-y-0 right-0 overflow-hidden ${imageFrame}`}>
                <img
                  src={promotion.image}
                  alt={promotion.imageLabel}
                  className={`absolute drop-shadow-[0_24px_30px_rgba(36,23,32,0.22)] transition-transform duration-700 ${imageFraming}`}
                />
              </div>
            )}
            <p className={`absolute bottom-6 right-0 z-10 text-sm font-extrabold tabular-nums sm:bottom-8 lg:bottom-10 ${isDark ? 'text-white/65' : 'text-ddavi-muted'}`}>{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</p>
          </div>
        </article>
      </Container>
    </section>
  )
}
