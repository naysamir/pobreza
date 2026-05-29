import {
  GraduationCap,
  Briefcase,
  Scale,
  HeartPulse,
  CloudRain,
  Landmark,
  Utensils,
  BookX,
  Home,
  Users,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react"

/** Mapa de nombres de íconos usados en lib/content.ts */
const icons: Record<string, LucideIcon> = {
  GraduationCap,
  Briefcase,
  Scale,
  HeartPulse,
  CloudRain,
  Landmark,
  Utensils,
  BookX,
  Home,
  Users,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
}

export function Icon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Cmp = icons[name] ?? Users
  return <Cmp className={className} strokeWidth={2.5} aria-hidden="true" />
}
