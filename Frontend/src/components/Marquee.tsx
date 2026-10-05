import { WheatIcon } from './icons'

const ITEMS = [
  'Artisan Bakes',
  'Signature Cakes',
  'Specialty Coffee',
  'Crafted Fresh Every Day',
  'Eight Cuisines, One Kitchen',
  'Kalikanagar · Butwal',
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden bg-brand py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-cream">
              {item}
            </span>
            <WheatIcon className="h-4 w-4 shrink-0 text-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}
