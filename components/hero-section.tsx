import { ArrowDown, Megaphone, Users, HeartHandshake, Lightbulb } from "lucide-react"
import { hero } from "@/lib/content"

const highlightIcons = [Users, HeartHandshake, Lightbulb]

const colorMap = {
  lime: "bg-lime text-ink",
  purple: "bg-purple text-cream",
  pink: "bg-pink text-ink",
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink pb-16 pt-10 sm:pt-14"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8">
        {/* Texto */}
        <div className="relative z-10">
          <h1 className="title-graffiti text-7xl text-lime sm:text-8xl xl:text-9xl">
            {hero.title}
          </h1>

          <div className="mt-6 inline-block -rotate-1.5 rounded-md bg-cream px-4 py-3 shadow-lg">
            <p className="font-display text-2xl leading-tight tracking-wide text-ink sm:text-3xl">
              {hero.subtitlePlain}{" "}
              <span className="text-purple underline decoration-purple decoration-4 underline-offset-4">
                {hero.subtitleAccent}
              </span>
            </p>
          </div>

          <p className="mt-6 max-w-md text-pretty leading-relaxed text-cream/80">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {hero.buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`rounded-md px-6 py-3 font-display text-xl tracking-wide shadow-md transition-transform hover:-translate-y-0.5 ${
                  btn.variant === "lime"
                    ? "bg-lime text-ink"
                    : "bg-purple text-cream"
                }`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* círculo morado de fondo */}
          <div
            className="absolute left-1/2 top-1/2 -z-0 size-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple"
            aria-hidden="true"
          />
          <img
            src={hero.imageSrc || "/placeholder.svg"}
            alt={hero.imageAlt}
            className="relative z-10 mx-auto w-full max-w-sm object-contain grayscale lg:max-w-md"
          />

          {/* cartel de cartón */}
          <div className="absolute bottom-2 left-2 z-20 max-w-[60%] -rotate-3 rounded-sm bg-[#c9a36a] px-4 py-3 shadow-xl sm:bottom-6 sm:left-6">
            <p className="font-marker text-sm leading-tight text-[#3a2a14] sm:text-base">
              {hero.signText}
            </p>
          </div>

          {/* sticker rosado */}
          <div className="absolute -top-2 right-0 z-20 max-w-[44%] rotate-3 rounded-xl bg-pink p-3 text-ink shadow-xl sm:-top-4 sm:p-4">
            <Megaphone className="mb-1 size-6" strokeWidth={2.5} />
            <p className="font-display text-base leading-tight tracking-wide sm:text-lg">
              {hero.stickerText}
            </p>
          </div>
        </div>
      </div>

      {/* Pastillas de recorrido */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center gap-3 px-4 sm:px-6">
        {hero.highlights.map((h, i) => {
          const Icon = highlightIcons[i % highlightIcons.length]
          return (
            <span
              key={h.label}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold ${colorMap[h.color]}`}
            >
              <Icon className="size-5" strokeWidth={2.5} />
              {h.label}
            </span>
          )
        })}
        <a
          href="#problema"
          className="ml-auto hidden items-center gap-2 text-cream/70 transition-colors hover:text-lime sm:flex"
        >
          Desliza para conocer más <ArrowDown className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
