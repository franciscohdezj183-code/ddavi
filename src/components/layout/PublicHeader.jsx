import { Search, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Brand } from '../Brand.jsx'
import { Container } from '../ui.jsx'
import { DesktopCategoryMenu } from './CategoryNavigation.jsx'

export function PublicHeader() {
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [search, setSearch] = useState('')
  const searchRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const closeCategories = useCallback(() => setCategoriesOpen(false), [])

  useEffect(() => {
    const nextSearch = location.pathname === '/catalogo' ? new URLSearchParams(location.search).get('buscar') ?? '' : ''
    setSearch(nextSearch)
    setSearchOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    if (!searchOpen) return undefined
    const handlePointer = (event) => { if (!searchRef.current?.contains(event.target)) setSearchOpen(false) }
    const handleKey = (event) => { if (event.key === 'Escape') setSearchOpen(false) }
    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => { document.removeEventListener('mousedown', handlePointer); document.removeEventListener('keydown', handleKey) }
  }, [searchOpen])

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  const handleSearch = (event) => {
    event.preventDefault()
    const query = search.trim()
    setSearchOpen(false)
    navigate(query ? `/catalogo?buscar=${encodeURIComponent(query)}` : '/catalogo')
  }

  const hasTransparentTop = location.pathname === '/' || location.pathname === '/catalogo'
  const hasSolidBackground = !hasTransparentTop || scrolled
  const positionClass = hasTransparentTop ? (scrolled ? 'fixed inset-x-0 top-0' : 'absolute inset-x-0 top-0') : 'sticky top-0'

  return (
    <header className={`${positionClass} z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${hasSolidBackground ? 'border-ddavi-pastel/35 bg-white shadow-sm' : 'border-transparent bg-transparent shadow-none'}`}>
      <Container className="relative grid min-h-20 grid-cols-[auto_1fr_auto] items-center py-3">
        <div className={`origin-top-left transition-transform duration-300 ${hasTransparentTop && !scrolled ? 'translate-y-1 scale-[1.4]' : 'translate-y-0 scale-100'}`}>
          <Brand />
        </div>
        <nav className="hidden items-center justify-self-center gap-10 lg:flex xl:gap-14" aria-label="Navegación principal">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Inicio</NavLink>
            <DesktopCategoryMenu open={categoriesOpen} onToggle={() => setCategoriesOpen((current) => !current)} onClose={closeCategories} />
            <NavLink to="/promociones" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Promociones</NavLink>
            <NavLink to="/sucursales" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>Sucursales</NavLink>
        </nav>
        <div ref={searchRef} className="justify-self-end">
          <button type="button" onClick={() => setSearchOpen((current) => !current)} className={`grid h-11 w-11 place-items-center rounded-full transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/40 ${searchOpen ? 'bg-ddavi-primary-dark text-white' : 'bg-transparent text-ddavi-primary-dark hover:bg-ddavi-light'}`} aria-label={searchOpen ? 'Cerrar búsqueda' : 'Buscar productos'} aria-expanded={searchOpen} aria-controls="header-search-panel">
            {searchOpen ? <X size={20} aria-hidden="true" /> : <Search size={20} aria-hidden="true" />}
          </button>
          {searchOpen && <form id="header-search-panel" onSubmit={handleSearch} role="search" className="absolute right-5 top-[calc(100%+0.5rem)] z-50 w-[calc(100%-2.5rem)] rounded-[1.5rem] bg-white p-3 shadow-card sm:right-8 sm:w-[28rem] lg:right-12 xl:right-16">
            <label className="flex min-h-12 items-center gap-3 rounded-full bg-ddavi-cream px-4 text-ddavi-muted transition focus-within:bg-ddavi-light/70">
              <Search size={19} aria-hidden="true" /><span className="sr-only">Buscar productos</span><input autoFocus type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar productos..." className="w-full bg-transparent text-base text-ddavi-text outline-none placeholder:text-ddavi-muted" />
            </label>
          </form>}
        </div>
      </Container>
    </header>
  )
}
