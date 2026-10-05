import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  NavigationIcon,
  PhoneIcon,
  socialIcon,
} from './icons'
import { SITE, isOpenNow } from '../data/site'

function useOpenNow() {
  const [open, setOpen] = useState(() => isOpenNow())
  useEffect(() => {
    const t = window.setInterval(() => setOpen(isOpenNow()), 60_000)
    return () => window.clearInterval(t)
  }, [])
  return open
}

export default function LocationSection() {
  const open = useOpenNow()

  return (
    <section id="visit" className="scroll-mt-24 bg-sand/60 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Visit us</span>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Find us in Kalikanagar
          </h2>
          <p className="mt-4 text-lg text-cocoa">
            On Google Maps we are listed as “{SITE.mapsName}”. Same place, same ovens.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info card */}
          <Reveal>
            <div className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-cocoa">
                      Address
                    </p>
                    <p className="mt-1 font-bold text-ink">{SITE.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-cocoa">
                      Phone
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="mt-1 block font-bold text-ink transition-colors hover:text-brand"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-cocoa">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 block break-all font-bold text-ink transition-colors hover:text-brand"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-cocoa">
                      Hours
                    </p>
                    <p className="mt-1 font-bold text-ink">Open every day · {SITE.hoursLabel}</p>
                    <p
                      className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${
                        open ? 'bg-green-100 text-green-700' : 'bg-brand-soft text-brand-dark'
                      }`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span
                          className={`absolute inline-flex h-full w-full rounded-full ${
                            open ? 'animate-ping bg-green-500' : 'bg-brand'
                          } opacity-60`}
                        />
                        <span
                          className={`relative inline-flex h-2 w-2 rounded-full ${
                            open ? 'bg-green-600' : 'bg-brand'
                          }`}
                        />
                      </span>
                      {open ? 'Open now' : 'Closed. See you at 7 AM'}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-8">
                <a
                  href={SITE.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <NavigationIcon className="h-4 w-4" />
                  Get directions
                </a>
                <div className="flex items-center gap-3">
                  {SITE.socials.map((s) => {
                    const Icon = socialIcon[s.id as keyof typeof socialIcon]
                    return (
                      <a
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-cream text-cocoa transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120} className="mb-24 lg:mb-28">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border-8 border-white shadow-card">
              <iframe
                title="Daddy's Cake on the map, Kalikanagar, Butwal"
                src={SITE.mapEmbed}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-5 rounded-full bg-white/95 px-5 py-2.5 shadow-soft backdrop-blur">
                <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-ink">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  Live
                </span>
                <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-ink/50">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/30" />
                  Coming soon
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
