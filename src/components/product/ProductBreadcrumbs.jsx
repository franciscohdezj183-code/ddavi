import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ProductBreadcrumbs({ product, category, subcategory }) {
  const items = [
    { label: 'Inicio', to: '/' },
    { label: category.name, to: `/catalogo?categoria=${category.slug}` },
    { label: subcategory.name, to: `/catalogo?categoria=${category.slug}&subcategoria=${subcategory.slug}` },
  ]
  return <nav aria-label="Ruta del producto" className="overflow-hidden"><ol className="flex min-w-0 items-center gap-1 text-sm text-ddavi-muted">{items.map((item) => <li key={item.to} className="flex min-w-0 shrink-0 items-center gap-1"><Link to={item.to} className="rounded-lg px-1 py-2 font-semibold transition hover:text-ddavi-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1">{item.label}</Link><ChevronRight size={14} className="shrink-0" aria-hidden="true" /></li>)}<li className="min-w-0 truncate px-1 font-bold text-ddavi-text" aria-current="page">{product.name}</li></ol></nav>
}
