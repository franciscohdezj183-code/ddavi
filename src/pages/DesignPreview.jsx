import { useState } from 'react'
import { Check, Heart, Sparkles, Star } from 'lucide-react'
import { Brand } from '../components/Brand.jsx'
import { Badge, CategoryChip, Container, ImagePlaceholder, PrimaryButton, ProductCard, SecondaryButton, SectionTitle } from '../components/ui.jsx'
import { branches, categories, products, promotions } from '../data/mockData.js'

const colors = [
  ['Principal', '#FA1BE2', 'bg-ddavi-primary'], ['Principal oscuro', '#C83D9A', 'bg-ddavi-primary-dark'],
  ['Acento', '#E11397', 'bg-ddavi-accent'], ['Rosa pastel', '#F2B3C3', 'bg-ddavi-pastel'],
  ['Rosa muy claro', '#FBE8F0', 'bg-ddavi-light'], ['Crema', '#F7F2E4', 'bg-ddavi-cream'],
]

const badgeSamples = [['Nuevo', 'new'], ['Promoción', 'promo'], ['Disponible', 'available'], ['Agotado', 'soldout']]

export function DesignPreview() {
  const [activeCategory, setActiveCategory] = useState(categories[0].slug)

  return (
    <main className="min-h-screen overflow-hidden bg-ddavi-cream text-ddavi-text">
      <header className="border-b border-ddavi-pastel/35 bg-white/90 backdrop-blur">
        <Container className="flex min-h-18 items-center justify-between gap-4 py-3">
          <Brand compact />
          <span className="rounded-full border border-ddavi-pastel/55 bg-ddavi-light/60 px-3 py-2 text-xs font-extrabold text-ddavi-primary-dark">Vista de estilo</span>
        </Container>
      </header>

      <section id="inicio" className="hero-grid relative bg-white">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ddavi-pastel/55 bg-white/80 px-3 py-2 text-sm font-bold text-ddavi-primary-dark shadow-sm"><Sparkles size={16} aria-hidden="true" /> Identidad visual · Fase 1</div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-ddavi-accent">D Davi Novedades</p>
            <h1 className="max-w-3xl text-[clamp(2.6rem,10vw,5.6rem)] font-black leading-[0.96] tracking-[-0.055em]">Detalles que hacen <span className="text-ddavi-primary-dark">especial</span> cada día.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-ddavi-muted sm:text-lg sm:leading-8">Una base fresca, femenina y comercial donde el color acompaña al producto sin robarle protagonismo.</p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row sm:flex-row">
              <PrimaryButton onClick={() => document.querySelector('#componentes')?.scrollIntoView()}>Explorar estilo</PrimaryButton>
              <SecondaryButton onClick={() => document.querySelector('#productos')?.scrollIntoView()}>Ver productos</SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <SectionTitle eyebrow="Paleta base" title="Color con intención" description="Fondos luminosos, superficies suaves y acentos vibrantes para dirigir la mirada hacia lo importante." action={<span className="text-sm font-semibold text-ddavi-muted">70% claro · 20% suave · 10% acento</span>} />
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {colors.map(([name, hex, colorClass]) => <article key={hex} className="rounded-[1.6rem] bg-white p-3 shadow-soft ring-1 ring-black/[0.025]"><div className={`aspect-square rounded-[1.15rem] ${colorClass}`} /><p className="mt-3 text-sm font-extrabold">{name}</p><p className="mt-0.5 text-xs font-medium text-ddavi-muted">{hex}</p></article>)}
          </div>
        </Container>
      </section>

      <section id="componentes" className="bg-white py-14 sm:py-18">
        <Container>
          <SectionTitle eyebrow="Sistema de interfaz" title="Componentes que hablan el mismo idioma" description="Estados claros, esquinas suaves y controles cómodos para usar desde el celular." />
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-ddavi-cream p-5 sm:p-7">
              <p className="component-label">Botones</p>
              <div className="mt-4 flex flex-wrap gap-3"><PrimaryButton>Acción principal</PrimaryButton><SecondaryButton>Acción secundaria</SecondaryButton><PrimaryButton disabled>Desactivado</PrimaryButton></div>
              <div className="my-7 h-px bg-ddavi-pastel/50" /><p className="component-label">Categorías</p>
              <div className="mt-4 flex flex-wrap gap-2">{categories.map((category) => <CategoryChip key={category.id} active={activeCategory === category.slug} onClick={() => setActiveCategory(category.slug)}>{category.name}</CategoryChip>)}</div>
            </div>
            <div className="rounded-[2rem] bg-ddavi-light/65 p-5 sm:p-7">
              <p className="component-label">Badges</p><div className="mt-4 flex flex-wrap gap-2">{badgeSamples.map(([label, variant]) => <Badge key={label} variant={variant}>{label}</Badge>)}</div>
              <div className="my-7 h-px bg-ddavi-pastel/65" /><p className="component-label">Tipografía</p>
              <p className="mt-4 text-3xl font-black tracking-[-0.04em]">Novedades con personalidad.</p><p className="mt-3 leading-7 text-ddavi-muted">Textos claros y legibles para mostrar productos, precios y mensajes breves.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="productos" className="py-14 sm:py-18">
        <Container>
          <SectionTitle eyebrow="Tarjetas de producto" title="Lo nuevo, sin ruido visual" description="La imagen ocupa el centro; la información necesaria queda ordenada y fácil de recorrer." action={<SecondaryButton>Ver colección</SecondaryButton>} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </Container>
      </section>

      <section className="bg-ddavi-primary-dark py-14 text-white sm:py-18">
        <Container><div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-ddavi-pastel">Placeholder hero</p><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Un espacio amplio para promociones.</h2><p className="mt-4 max-w-lg leading-7 text-white/75">{promotions[0].description}</p><div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/85"><span className="inline-flex items-center gap-2"><Check size={17} /> Proporción estable</span><span className="inline-flex items-center gap-2"><Check size={17} /> Texto legible</span></div></div>
          <ImagePlaceholder ratio="hero" label={promotions[0].imageLabel} className="border-white/20 bg-white/95 text-ddavi-muted" />
        </div></Container>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <Container>
          <SectionTitle eyebrow="Placeholders flexibles" title="Una proporción para cada historia" description="Los espacios de imagen mantienen el ritmo visual mientras se prepara el contenido fotográfico final." />
          <div className="mt-8 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4"><div><ImagePlaceholder ratio="square" /><p className="placeholder-caption">Square · Producto</p></div><div><ImagePlaceholder ratio="portrait" label="Galería del producto" /><p className="placeholder-caption">Portrait · Galería</p></div><div className="sm:col-span-2"><ImagePlaceholder ratio="landscape" label="Banner principal" /><p className="placeholder-caption">Landscape · Banner</p></div></div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container><SectionTitle eyebrow="Sucursales" title="Ubicaciones D Davi" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">{branches.map((branch, index) => <article key={branch.id} className="grid grid-cols-[7rem_1fr] items-center gap-4 rounded-[1.8rem] bg-white p-3 shadow-soft sm:grid-cols-[9rem_1fr]"><ImagePlaceholder ratio="square" label={branch.imageLabel} className="rounded-[1.25rem] p-3" /><div><span className="mb-2 inline-flex items-center gap-1 text-xs font-bold text-ddavi-accent"><Star size={14} fill="currentColor" /> Sucursal {String(index + 1).padStart(2, '0')}</span><h3 className="text-lg font-extrabold">{branch.shortName}</h3><p className="mt-1 text-sm leading-6 text-ddavi-muted">{branch.address}</p></div></article>)}</div>
        </Container>
      </section>

      <footer className="border-t border-ddavi-pastel/40 bg-white py-9">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><Brand compact /><p className="inline-flex items-center gap-2 text-sm font-semibold text-ddavi-muted"><Heart size={16} className="text-ddavi-accent" aria-hidden="true" /> Guía visual · Fase 1</p></Container>
      </footer>
    </main>
  )
}
