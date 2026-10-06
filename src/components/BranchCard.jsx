import { Check, Clock3, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImagePlaceholder } from './ui.jsx'

export function BranchCard({ branch, compact = true, showActions = true, showSchedule = true, selected = false, onSelect, whatsappUrl = '', onWhatsAppDemo }) {
  const schedule = branch.schedule ?? []
  const compactSchedule = branch.scheduleType === 'known' && schedule[0]
    ? `${schedule[0].days} · ${schedule[0].hours}`
    : branch.scheduleLabel

  return (
    <article className={`interactive-card overflow-hidden rounded-[2rem] bg-white p-4 shadow-soft ring-2 transition ${selected ? 'ring-ddavi-primary-dark' : 'ring-ddavi-pastel/25'}`} aria-current={selected ? 'true' : undefined}>
      {branch.image ? <img src={branch.image} alt={`Sucursal ${branch.shortName}`} className="aspect-[16/9] w-full rounded-[1.6rem] object-cover" /> : <ImagePlaceholder ratio="landscape" label={branch.imageLabel} />}
      <div className="p-3 pt-5">
        <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-extrabold tracking-[-0.025em]">{branch.shortName || branch.name}</h3>{selected && <span className="badge shrink-0 bg-ddavi-light text-ddavi-primary-dark"><Check size={13} className="mr-1" />Seleccionada</span>}</div>
        <div className="mt-4 grid gap-3 text-sm text-ddavi-muted">
          <p className="flex items-start gap-2"><MapPin size={17} className="mt-0.5 shrink-0 text-ddavi-primary-dark" />{branch.address}</p>
          {showSchedule && (compact ? <p className="flex items-start gap-2"><Clock3 size={17} className="mt-0.5 shrink-0 text-ddavi-primary-dark" />{compactSchedule}</p> : branch.scheduleType === 'known' ? schedule.map((item) => <p key={item.days} className="flex items-start gap-2"><Clock3 size={17} className="mt-0.5 shrink-0 text-ddavi-primary-dark" /><span><strong className="block text-ddavi-text">{item.days}</strong>{item.hours}</span></p>) : <p className="flex items-start gap-2"><Clock3 size={17} className="mt-0.5 shrink-0 text-ddavi-primary-dark" />{branch.scheduleLabel}</p>)}
        </div>
        {showActions && <div className="mt-5 flex flex-wrap gap-2">
          {onSelect ? <button type="button" onClick={() => onSelect(branch)} aria-pressed={selected} className="btn-secondary inline-flex min-h-11 items-center px-4 py-2">Ver información</button> : <Link to={`/sucursales?sucursal=${branch.slug}`} className="btn-secondary inline-flex min-h-11 items-center px-4 py-2">Ver información</Link>}
          <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex min-h-11 items-center px-4 py-2">Cómo llegar</a>
          {!compact && (whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ddavi-primary-dark px-4 py-2 text-sm font-bold text-white"><MessageCircle size={16} />WhatsApp</a> : <button type="button" onClick={onWhatsAppDemo} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ddavi-light px-4 py-2 text-sm font-bold text-ddavi-primary-dark"><MessageCircle size={16} />WhatsApp</button>)}
        </div>}
      </div>
    </article>
  )
}
