import { Link } from 'react-router-dom'
import { businessConfig } from '../config/businessConfig.js'

export function Brand({ compact = false }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center rounded-xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ddavi-primary/40" aria-label={`${businessConfig.name}, ir al inicio`}>
      <img src="/logo.png" alt={businessConfig.name} className={compact ? 'h-12 w-auto object-contain sm:h-14' : 'h-14 w-auto object-contain sm:h-16'} />
    </Link>
  )
}
