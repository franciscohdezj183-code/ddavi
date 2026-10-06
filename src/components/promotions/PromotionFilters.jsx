const filters = [
  { value: '', label: 'Todas' }, { value: 'activas', label: 'Activas' }, { value: 'temporada', label: 'Temporada' },
  { value: 'novedades', label: 'Novedades' }, { value: 'destacadas', label: 'Destacadas' },
]

export function PromotionFilters({ activeFilter, onChange }) {
  return <div className="overflow-x-auto pb-2" aria-label="Filtros de promociones"><div className="flex min-w-max gap-2">{filters.map((filter) => <button key={filter.value || 'todas'} type="button" onClick={() => onChange(filter.value)} aria-pressed={activeFilter === filter.value} className={`category-chip ${activeFilter === filter.value ? 'category-chip-active' : ''}`}>{filter.label}</button>)}</div></div>
}
