import { useState } from 'react'
import Reveal from './Reveal'
import { PhoneIcon } from './icons'
import { MENU } from '../data/menu'
import { SITE } from '../data/site'

export default function MenuSection() {
  const [activeId, setActiveId] = useState(MENU[0].id)
  const active = MENU.find((c) => c.id === activeId) ?? MENU[0]

  return (
    <section id="menu" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Eat &amp; drink</span>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            The menu
          </h2>
          <p className="mt-4 text-lg text-cocoa">
            Eight kitchens, one counter. Prices in NPR, and the counter changes daily, so call to hear
            what just came out of the oven.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {/* Category tabs */}
          <div
            className="no-scrollbar mt-12 flex gap-2 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center"
            role="tablist"
            aria-label="Menu categories"
          >
            {MENU.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeId === cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-extrabold transition-all duration-300 ${
                  activeId === cat.id
                    ? 'bg-brand text-cream shadow-lift'
                    : 'bg-white text-cocoa shadow-sm hover:bg-brand-soft hover:text-brand'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Items */}
        <div key={active.id} className="menu-panel mx-auto mt-8 max-w-4xl">
          <p className="text-center font-script text-3xl text-gold">{active.blurb}</p>

          <div className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {active.items.map((item) => (
              <div
                key={item.name}
                className="group flex items-baseline gap-3 rounded-2xl border border-transparent px-4 py-3 transition-colors duration-300 hover:border-gold/40 hover:bg-white"
              >
                <span
                  title={item.veg ? 'Veg' : 'Non-veg'}
                  className={`mt-1 inline-block h-3 w-3 shrink-0 rounded-full border-2 ${
                    item.veg ? 'border-green-600 bg-green-600/20' : 'border-brand bg-brand/20'
                  }`}
                />
                <div className="min-w-0">
                  <p className="font-bold text-ink">
                    {item.name}
                    {item.popular && (
                      <span className="ml-2 rounded-full bg-gold-soft px-2 py-0.5 align-middle text-[10px] font-extrabold uppercase tracking-wider text-gold-dark">
                        Popular
                      </span>
                    )}
                  </p>
                  {item.desc && <p className="text-sm text-cocoa">{item.desc}</p>}
                </div>
                <span
                  aria-hidden
                  className="mx-1 flex-1 -translate-y-1 border-b-2 border-dotted border-ink/20 transition-colors group-hover:border-gold/60"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold text-cocoa">
              <span className="mr-4 inline-flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded-full border-2 border-green-600 bg-green-600/20" />
                Veg
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded-full border-2 border-brand bg-brand/20" />
                Non-veg
              </span>
            </p>
            <a href={SITE.phoneHref} className="btn-outline">
              <PhoneIcon className="h-4 w-4" />
              Order ahead on {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
