import { useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { CatalogEmptyState } from '../components/catalog/CatalogEmptyState.jsx'
import { CatalogFilters } from '../components/catalog/CatalogFilters.jsx'
import { CatalogSearch } from '../components/catalog/CatalogSearch.jsx'
import { MobileFilterDrawer } from '../components/catalog/MobileFilterDrawer.jsx'
import { Container, ProductCard } from '../components/ui.jsx'
import { categories, products } from '../data/mockData.js'

const sortOptions = [
  { value: '', label: 'Recomendados' },
  { value: 'recientes', label: 'Más recientes' },
  { value: 'precio-asc', label: 'Precio: menor a mayor' },
  { value: 'precio-desc', label: 'Precio: mayor a menor' },
  { value: 'nombre-az', label: 'Nombre A–Z' },
]

const normalize = (value = '') => value.trim().toLocaleLowerCase('es-MX').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const search = searchParams.get('buscar') ?? ''
  const searchTerm = search.trim()
  const selectedCategory = searchParams.get('categoria') ?? ''
  const selectedSubcategory = searchParams.get('subcategoria') ?? ''
  const selectedPrice = searchParams.get('precio') ?? ''
  const sort = searchParams.get('orden') ?? ''
  const onlyNew = searchParams.get('nuevo') === '1'
  const onlyPromo = searchParams.get('promocion') === '1'
  const activeCategory = categories.find((category) => category.slug === selectedCategory)
  const activeSubcategory = activeCategory?.subcategories.find((subcategory) => subcategory.slug === selectedSubcategory)

  const updateParams = (updates, replace = false) => {
    const next = new URLSearchParams(searchParams)
    Object.entries(updates).forEach(([key, value]) => value ? next.set(key, value) : next.delete(key))
    setSearchParams(next, { replace })
  }
  const changeCategory = (value) => updateParams({ categoria: value, subcategoria: '' })
  const clearFilters = () => setSearchParams({})

  const filteredProducts = useMemo(() => {
    const query = normalize(search)
    const categoryId = activeCategory?.id
    const subcategoryId = activeSubcategory?.id
    const matchesPrice = (price) => !selectedPrice || (selectedPrice === 'menos-100' && price < 100) || (selectedPrice === '100-299' && price >= 100 && price <= 299) || (selectedPrice === '300-499' && price >= 300 && price <= 499) || (selectedPrice === '500-mas' && price >= 500)
    const matches = products.filter((product) => {
      const category = categories.find((item) => item.id === product.categoryId)
      const subcategory = category?.subcategories.find((item) => item.id === product.subcategoryId)
      const searchable = normalize([product.name, ...(product.keywords ?? []), category?.name, subcategory?.name].filter(Boolean).join(' '))
      return (!query || searchable.includes(query)) && (!categoryId || product.categoryId === categoryId) && (!subcategoryId || product.subcategoryId === subcategoryId) && matchesPrice(product.priceValue) && (!onlyNew || product.isNew) && (!onlyPromo || product.isPromo)
    })
    return [...matches].sort((a, b) => {
      if (sort === 'recientes') return Number(b.isNew) - Number(a.isNew)
      if (sort === 'precio-asc') return a.priceValue - b.priceValue
      if (sort === 'precio-desc') return b.priceValue - a.priceValue
      if (sort === 'nombre-az') return a.name.localeCompare(b.name, 'es')
      return 0
    })
  }, [activeCategory, activeSubcategory, onlyNew, onlyPromo, search, selectedPrice, sort])

  const activeFilterCount = [selectedCategory, selectedPrice, onlyNew || onlyPromo].filter(Boolean).length
  const hasActiveState = Boolean(searchTerm || selectedCategory || selectedSubcategory || selectedPrice || sort || onlyNew || onlyPromo)
  const resultMessage = searchTerm ? `${filteredProducts.length} ${filteredProducts.length === 1 ? 'resultado' : 'resultados'} para “${searchTerm}”` : activeCategory ? `${filteredProducts.length} ${filteredProducts.length === 1 ? 'producto' : 'productos'} en ${activeCategory.name}` : `${filteredProducts.length} productos`
  const filterProps = { selectedCategory, selectedSubcategory, selectedPrice, onlyNew, onlyPromo, onCategoryChange: changeCategory, onSubcategoryChange: (value) => updateParams({ subcategoria: value }), onPriceChange: (value) => updateParams({ precio: value }), onSpecialChange: (key, checked) => updateParams({ [key]: checked ? '1' : '' }) }

  return (
    <div className="bg-ddavi-cream/70">
      <section className="border-b border-ddavi-pastel/25 bg-white">
        <Container className="grid items-end gap-6 pb-10 pt-32 sm:pb-12 sm:pt-36 md:grid-cols-[minmax(0,1fr)_22rem] lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <p className="section-kicker">Catálogo</p>
            <h1 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Encuentra eso que estabas buscando.</h1>
            <p className="mt-3 max-w-2xl leading-7 text-ddavi-muted">Explora nuestras novedades, regalos, accesorios y más.</p>
          </div>
          <div className="w-full">
            <CatalogSearch value={search} onChange={(value) => updateParams({ buscar: value }, true)} onBlur={() => updateParams({ buscar: searchTerm }, true)} />
          </div>
        </Container>
      </section>
      <Container className="py-6 sm:py-8">
        <div className="grid gap-7 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="hidden self-start rounded-[1.75rem] border border-ddavi-pastel/50 bg-white p-5 shadow-soft lg:block" aria-label="Filtros del catálogo"><div className="mb-5 flex items-center justify-between"><h2 className="font-black">Filtros</h2>{hasActiveState && <button type="button" onClick={clearFilters} className="text-sm font-bold text-ddavi-primary-dark hover:text-ddavi-accent">Limpiar</button>}</div><CatalogFilters {...filterProps} /></aside>
          <section aria-labelledby="catalog-results-title">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><h2 id="catalog-results-title" className="text-lg font-black">{resultMessage}</h2>{activeSubcategory && <p className="mt-1 text-sm text-ddavi-muted">Subcategoría: {activeSubcategory.name}</p>}</div><div className="flex w-full items-center gap-2 sm:w-auto"><button type="button" className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-ddavi-pastel bg-white px-4 text-sm font-extrabold text-ddavi-primary-dark lg:hidden" aria-expanded={filtersOpen} aria-controls="mobile-catalog-filters" onClick={() => setFiltersOpen(true)}><SlidersHorizontal size={17} />Filtros{activeFilterCount ? ` (${activeFilterCount})` : ''}</button><label className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-full border border-ddavi-pastel bg-white px-4 text-sm font-bold text-ddavi-muted sm:flex-none"><span className="sr-only sm:not-sr-only">Ordenar por</span><select value={sort} onChange={(event) => updateParams({ orden: event.target.value })} className="min-w-0 bg-transparent text-sm font-bold text-ddavi-text outline-none"><option value="">Recomendados</option>{sortOptions.slice(1).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label></div></div>
            {hasActiveState && <div className="mb-5 flex flex-wrap items-center gap-2"><span className="text-sm font-semibold text-ddavi-muted">Selección activa</span>{searchTerm && <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-bold text-ddavi-text">“{searchTerm}”<button type="button" onClick={() => updateParams({ buscar: '' })} aria-label="Quitar búsqueda"><X size={15} /></button></span>}<button type="button" onClick={clearFilters} className="min-h-10 rounded-full px-3 text-sm font-extrabold text-ddavi-primary-dark hover:bg-ddavi-light">Limpiar filtros</button></div>}
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">{filteredProducts.length ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />) : <CatalogEmptyState onClear={clearFilters} />}</div>
          </section>
        </div>
      </Container>
      <div id="mobile-catalog-filters"><MobileFilterDrawer open={filtersOpen} onClose={() => setFiltersOpen(false)} onClear={clearFilters} activeCount={activeFilterCount} filterProps={filterProps} /></div>
    </div>
  )
}
