import { ZoomIn, ZoomOut } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ImagePlaceholder } from '../ui.jsx'

export function ProductGallery({ product }) {
  const placeholderViews = ['Vista principal', 'Vista lateral', 'Detalle del producto']
  const galleryImages = product.images ?? []
  const [selectedView, setSelectedView] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    setSelectedView(0)
    setIsZoomed(false)
    setZoomPosition({ x: 50, y: 50 })
  }, [product.id])

  const updateZoomPosition = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100))
    const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100))
    setZoomPosition({ x, y })
  }

  const toggleZoom = (event) => {
    if (!isZoomed) {
      if (event.detail === 0) setZoomPosition({ x: 50, y: 50 })
      else updateZoomPosition(event)
    }
    setIsZoomed((current) => !current)
  }

  const selectView = (index) => {
    setSelectedView(index)
    setIsZoomed(false)
    setZoomPosition({ x: 50, y: 50 })
  }
  if (galleryImages.length > 0) {
    const selectedImage = galleryImages[selectedView] ?? galleryImages[0]
    return (
      <section aria-label={`Galería de ${product.name}`}>
        <button type="button" aria-label={isZoomed ? `Alejar imagen de ${product.name}` : `Ampliar imagen de ${product.name}`} aria-pressed={isZoomed} onClick={toggleZoom} onPointerMove={(event) => { if (isZoomed) updateZoomPosition(event) }} className={`group relative block aspect-[4/5] w-full max-h-[42rem] overflow-hidden rounded-[1.6rem] bg-white text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/40 ${isZoomed ? 'cursor-zoom-out touch-none' : 'cursor-zoom-in'}`}>
          <img src={selectedImage.src} alt={selectedImage.alt} className="h-full w-full object-contain transition-transform duration-200 ease-out" style={{ transform: isZoomed ? 'scale(2.4)' : 'scale(1)', transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }} decoding="async" />
          {!isZoomed && <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition duration-200 group-hover:bg-black/5 group-hover:opacity-100" aria-hidden="true"><span className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-ddavi-primary-dark shadow-card"><ZoomIn size={26} /></span></span>}
          {isZoomed && <span className="pointer-events-none absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-ddavi-primary-dark shadow-card" aria-hidden="true"><ZoomOut size={22} /></span>}
        </button>
        <div className="hide-scrollbar mt-3 flex gap-2 overflow-x-auto pb-2">
          {galleryImages.map((image, index) => (
            <button key={image.src} type="button" aria-label={`Mostrar ${image.alt}`} aria-pressed={selectedView === index} onClick={() => selectView(index)} className={`group/thumb relative w-20 flex-none cursor-zoom-in overflow-hidden rounded-lg transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/40 ${selectedView === index ? 'opacity-100' : 'opacity-65 hover:opacity-90'}`}>
              <img src={image.src} alt="" className="aspect-square w-full rounded-lg bg-white object-contain" loading="lazy" decoding="async" />
              <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition group-hover/thumb:bg-black/5 group-hover/thumb:opacity-100" aria-hidden="true"><span className="grid h-8 w-8 place-items-center rounded-full bg-white/95 text-ddavi-primary-dark shadow-sm"><ZoomIn size={16} /></span></span>
            </button>
          ))}
        </div>
      </section>
    )
  }
  return <section aria-label={`Galería de ${product.name}`}><ImagePlaceholder ratio="portrait" label={`${product.name} · ${placeholderViews[selectedView]}`} className="max-h-[42rem]" /><div className="hide-scrollbar mt-3 flex gap-2 overflow-x-auto pb-2">{placeholderViews.map((view, index) => <button key={view} type="button" aria-label={view} aria-pressed={selectedView === index} onClick={() => setSelectedView(index)} className={`w-20 flex-none overflow-hidden rounded-lg transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/40 ${selectedView === index ? 'opacity-100' : 'opacity-65 hover:opacity-90'}`}><ImagePlaceholder ratio="square" label={view} className="rounded-lg border-0 p-1 [&_span]:h-8 [&_span]:w-8 [&_p]:hidden" /></button>)}</div></section>
}
