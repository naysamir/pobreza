/** Encabezado reutilizable: kicker pequeño + título tipo graffiti.
 *  La última palabra del título se resalta con un trazo de color. */
export function SectionHeading({
  kicker,
  title,
  accent = "lime",
  className = "",
  onDark = false,
}: {
  kicker: string
  title: string
  accent?: "lime" | "purple" | "pink"
  className?: string
  onDark?: boolean
}) {
  const accentColor = {
    lime: "text-lime",
    purple: "text-purple",
    pink: "text-pink",
  }[accent]

  return (
    <div className={className}>
      <span
        className={`inline-block rounded-full px-3 py-1 font-marker text-xs uppercase tracking-wider ${
          onDark ? "bg-lime text-ink" : "bg-ink text-lime"
        }`}
      >
        {kicker}
      </span>
      <h2
        className={`mt-3 font-display text-4xl leading-none tracking-wide sm:text-5xl ${
          onDark ? "text-cream" : "text-ink"
        }`}
      >
        {title.split(" ").map((word, i, arr) => {
          // Resalta las palabras escritas en MAYÚSCULAS (la palabra clave).
          const isKey = word.length > 1 && word === word.toUpperCase()
          return (
            <span key={i} className={isKey ? accentColor : ""}>
              {word}
              {i < arr.length - 1 ? " " : ""}
            </span>
          )
        })}
      </h2>
    </div>
  )
}
