import { ChefHatIcon, WheatIcon } from './icons'

type LogoProps = {
  variant?: 'light' | 'dark'
  compact?: boolean
}

export default function Logo({ variant = 'dark', compact = false }: LogoProps) {
  const subColor = variant === 'dark' ? 'text-cocoa' : 'text-cream/70'

  return (
    <a href="#home" className="group inline-flex items-center gap-2.5" aria-label="Daddy's Cake home">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand text-cream shadow-soft transition-transform duration-300 group-hover:-rotate-6">
        <ChefHatIcon className="h-6 w-6" />
        <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-gold text-cream">
          <WheatIcon className="h-3 w-3" />
        </span>
      </span>
      <span className="leading-none">
        <span className="flex items-baseline gap-1.5">
          <span className="font-script text-3xl text-brand">Daddy's</span>
          <span className="font-display text-lg font-black tracking-[0.22em] text-gold">CAKE</span>
        </span>
        {!compact && (
          <span className={`mt-1 block text-[9px] font-extrabold uppercase tracking-[0.34em] ${subColor}`}>
            The Premium Bakery
          </span>
        )}
      </span>
    </a>
  )
}
