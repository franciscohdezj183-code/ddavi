import { Container } from './ui.jsx'

export function PageIntro({ eyebrow, title, description, children }) {
  return (
    <section className="border-b border-ddavi-pastel/35 bg-white">
      <Container className="py-10 sm:py-14">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ddavi-muted sm:text-lg">{description}</p>
        {children}
      </Container>
    </section>
  )
}
