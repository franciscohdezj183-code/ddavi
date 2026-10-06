import { CircleCheck, CircleMinus, MapPin, TriangleAlert } from 'lucide-react'
import { Link } from 'react-router-dom'

const statusConfig = {
  available: { label: 'Disponible', className: 'bg-emerald-50 text-emerald-700', Icon: CircleCheck },
  low: { label: 'Pocas unidades', className: 'bg-amber-50 text-amber-700', Icon: TriangleAlert },
  unavailable: { label: 'No disponible', className: 'bg-zinc-100 text-zinc-600', Icon: CircleMinus },
}

export function BranchAvailability({ product, branches }) {
  const availability = product.branchAvailability ?? []
  return <section className="py-10 sm:py-14" aria-labelledby="availability-title"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">Disponibilidad</p><h2 id="availability-title" className="section-heading">¿Dónde puedes encontrarlo?</h2><p className="mt-2 text-ddavi-muted">Consulta las sucursales donde este producto está disponible.</p></div><Link to="/sucursales" className="btn-secondary inline-flex items-center justify-center self-start">Ver sucursales</Link></div><div className="mt-7 grid gap-4 md:grid-cols-2">{availability.map((item) => { const branch = branches.find((candidate) => candidate.id === item.branchId); const status = statusConfig[item.status] ?? statusConfig.unavailable; if (!branch) return null; const Icon = status.Icon; return <article key={branch.id} className="flex flex-col justify-between gap-5 rounded-[1.5rem] bg-white p-5 ring-1 ring-ddavi-pastel/30 sm:flex-row sm:items-center"><div><h3 className="text-lg font-extrabold">{branch.shortName}</h3><p className="mt-2 flex items-start gap-2 text-sm leading-6 text-ddavi-muted"><MapPin size={16} className="mt-1 shrink-0 text-ddavi-primary-dark" />{branch.address}</p></div><span className={`inline-flex min-h-10 shrink-0 items-center gap-2 self-start rounded-full px-3 text-sm font-bold ${status.className}`}><Icon size={17} />{status.label}</span></article>})}</div><p className="mt-4 text-xs font-semibold text-ddavi-muted">Disponibilidad mostrada con fines demostrativos.</p></section>
}
