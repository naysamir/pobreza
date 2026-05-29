/**
 * ───────────────────────────────────────────────────────────────
 *  CONTENIDO EDITABLE DE LA CAMPAÑA "LA POBREZA"
 * ───────────────────────────────────────────────────────────────
 *  Todo el texto de la página vive aquí. Edita los valores de este
 *  archivo para cambiar lo que se muestra, sin tocar el diseño.
 * ─────────────────────────────────────────────────────────────── */

export const brand = {
  name: "CAMBIEMOS",
  nameAccent: "EL FUTURO",
}

/** Enlaces del menú de navegación. El `id` debe coincidir con el
 *  id de la sección correspondiente en la página. */
export const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "problema", label: "El problema" },
  { id: "causas", label: "Causas" },
  { id: "impacto", label: "Impacto" },
  { id: "acciones", label: "Qué podemos hacer" },
  { id: "recursos", label: "Recursos" },
  { id: "contacto", label: "Contacto" },
]

/* ───────────────────────────── INICIO / HERO ───────────────────────────── */
export const hero = {
  title: "LA POBREZA",
  subtitlePlain: "No es falta de esfuerzo,",
  subtitleAccent: "es falta de oportunidades.",
  description:
    "Millones de personas viven sin lo básico cada día. Juntos podemos cambiar esta realidad y construir un mundo más justo e igualitario.",
  signText: "TODOS MERECEMOS UNA OPORTUNIDAD",
  stickerText: "TU VOZ PUEDE HACER LA DIFERENCIA",
  imageSrc: "/images/nino-pobreza.png",
  imageAlt:
    "Niño sentado en el suelo con la cabeza baja, en una fotografía en blanco y negro",
  buttons: [
    { label: "Infórmate", href: "#problema", variant: "lime" as const },
    { label: "Actúa ahora", href: "#acciones", variant: "purple" as const },
  ],
  highlights: [
    { label: "Comprende el problema", color: "lime" as const },
    { label: "Conoce las causas", color: "purple" as const },
    { label: "Actúa y transforma", color: "pink" as const },
  ],
}

/* ───────────────────────────── EL PROBLEMA ───────────────────────────── */
export const problema = {
  kicker: "El problema",
  title: "¿Qué es la POBREZA?",
  paragraphs: [
    "La pobreza no es solo la falta de dinero. Es la falta de acceso a educación, salud, vivienda digna, alimentación y oportunidades para salir adelante.",
    "Es un ciclo que se hereda de generación en generación cuando no existen las condiciones para romperlo.",
  ],
  stats: [
    {
      number: "700",
      unit: "MILLONES",
      text: "de personas viven en pobreza extrema en el mundo.",
      color: "lime" as const,
    },
    {
      number: "1 DE CADA 4",
      unit: "PERSONAS",
      text: "no tiene acceso a una alimentación adecuada.",
      color: "purple" as const,
    },
    {
      number: "+40%",
      unit: "",
      text: "de quienes viven en pobreza son niños y adolescentes.",
      color: "pink" as const,
    },
  ],
}

/* ───────────────────────────── CAUSAS ───────────────────────────── */
export const causas = {
  kicker: "Causas",
  title: "¿Por qué EXISTE?",
  intro:
    "La pobreza tiene raíces profundas y conectadas entre sí. Estas son algunas de las principales.",
  items: [
    {
      icon: "GraduationCap",
      title: "Falta de educación",
      text: "Sin acceso a una educación de calidad, las oportunidades de empleo digno se reducen drásticamente.",
    },
    {
      icon: "Briefcase",
      title: "Desempleo y empleo precario",
      text: "Los trabajos informales y mal pagados no permiten cubrir las necesidades básicas de una familia.",
    },
    {
      icon: "Scale",
      title: "Desigualdad social",
      text: "La distribución desigual de la riqueza y los recursos mantiene a millones al margen.",
    },
    {
      icon: "HeartPulse",
      title: "Falta de salud",
      text: "Sin atención médica accesible, una enfermedad puede llevar a una familia a la quiebra.",
    },
    {
      icon: "CloudRain",
      title: "Crisis y desastres",
      text: "Conflictos, crisis económicas y desastres naturales empujan a comunidades enteras a la pobreza.",
    },
    {
      icon: "Landmark",
      title: "Acceso limitado",
      text: "La falta de servicios básicos como agua, luz e internet aísla a las comunidades vulnerables.",
    },
  ],
}

