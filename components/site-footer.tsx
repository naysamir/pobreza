import { Globe, ArrowRight } from "lucide-react"
import { Icon } from "@/components/icon"
import { brand, socials, footer } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          {/* Marca */}
          <a href="#inicio" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-lime text-ink">
              <Globe className="size-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl leading-none tracking-wide">
              <span className="block text-cream">{brand.name}</span>
              <span className="block text-lime">{brand.nameAccent}</span>
            </span>
          </a>

          {/* Compartir */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-md bg-purple px-3 py-1.5 font-marker text-xs uppercase tracking-wider text-cream">
              {footer.shareText} <ArrowRight className="size-3.5" />
            </span>
            <ul className="flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="grid size-10 place-items-center rounded-full bg-white/10 text-cream transition-colors hover:bg-lime hover:text-ink"
                  >
                    <Icon name={s.icon} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-cream/60">
          {footer.tagline}
        </p>
      </div>
    </footer>
  )
}
