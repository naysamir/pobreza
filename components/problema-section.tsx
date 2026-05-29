import { SectionHeading } from "@/components/section-heading"
import { problema } from "@/lib/content"

const numColor = {
  lime: "text-ink [--brush-color:var(--lime)] brush",
  purple: "text-purple",
  pink: "text-pink",
}

export function ProblemaSection() {
  return (
    <section
      id="problema"
      className="torn-top relative -mt-2 bg-cream py-16 text-ink"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Definición */}
          <div className="lg:col-span-4">
            <SectionHeading
              kicker={problema.kicker}
              title={problema.title}
              accent="purple"
            />
            <div className="mt-5 space-y-4">
              {problema.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
            {problema.stats.map((stat) => (
              <div
                key={stat.text}
                className="rounded-xl border-2 border-ink/10 bg-white/60 p-5 shadow-sm"
              >
                <p
                  className={`font-display text-4xl leading-none tracking-wide sm:text-5xl ${numColor[stat.color]}`}
                >
                  {stat.number}
                </p>
                {stat.unit && (
                  <p className="mt-1 font-display text-xl tracking-wide text-ink">
                    {stat.unit}
                  </p>
                )}
                <p className="mt-3 text-sm font-medium leading-relaxed text-ink/70">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
