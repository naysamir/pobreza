import { SectionHeading } from "@/components/section-heading"
import { acciones } from "@/lib/content"

export function AccionesSection() {
  return (
    <section id="acciones" className="bg-cream py-16 text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              kicker={acciones.kicker}
              title={acciones.title}
              accent="purple"
            />
            <p className="mt-4 leading-relaxed text-ink/80">{acciones.intro}</p>
          </div>
          <a
            href={acciones.ctaHref}
            className="shrink-0 rounded-md bg-purple px-6 py-3 font-display text-xl tracking-wide text-cream shadow-md transition-transform hover:-translate-y-0.5"
          >
            {acciones.ctaLabel}
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {acciones.items.map((item) => (
            <article
              key={item.step}
              className="relative rounded-xl border-2 border-ink bg-white/70 p-6 shadow-[4px_4px_0_0] shadow-ink"
            >
              <span className="font-display text-5xl leading-none tracking-wide text-pink">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-2xl leading-tight tracking-wide text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
