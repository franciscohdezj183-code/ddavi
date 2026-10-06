import { useEffect, useRef } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { CatalogFilters } from './CatalogFilters.jsx'

export function MobileFilterDrawer({ open, onClose, onClear, activeCount, filterProps }) {
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    previousFocusRef.current = document.activeElement
    const handleKey = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; previousFocusRef.current?.focus?.() }
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[80] lg:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-filter-title">
      <button type="button" className="absolute inset-0 bg-ddavi-text/40" aria-label="Cerrar filtros" onClick={onClose} />
      <section className="catalog-drawer absolute inset-y-0 right-0 flex w-[min(92vw,25rem)] flex-col bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-ddavi-pastel/40 px-5 py-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-ddavi-light text-ddavi-primary-dark"><SlidersHorizontal size={19} /></span><div><h2 id="mobile-filter-title" className="font-black">Filtros</h2><p className="text-sm text-ddavi-muted">{activeCount ? `${activeCount} activos` : 'Explora el catálogo'}</p></div></div><button ref={closeButtonRef} type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-full bg-ddavi-cream text-ddavi-primary-dark" aria-label="Cerrar filtros"><X size={20} /></button></div>
        <div className="flex-1 overflow-y-auto p-5"><CatalogFilters {...filterProps} /></div>
        <div className="grid grid-cols-2 gap-3 border-t border-ddavi-pastel/40 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"><button type="button" className="btn-secondary px-3" onClick={onClear}>Limpiar</button><button type="button" className="btn-primary px-3" onClick={onClose}>Aplicar</button></div>
      </section>
    </div>
  )
}
