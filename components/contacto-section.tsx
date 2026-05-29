"use client"

import { useState, type FormEvent } from "react"
import { Mail, Send, CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { contacto } from "@/lib/content"

export function ContactoSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Aquí puedes conectar el envío a tu backend, email o servicio.
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-pink py-16 text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        {/* Texto */}
        <div>
          <SectionHeading
            kicker={contacto.kicker}
            title={contacto.title}
            accent="purple"
          />
          <p className="mt-4 max-w-md leading-relaxed text-ink/80">
            {contacto.intro}
          </p>

          <a
            href={`mailto:${contacto.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-5" />
            {contacto.email}
          </a>

          <p className="mt-8 font-display text-3xl leading-tight tracking-wide text-ink sm:text-4xl">
            {contacto.closingPlain}{" "}
            <span className="text-cream">{contacto.closingAccent}</span>
          </p>
        </div>

        {/* Formulario */}
        <div className="rounded-2xl border-2 border-ink bg-cream p-6 shadow-[6px_6px_0_0] shadow-ink sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="size-12 text-purple" strokeWidth={2.5} />
              <p className="font-display text-2xl tracking-wide text-ink">
                {contacto.form.successMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-1 block text-sm font-semibold text-ink"
                >
                  {contacto.form.nameLabel}
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder={contacto.form.namePlaceholder}
                  className="w-full rounded-md border-2 border-ink/20 bg-white px-4 py-2.5 text-ink outline-none placeholder:text-ink/40 focus:border-purple"
                />
              </div>
              <div>
                <label
                  htmlFor="correo"
                  className="mb-1 block text-sm font-semibold text-ink"
                >
                  {contacto.form.emailLabel}
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  placeholder={contacto.form.emailPlaceholder}
                  className="w-full rounded-md border-2 border-ink/20 bg-white px-4 py-2.5 text-ink outline-none placeholder:text-ink/40 focus:border-purple"
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-1 block text-sm font-semibold text-ink"
                >
                  {contacto.form.messageLabel}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  placeholder={contacto.form.messagePlaceholder}
                  className="w-full resize-none rounded-md border-2 border-ink/20 bg-white px-4 py-2.5 text-ink outline-none placeholder:text-ink/40 focus:border-purple"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-purple px-6 py-3 font-display text-xl tracking-wide text-cream transition-transform hover:-translate-y-0.5"
              >
                <Send className="size-5" />
                {contacto.form.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
