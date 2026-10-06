import { ArrowLeft, CircleCheck, CircleMinus, MapPin, Tag, TriangleAlert } from 'lucide-react'
import { Link } from 'react-router-dom'

const statusConfig = {
  available: { label: 'Disponible', className: 'bg-emerald-50 text-emerald-700', Icon: CircleCheck },
  low: { label: 'Pocas unidades', className: 'bg-amber-50 text-amber-700', Icon: TriangleAlert },
  unavailable: { label: 'No disponible', className: 'bg-zinc-100 text-zinc-600', Icon: CircleMinus },
}

export function ProductDetailsCard({ product, category, subcategory, branches, onBack, transitionDisabled = false }) {
  const availability = product.branchAvailability ?? []

  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="section-kicker">Conoce tu elección</p>
          <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">Detalles del producto</h2>
        </div>
        <button type="button" onClick={onBack} disabled={transitionDisabled} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ddavi-pastel text-ddavi-primary-dark transition hover:bg-ddavi-light disabled:pointer-events-none disabled:opacity-50" aria-label="Volver a la información principal">
          <ArrowLeft size={19} aria-hidden="true" />
        </button>
      </div>

      <p className="mt-4 text-sm leading-7 text-ddavi-muted">{product.description}</p>

      <dl className="mt-5 flex flex-wrap gap-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-ddavi-light/55 px-3 py-2">
          <Tag size={14} className="text-ddavi-primary-dark" />
          <dt className="text-xs font-bold text-ddavi-muted">Categoría</dt>
          <dd className="text-xs font-extrabold">{category.name}</dd>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-ddavi-light/55 px-3 py-2">
          <Tag size={14} className="text-ddavi-primary-dark" />
          <dt className="text-xs font-bold text-ddavi-muted">Subcategoría</dt>
          <dd className="text-xs font-extrabold">{subcategory.name}</dd>
        </div>
      </dl>

      <div className="my-5 border-t border-ddavi-pastel/35" />

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Disponibilidad</p>
          <h3 className="text-xl font-black tracking-[-0.04em]">¿Dónde puedes encontrarlo?</h3>
        </div>
        <Link to="/sucursales" className="shrink-0 text-xs font-extrabold text-ddavi-primary-dark transition hover:text-ddavi-accent">Ver sucursales</Link>
      </div>

      <div className="mt-4 divide-y divide-ddavi-pastel/30 rounded-2xl border border-ddavi-pastel/35 px-4">
        {availability.map((item) => {
          const branch = branches.find((candidate) => candidate.id === item.branchId)
          const status = statusConfig[item.status] ?? statusConfig.unavailable
          if (!branch) return null
          const Icon = status.Icon
          return (
            <section key={branch.id} className="py-3.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-extrabold">{branch.shortName}</h4>
                  <p className="mt-1 flex items-start gap-1.5 text-xs leading-5 text-ddavi-muted"><MapPin size={13} className="mt-0.5 shrink-0 text-ddavi-primary-dark" />{branch.address}</p>
                </div>
                <span className={`inline-flex min-h-8 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-xs font-bold ${status.className}`}><Icon size={14} />{status.label}</span>
              </div>
            </section>
          )
        })}
      </div>
      <p className="mt-3 text-[0.7rem] font-semibold text-ddavi-muted">Disponibilidad mostrada con fines demostrativos.</p>
    </article>
  )
}
