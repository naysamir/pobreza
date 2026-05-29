"use client"

import { useState } from "react"
import { Globe, Menu, X } from "lucide-react"
import { brand, navLinks } from "@/lib/content"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-lime text-ink">
            <Globe className="size-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl leading-none tracking-wide">
            <span className="block text-cream">{brand.name}</span>
            <span className="block text-lime">{brand.nameAccent}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-semibold uppercase tracking-wide text-cream/80 transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden rounded-md border-2 border-lime bg-lime px-5 py-2 font-display text-lg tracking-wide text-ink transition-transform hover:-rotate-2 sm:inline-block"
          >
            ÚNETE
          </a>
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-md border border-white/20 text-cream lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          className="border-t border-white/10 bg-ink px-4 py-4 lg:hidden"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 font-semibold uppercase tracking-wide text-cream/90 hover:bg-white/5 hover:text-lime"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
