import { Search, X } from 'lucide-react'

export function CatalogSearch({ value, onChange, onBlur }) {
  return (
    <label className="flex min-h-12 items-center gap-3 rounded-2xl border border-ddavi-pastel/70 bg-white px-4 shadow-soft transition focus-within:border-ddavi-primary-dark focus-within:ring-3 focus-within:ring-ddavi-primary/15">
      <Search className="shrink-0 text-ddavi-primary-dark" size={20} aria-hidden="true" />
      <span className="sr-only">Buscar en el catálogo</span>
      <input type="search" value={value} onChange={(event) => onChange(event.target.value)} onBlur={onBlur} placeholder="Buscar productos..." className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-ddavi-muted" />
      {value && <button type="button" onClick={() => onChange('')} className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-ddavi-muted transition hover:bg-ddavi-light hover:text-ddavi-primary-dark" aria-label="Borrar búsqueda"><X size={18} /></button>}
    </label>
  )
}
