import { SearchX } from 'lucide-react'

export function CatalogEmptyState({ onClear }) {
  return <div className="col-span-full rounded-[2rem] border border-dashed border-ddavi-pastel bg-white px-6 py-14 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ddavi-light text-ddavi-primary-dark"><SearchX size={26} /></span><h2 className="mt-5 text-2xl font-black">No encontramos productos</h2><p className="mx-auto mt-2 max-w-md leading-7 text-ddavi-muted">Prueba con otra búsqueda o elimina algunos filtros para ver más opciones.</p><button type="button" className="btn-primary mt-6" onClick={onClear}>Limpiar filtros</button></div>
}
