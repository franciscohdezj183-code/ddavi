import { SearchX } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductBreadcrumbs } from '../components/product/ProductBreadcrumbs.jsx'
import { ProductCardSwitcher } from '../components/product/ProductCardSwitcher.jsx'
import { ProductFinalCTA } from '../components/product/ProductFinalCTA.jsx'
import { ProductGallery } from '../components/product/ProductGallery.jsx'
import { RelatedProducts } from '../components/product/RelatedProducts.jsx'
import { Container } from '../components/ui.jsx'
import { branches, categories, products } from '../data/mockData.js'

function getRelatedProducts(product) {
  if (!product) return []
  const orderedGroups = [
    products.filter((item) => item.id !== product.id && item.subcategoryId === product.subcategoryId),
    products.filter((item) => item.id !== product.id && item.categoryId === product.categoryId),
    products.filter((item) => item.id !== product.id && item.featured),
  ]
  const related = []
  orderedGroups.flat().forEach((candidate) => {
    if (related.length < 4 && !related.some((item) => item.id === candidate.id)) related.push(candidate)
  })
  return related
}

export function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((item) => String(item.id) === id)
  const category = categories.find((item) => item.id === product?.categoryId)
  const subcategory = category?.subcategories.find((item) => item.id === product?.subcategoryId)
  const relatedProducts = useMemo(() => getRelatedProducts(product), [product])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [id])

  if (!product || !category || !subcategory) {
    return <Container className="py-12 sm:py-20"><section className="mx-auto max-w-2xl rounded-[2rem] bg-white px-6 py-14 text-center shadow-soft"><span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-ddavi-light text-ddavi-primary-dark"><SearchX size={28} /></span><h1 className="mt-6 text-3xl font-black tracking-[-0.04em]">Producto no encontrado</h1><p className="mx-auto mt-3 max-w-md leading-7 text-ddavi-muted">Este producto no está disponible o el enlace ya no existe.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/catalogo" className="btn-primary inline-flex items-center justify-center">Ver catálogo</Link><Link to="/" className="btn-secondary inline-flex items-center justify-center">Volver al inicio</Link></div></section></Container>
  }

  return <div className="bg-ddavi-cream/70"><Container className="py-6 sm:py-8"><ProductBreadcrumbs product={product} category={category} subcategory={subcategory} /><div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:items-start xl:gap-12"><ProductGallery product={product} /><ProductCardSwitcher product={product} category={category} subcategory={subcategory} branches={branches} /></div><div className="mt-10"><RelatedProducts products={relatedProducts} /><ProductFinalCTA /></div></Container></div>
}
