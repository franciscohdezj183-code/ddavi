import { ArrowRight, Check, MessageCircle, Share2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { businessConfig } from '../../config/businessConfig.js'
import { buildProductMessage, buildWhatsAppUrl, shareProduct } from '../../utils/productMessaging.js'
import { Badge } from '../ui.jsx'

export function ProductInfo({ product, onLearnMore, transitionDisabled = false }) {
  const colors = product.variants?.colors ?? []
  const [selectedColor, setSelectedColor] = useState(colors[0]?.id ?? '')
  const [feedback, setFeedback] = useState('')
  useEffect(() => { setSelectedColor(colors[0]?.id ?? ''); setFeedback('') }, [product.id])
  const selectedColorName = colors.find((color) => color.id === selectedColor)?.name ?? ''
  const currentUrl = typeof window === 'undefined' ? '' : window.location.href
  const message = useMemo(() => buildProductMessage(product, selectedColorName ? `color ${selectedColorName}` : '', currentUrl), [currentUrl, product, selectedColorName])
  const whatsappUrl = buildWhatsAppUrl(businessConfig.whatsapp, message)

  const handleShare = async () => {
    try {
      const result = await shareProduct({ title: product.name, text: product.shortDescription, url: currentUrl })
      setFeedback(result === 'copied' ? 'Enlace copiado' : 'Producto compartido')
    } catch (error) {
      if (error?.name !== 'AbortError') setFeedback('No fue posible compartir el enlace')
    }
  }

  const whatsappClassName = 'btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto'
  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
      <div className="flex items-center justify-between gap-4">
        {product.badge ? <Badge variant={product.badgeVariant}>{product.badge}</Badge> : <span />}
        <button type="button" onClick={onLearnMore} disabled={transitionDisabled} className="inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-ddavi-primary-dark transition hover:text-ddavi-accent disabled:pointer-events-none disabled:opacity-50">Conocer más <ArrowRight size={17} aria-hidden="true" /></button>
      </div>
      <h1 className="mt-4 text-3xl font-black tracking-[-0.045em] sm:text-4xl xl:text-5xl">{product.name}</h1>
      <div className="mt-4 flex flex-wrap items-baseline gap-3">{product.previousPrice && <span className="text-lg font-bold text-ddavi-muted line-through">{product.previousPrice}</span>}<p className="text-4xl font-black text-ddavi-accent">{product.price}</p></div>
      <p className="mt-5 max-w-xl text-base leading-7 text-ddavi-muted">{product.shortDescription}</p>
      {colors.length > 0 && <fieldset className="mt-7"><legend className="text-sm font-extrabold">Color: <span className="font-semibold text-ddavi-muted">{selectedColorName}</span></legend><div className="mt-3 flex flex-wrap gap-2">{colors.map((color) => <button key={color.id} type="button" aria-pressed={selectedColor === color.id} onClick={() => setSelectedColor(color.id)} className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-bold transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/40 ${selectedColor === color.id ? 'border-ddavi-primary-dark bg-ddavi-light text-ddavi-primary-dark' : 'border-ddavi-pastel/60 bg-white text-ddavi-muted hover:border-ddavi-primary-dark/40'}`}>{selectedColor === color.id && <Check size={16} aria-hidden="true" />}{color.name}</button>)}</div></fieldset>}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">{whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noreferrer" className={whatsappClassName}><MessageCircle size={19} />Preguntar por WhatsApp</a> : <button type="button" className={whatsappClassName} onClick={() => setFeedback('WhatsApp aún no está configurado')}><MessageCircle size={19} />Preguntar por WhatsApp</button>}<button type="button" className="btn-secondary inline-flex items-center justify-center gap-2" onClick={handleShare}><Share2 size={18} />Compartir</button></div>
      <p className="mt-3 min-h-6 text-sm font-semibold text-ddavi-primary-dark" role="status" aria-live="polite">{feedback}</p>
    </article>
  )
}