/* ───────────────────────────── IMPACTO ───────────────────────────── */
export const impacto = {
  kicker: "Impacto",
  title: "¿Qué CONSECUENCIAS tiene?",
  intro:
    "La pobreza afecta cada aspecto de la vida de una persona y de toda una sociedad.",
  items: [
    {
      icon: "Utensils",
      title: "Hambre y desnutrición",
      text: "La falta de alimentos afecta el crecimiento físico y mental, sobre todo en la infancia.",
    },
    {
      icon: "BookX",
      title: "Abandono escolar",
      text: "Muchos niños dejan la escuela para trabajar y ayudar a sus familias.",
    },
    {
      icon: "Home",
      title: "Vivienda inadecuada",
      text: "Hogares sin servicios básicos exponen a las familias a riesgos de salud y seguridad.",
    },
    {
      icon: "Users",
      title: "Exclusión social",
      text: "La pobreza margina y limita la participación plena en la sociedad.",
    },
  ],
}

/* ───────────────────────────── QUÉ PODEMOS HACER ───────────────────────────── */
export const acciones = {
  kicker: "Qué podemos hacer",
  title: "ÚNETE al cambio",
  intro:
    "Pequeñas acciones pueden generar grandes cambios. Esto es lo que tú puedes hacer hoy.",
  ctaLabel: "Quiero ayudar",
  ctaHref: "#contacto",
  items: [
    {
      step: "01",
      title: "Infórmate y comparte",
      text: "Conoce la realidad, habla del tema y comparte información veraz con tu entorno.",
    },
    {
      step: "02",
      title: "Dona lo que puedas",
      text: "Apoya a organizaciones serias con donaciones de tiempo, dinero o recursos.",
    },
    {
      step: "03",
      title: "Voluntariado",
      text: "Suma tus manos a proyectos comunitarios, educativos o de alimentación.",
    },
    {
      step: "04",
      title: "Consumo responsable",
      text: "Apoya el comercio justo y a emprendimientos de comunidades vulnerables.",
    },
  ],
}

/* ───────────────────────────── RECURSOS ───────────────────────────── */
export const recursos = {
  kicker: "Recursos",
  title: "Aprende MÁS",
  intro:
    "Organizaciones y materiales para profundizar y tomar acción de forma informada.",
  items: [
    {
      label: "Naciones Unidas",
      title: "Objetivos de Desarrollo Sostenible",
      text: "El ODS 1 busca poner fin a la pobreza en todas sus formas en todo el mundo.",
      href: "https://www.un.org/sustainabledevelopment/es/poverty/",
    },
    {
      label: "UNICEF",
      title: "Pobreza infantil",
      text: "Datos y programas sobre la infancia que vive en situación de pobreza.",
      href: "https://www.unicef.org/es/pobreza-infantil",
    },
    {
      label: "Banco Mundial",
      title: "Datos de pobreza global",
      text: "Estadísticas e informes sobre la pobreza en el mundo y por región.",
      href: "https://www.bancomundial.org/es/topic/poverty",
    },
  ],
}

/* ───────────────────────────── CONTACTO ───────────────────────────── */
export const contacto = {
  kicker: "Contacto",
  title: "Sé parte del CAMBIO",
  intro:
    "¿Quieres colaborar, proponer una idea o sumar tu organización? Escríbenos.",
  email: "hola@cambiemoselfuturo.org",
  closingPlain: "Dorian Samir Mamani Tinuco,",
  closingAccent: "6to ALFA",
  form: {
    nameLabel: "Tu nombre",
    namePlaceholder: "¿Cómo te llamas?",
    emailLabel: "Tu correo",
    emailPlaceholder: "tucorreo@email.com",
    messageLabel: "Tu mensaje",
    messagePlaceholder: "Cuéntanos cómo quieres ayudar...",
    submitLabel: "Enviar mensaje",
    successMessage: "¡Gracias! Hemos recibido tu mensaje.",
  },
}

/* ───────────────────────────── REDES SOCIALES ───────────────────────────── */
export const socials = [
  { name: "Facebook", icon: "Facebook", href: "#" },
  { name: "Instagram", icon: "Instagram", href: "#" },
  { name: "Twitter", icon: "Twitter", href: "#" },
  { name: "YouTube", icon: "Youtube", href: "#" },
]

export const footer = {
  shareText: "Comparte esta página",
  tagline: "Cada gesto cuenta. El cambio empieza por ti.",
}
