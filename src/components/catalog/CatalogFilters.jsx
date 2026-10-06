import { categories } from '../../data/mockData.js'

export const priceRanges = [
  { value: '', label: 'Todos' },
  { value: 'menos-100', label: 'Menos de $100' },
  { value: '100-299', label: '$100 – $299' },
  { value: '300-499', label: '$300 – $499' },
  { value: '500-mas', label: '$500 o más' },
]

function FilterOption({ name, value, checked, onChange, children }) {
  return <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 text-sm font-semibold text-ddavi-muted transition hover:bg-ddavi-cream hover:text-ddavi-text"><input type="radio" name={name} value={value} checked={checked} onChange={() => onChange(value)} className="h-4 w-4 accent-ddavi-primary-dark" />{children}</label>
}

export function CatalogFilters({ selectedCategory, selectedSubcategory, selectedPrice, onlyNew, onlyPromo, onCategoryChange, onSubcategoryChange, onPriceChange, onSpecialChange }) {
  const activeCategory = categories.find((category) => category.slug === selectedCategory)
  return (
    <div className="divide-y divide-ddavi-pastel/35">
      <fieldset className="pb-5"><legend className="component-label mb-3">Categorías</legend><div className="grid gap-1"><FilterOption name="categoria" value="" checked={!selectedCategory} onChange={onCategoryChange}>Todos</FilterOption>{categories.map((category) => <FilterOption key={category.id} name="categoria" value={category.slug} checked={selectedCategory === category.slug} onChange={onCategoryChange}>{category.name}</FilterOption>)}</div></fieldset>
      {activeCategory && <fieldset className="py-5"><legend className="component-label mb-3">Subcategorías</legend><div className="grid gap-1"><FilterOption name="subcategoria" value="" checked={!selectedSubcategory} onChange={onSubcategoryChange}>Todas</FilterOption>{activeCategory.subcategories.map((subcategory) => <FilterOption key={subcategory.id} name="subcategoria" value={subcategory.slug} checked={selectedSubcategory === subcategory.slug} onChange={onSubcategoryChange}>{subcategory.name}</FilterOption>)}</div></fieldset>}
      <fieldset className="py-5"><legend className="component-label mb-3">Precio</legend><div className="grid gap-1">{priceRanges.map((range) => <FilterOption key={range.value || 'todos'} name="precio" value={range.value} checked={selectedPrice === range.value} onChange={onPriceChange}>{range.label}</FilterOption>)}</div></fieldset>
      <fieldset className="pt-5"><legend className="component-label mb-3">Selecciones</legend><div className="grid gap-1"><label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 text-sm font-semibold text-ddavi-muted hover:bg-ddavi-cream"><input type="checkbox" checked={onlyNew} onChange={(event) => onSpecialChange('nuevo', event.target.checked)} className="h-4 w-4 rounded accent-ddavi-primary-dark" />Novedades</label><label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 text-sm font-semibold text-ddavi-muted hover:bg-ddavi-cream"><input type="checkbox" checked={onlyPromo} onChange={(event) => onSpecialChange('promocion', event.target.checked)} className="h-4 w-4 rounded accent-ddavi-primary-dark" />Promociones</label></div></fieldset>
    </div>
  )
}
