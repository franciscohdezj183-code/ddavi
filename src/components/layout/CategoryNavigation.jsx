import { ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { categories } from '../../data/mockData.js'

export function DesktopCategoryMenu({ open, onToggle, onClose }) {
  const menuRef = useRef(null)
  const location = useLocation()

  useEffect(() => onClose(), [location.pathname, onClose])

  useEffect(() => {
    if (!open) return undefined
    const handlePointer = (event) => { if (!menuRef.current?.contains(event.target)) onClose() }
    const handleKey = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => { document.removeEventListener('mousedown', handlePointer); document.removeEventListener('keydown', handleKey) }
  }, [open, onClose])

  return (
    <div ref={menuRef} className="relative">
      <button type="button" className={`inline-flex items-center gap-1 border-b-2 px-1 py-3 text-sm font-bold transition ${open ? 'border-ddavi-primary-dark text-ddavi-primary-dark' : 'border-transparent text-ddavi-muted hover:text-ddavi-text'}`} aria-haspopup="menu" aria-expanded={open} onClick={onToggle}>
        Categorías <ChevronDown size={16} className={`transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute left-0 top-[calc(100%+0.45rem)] z-50 w-[min(44rem,calc(100vw-5rem))] rounded-[1.75rem] border border-ddavi-pastel/55 bg-white p-5 shadow-card" role="menu">
          <div className="mb-4 flex items-center justify-between"><p className="component-label">Explorar categorías</p><Link to="/catalogo" className="text-sm font-bold text-ddavi-primary-dark hover:text-ddavi-accent">Ver catálogo</Link></div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {categories.map((category) => <div key={category.id} className="rounded-2xl bg-ddavi-cream p-4"><Link to={`/catalogo?categoria=${category.slug}`} className="font-extrabold hover:text-ddavi-primary-dark">{category.name}</Link><div className="mt-2 flex flex-col gap-1">{category.subcategories.map((subcategory) => <Link key={subcategory.id} to={`/catalogo?categoria=${category.slug}&subcategoria=${subcategory.slug}`} className="rounded-lg py-1 text-sm text-ddavi-muted hover:text-ddavi-accent">{subcategory.name}</Link>)}</div></div>)}
          </div>
        </div>
      )}
    </div>
  )
}
