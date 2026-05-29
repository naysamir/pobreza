import { SectionHeading } from "@/components/section-heading"
import { Icon } from "@/components/icon"
import { impacto } from "@/lib/content"

export function ImpactoSection() {
  return (
    <section id="impacto" className="bg-purple py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker={impacto.kicker}
          title={impacto.title}
          accent="lime"
          onDark
          className="max-w-2xl"
        />
        <p className="mt-4 max-w-2xl leading-relaxed text-cream/85">
          {impacto.intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impacto.items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl bg-ink/40 p-6 ring-1 ring-white/15"
            >
              <span className="grid size-12 place-items-center rounded-lg bg-lime text-ink">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight tracking-wide text-cream">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
