import { useEffect, useRef, useState } from 'react'
import { ProductDetailsCard } from './ProductDetailsCard.jsx'
import { ProductInfo } from './ProductInfo.jsx'

export function ProductCardSwitcher({ product, category, subcategory, branches }) {
  const [panel, setPanel] = useState('summary')
  const [phase, setPhase] = useState('idle')
  const timersRef = useRef([])

  useEffect(() => {
    setPanel('summary')
    setPhase('idle')
  }, [product.id])

  useEffect(() => () => timersRef.current.forEach((timer) => window.clearTimeout(timer)), [])

  const changePanel = (nextPanel) => {
    if (phase !== 'idle' || panel === nextPanel) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setPanel(nextPanel)
      return
    }

    setPhase('exit')
    timersRef.current.push(window.setTimeout(() => {
      setPanel(nextPanel)
      setPhase('enter')
      timersRef.current.push(window.setTimeout(() => setPhase('idle'), 30))
    }, 380))
  }

  const motionClass = phase === 'exit'
    ? 'translate-x-[115%] opacity-0'
    : phase === 'enter'
      ? '-translate-x-[115%] opacity-0'
      : 'translate-x-0 opacity-100'

  return (
    <div className="self-start overflow-hidden lg:sticky lg:top-28" aria-live="polite">
      <div className={`transition-[transform,opacity] duration-[380ms] ease-in-out ${motionClass}`}>
        {panel === 'summary'
          ? <ProductInfo product={product} onLearnMore={() => changePanel('details')} transitionDisabled={phase !== 'idle'} />
          : <ProductDetailsCard product={product} category={category} subcategory={subcategory} branches={branches} onBack={() => changePanel('summary')} transitionDisabled={phase !== 'idle'} />}
      </div>
    </div>
  )
}
