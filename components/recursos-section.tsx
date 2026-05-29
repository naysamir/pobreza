import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { recursos } from "@/lib/content"

export function RecursosSection() {
  return (
    <section id="recursos" className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker={recursos.kicker}
          title={recursos.title}
          accent="lime"
          onDark
          className="max-w-2xl"
        />
        <p className="mt-4 max-w-2xl leading-relaxed text-cream/70">
          {recursos.intro}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {recursos.items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-xl border border-white/10 bg-card p-6 transition-colors hover:border-lime"
            >
              <span className="font-marker text-xs uppercase tracking-wider text-pink">
                {item.label}
              </span>
              <h3 className="mt-2 flex items-start justify-between gap-2 font-display text-2xl leading-tight tracking-wide text-cream">
                {item.title}
                <ArrowUpRight className="size-5 shrink-0 text-lime transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
