import { ArrowLeft, ArrowRight, Clock3, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function getMapUrl(branch) {
  const query = `${branch.coordinates.lat},${branch.coordinates.lng}`
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`
}

export function BranchInformation({ branch, whatsappUrl, onPrevious, onNext, currentIndex = 0, total = 1 }) {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-ddavi-light" aria-labelledby="branch-information-title">
      <iframe
        key={branch.id}
        title={`Mapa de la sucursal ${branch.shortName}`}
        src={getMapUrl(branch)}
        className="branch-map-frame block border-0"
        loading="eager"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-ddavi-text/10" aria-hidden="true" />

      <div className="branch-info-layout pointer-events-none relative z-10">
        <article key={branch.id} className="branch-info-card branch-preview-content pointer-events-auto rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(57,38,50,0.24)] ring-1 ring-ddavi-pastel/30 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="section-kicker">Información ampliada</p>
              <h1 id="branch-information-title" className="mt-1 text-3xl font-black tracking-[-0.045em]">{branch.name}</h1>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="mr-1 text-xs font-extrabold tabular-nums text-ddavi-muted">{currentIndex + 1} / {total}</span>
              <button type="button" onClick={onPrevious} className="grid h-10 w-10 place-items-center rounded-full border border-ddavi-pastel bg-white text-ddavi-text transition hover:border-ddavi-primary hover:text-ddavi-primary-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/45" aria-label="Ver sucursal anterior"><ArrowLeft size={18} aria-hidden="true" /></button>
              <button type="button" onClick={onNext} className="grid h-10 w-10 place-items-center rounded-full bg-ddavi-primary-dark text-white shadow-brand transition hover:bg-ddavi-accent focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/45" aria-label="Ver siguiente sucursal"><ArrowRight size={18} aria-hidden="true" /></button>
            </div>
          </div>

          <p className="mt-4 flex items-start gap-3 leading-7 text-ddavi-muted"><MapPin size={20} className="mt-1 shrink-0 text-ddavi-primary-dark" aria-hidden="true" />{branch.address}</p>

          <div className="mt-4 border-t border-ddavi-pastel/40 pt-4">
            <h2 className="text-sm font-black uppercase tracking-[0.14em]">Horario</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {branch.scheduleType === 'known'
                ? branch.schedule.map((item) => <p key={item.days} className="flex items-start gap-3 text-sm leading-6 text-ddavi-muted"><Clock3 size={17} className="mt-1 shrink-0 text-ddavi-primary-dark" aria-hidden="true" /><span><strong className="block text-ddavi-text">{item.days}</strong>{item.hours}</span></p>)
                : <p className="flex items-start gap-3 text-sm leading-6 text-ddavi-muted sm:col-span-2"><Clock3 size={17} className="mt-1 shrink-0 text-ddavi-primary-dark" aria-hidden="true" />{branch.scheduleLabel}</p>}
            </div>
          </div>

          <a href={`tel:+52${branch.phone}`} className="mt-5 inline-flex items-center gap-3 text-sm text-ddavi-muted transition hover:text-ddavi-primary-dark"><Phone size={17} className="text-ddavi-primary-dark" aria-hidden="true" />{branch.phoneDisplay}</a>

          <div className="mt-5 flex flex-wrap gap-2">
            <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex min-h-10 items-center gap-2 px-4 py-2 text-xs" aria-label={`Cómo llegar a la sucursal ${branch.shortName} en Google Maps`}><Navigation size={17} aria-hidden="true" />Cómo llegar</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex min-h-10 items-center gap-2 px-4 py-2 text-xs" aria-label={`Contactar por WhatsApp a la sucursal ${branch.shortName}`}><MessageCircle size={17} aria-hidden="true" />Preguntar por WhatsApp</a>
            <Link to="/catalogo" className="btn-secondary inline-flex min-h-10 items-center px-4 py-2 text-xs">Explorar productos</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
