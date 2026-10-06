import { Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const cx = (...classes) => classes.filter(Boolean).join(' ')

export function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return <Tag className={cx('mx-auto w-full max-w-none px-5 sm:px-8 lg:px-12 xl:px-16', className)} {...props}>{children}</Tag>
}

export function PrimaryButton({ children, className = '', ...props }) {
  return <button className={cx('btn-primary', className)} {...props}>{children}</button>
}

export function SecondaryButton({ children, className = '', ...props }) {
  return <button className={cx('btn-secondary', className)} {...props}>{children}</button>
}

export function SectionTitle({ eyebrow, title, description, action, className = '' }) {
  return (
    <div className={cx('flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between', className)}>
      <div className="max-w-2xl">
        {eyebrow && <p className="section-kicker">{eyebrow}</p>}
        <h2 className="section-heading">{title}</h2>
        {description && <p className="mt-2 max-w-xl leading-7 text-ddavi-muted">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

const imageRatios = {
  square: 'aspect-square', portrait: 'aspect-[4/5]', landscape: 'aspect-[16/9]', hero: 'min-h-64 sm:min-h-80',
}

export function ImagePlaceholder({ ratio = 'square', label = 'Imagen del producto', className = '' }) {
  return (
    <div className={cx('image-placeholder grid w-full place-items-center overflow-hidden rounded-[1.6rem] border border-ddavi-pastel/60 bg-ddavi-light/55 p-5 text-center', imageRatios[ratio] ?? imageRatios.square, className)} role="img" aria-label={label}>
      <div className="relative z-10">
        <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-white text-ddavi-primary-dark shadow-sm">
          <ImageIcon size={21} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <p className="text-sm font-bold text-ddavi-muted">{label}</p>
      </div>
    </div>
  )
}

const badgeVariants = {
  new: 'bg-ddavi-light text-ddavi-primary-dark', promo: 'bg-ddavi-primary-dark text-white',
  available: 'bg-emerald-50 text-emerald-700', soldout: 'bg-zinc-100 text-zinc-500',
}

export function Badge({ children, variant = 'new' }) {
  return <span className={cx('badge', badgeVariants[variant])}>{children}</span>
}

export function CategoryChip({ children, active = false, onClick }) {
  return <button type="button" className={cx('category-chip', active && 'category-chip-active')} aria-pressed={active} onClick={onClick}>{children}</button>
}

export function ProductCard({ product }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-ddavi-pastel/25 transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative">
        {product.image ? (
          <img src={product.image} alt={product.imageLabel || product.name} className="aspect-[4/5] w-full bg-white object-contain" loading="lazy" decoding="async" />
        ) : (
          <ImagePlaceholder ratio="portrait" label={product.imageLabel} className="rounded-none border-0" />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent" aria-hidden="true" />
        <span className="pointer-events-none absolute right-5 top-3 z-30 inline-flex min-h-10 items-center text-sm font-bold text-ddavi-primary-dark transition group-hover:text-ddavi-accent">
          Ver
        </span>
      </div>
      <div className="relative z-10 -mt-4 flex flex-1 flex-col px-5 pb-5 pt-0">
        <h3 className="text-lg font-extrabold tracking-[-0.02em]">{product.name}</h3>
        <p className="mt-2 text-xl font-extrabold text-ddavi-accent">{product.price}</p>
      </div>
      <Link to={`/producto/${product.id}`} className="absolute inset-0 z-20 rounded-[2rem] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ddavi-primary/40" aria-label={`Ver ${product.name}`}>
        <span className="sr-only">Ver {product.name}</span>
      </Link>
    </article>
  )
}
