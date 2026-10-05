import Reveal from './Reveal'
import { ArrowRightIcon, MapPinIcon, PhoneIcon, WheatIcon } from './icons'
import { SITE } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="wheat-bg relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* soft colour washes */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-rose/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="chip">
              <MapPinIcon className="h-4 w-4 text-brand" />
              Kalikanagar · Butwal
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance">
              <span className="block font-script text-5xl leading-tight text-gold sm:text-6xl">
                Fresh from the oven,
              </span>
              <span className="mt-1 block font-display text-5xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                every single day.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa">
              Daddy's Cake is a premium bakery and cafe in Kalikanagar, Butwal, with signature cakes
              made to order, bakes out of the oven each morning, proper coffee, and a kitchen that
              runs from momos to masala dosa.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#menu" className="btn-primary">
                See the menu
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href={SITE.phoneHref} className="btn-outline">
                <PhoneIcon className="h-4 w-4" />
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-9 flex flex-wrap gap-3">
              <li className="chip">🥐 Artisan Bakes · Signature Cakes</li>
              <li className="chip">☕ Specialty Coffee</li>
              <li className="chip">🤍 Crafted Fresh, Every Day</li>
            </ul>
          </Reveal>
        </div>

        {/* Photo composition */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div aria-hidden className="absolute -inset-4 -rotate-2 rounded-[3rem] bg-gold-soft" />
            <img
              src="/images/hero-croissants.jpg"
              alt="Croissants fresh out of the oven at Daddy's Cake"
              className="relative aspect-[5/4] w-full rounded-[2.5rem] object-cover shadow-card"
              loading="eager"
            />

            {/* rotating badge */}
            <div className="absolute -top-8 right-6 grid h-28 w-28 place-items-center sm:-top-10 sm:h-32 sm:w-32">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow text-brand">
                <defs>
                  <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-current text-[8.2px] font-extrabold uppercase" letterSpacing="2.6">
                  <textPath href="#badge-circle">Baked fresh · every day · Daddy's Cake ·</textPath>
                </text>
              </svg>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-cream shadow-lift sm:h-16 sm:w-16">
                <WheatIcon className="h-7 w-7" />
              </span>
            </div>

            {/* overlap card */}
            <div className="absolute -bottom-10 -left-2 flex w-56 items-center gap-3 rounded-3xl border border-ink/5 bg-white/95 p-3 shadow-card backdrop-blur sm:-left-10 sm:w-64 animate-floaty">
              <img
                src="/images/cake-slice.jpg"
                alt="Chocolate truffle cake"
                className="h-16 w-16 shrink-0 rounded-2xl object-cover sm:h-20 sm:w-20"
              />
              <div>
                <p className="font-display text-base font-bold leading-snug text-ink">
                  Signature cakes
                </p>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Made to order
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
