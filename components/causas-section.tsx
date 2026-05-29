import { SectionHeading } from "@/components/section-heading"
import { Icon } from "@/components/icon"
import { causas } from "@/lib/content"

const accents = ["lime", "purple", "pink"] as const

const iconBg = {
  lime: "bg-lime text-ink",
  purple: "bg-purple text-cream",
  pink: "bg-pink text-ink",
}

export function CausasSection() {
  return (
    <section id="causas" className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker={causas.kicker}
          title={causas.title}
          accent="pink"
          onDark
          className="max-w-2xl"
        />
        <p className="mt-4 max-w-2xl leading-relaxed text-cream/70">
          {causas.intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {causas.items.map((item, i) => {
            const accent = accents[i % accents.length]
            return (
              <article
                key={item.title}
                className="group rounded-xl border border-white/10 bg-card p-6 transition-colors hover:border-white/30"
              >
                <span
                  className={`grid size-12 place-items-center rounded-lg ${iconBg[accent]}`}
                >
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-wide text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {item.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
