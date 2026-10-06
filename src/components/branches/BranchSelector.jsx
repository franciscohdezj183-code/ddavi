export function BranchSelector({ branches, selectedSlug, onSelect }) {
  return <div className="overflow-x-auto pb-2" aria-label="Seleccionar sucursal"><div className="flex min-w-max gap-2">{branches.map((branch) => <button key={branch.id} type="button" aria-pressed={selectedSlug === branch.slug} onClick={() => onSelect(branch)} className={`category-chip ${selectedSlug === branch.slug ? 'category-chip-active' : ''}`}>{branch.shortName}</button>)}</div></div>
}
