import Logo from './Logo'
import Reveal from './Reveal'
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, socialIcon } from './icons'
import { SITE } from '../data/site'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Our Story' },
  { id: 'specialties', label: 'Specialties' },
  { id: 'menu', label: 'Menu' },
  { id: 'app', label: 'Download App' },
  { id: 'visit', label: 'Visit Us' },
]

export default function Footer({ onPrivacy }: { onPrivacy: () => void }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream/80">
      {/* Cake order band */}
      <div className="container-x">
        <Reveal>
          <div className="relative mx-auto -translate-y-1/2 -mb-6 max-w-4xl overflow-hidden rounded-[1.5rem] bg-gold px-6 py-6 text-ink shadow-card sm:px-8 lg:flex lg:items-center lg:justify-between">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-cream/20 blur-2xl"
            />
            <div>
              <h2 className="font-display text-2xl font-black tracking-tight sm:text-3xl">
                Any event or occasion coming up?
              </h2>
              <p className="mt-1.5 max-w-md text-sm font-semibold text-ink/80">
                Gathering with family and friends? Call us a day ahead and your cake will be waiting
                at the counter, boxed, ribboned and spelled right.
              </p>
            </div>
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-cream transition-transform duration-300 hover:-translate-y-0.5 lg:mt-0"
            >
              <PhoneIcon className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container-x grid gap-12 pb-12 pt-4 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs leading-relaxed">
            A premium bakery and cafe in Kalikanagar, Butwal. Artisan bakes, signature cakes and
            specialty coffee, crafted fresh every day.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SITE.socials.map((s) => {
              const Icon = socialIcon[s.id as keyof typeof socialIcon]
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold">Explore</h3>
          <ul className="mt-5 space-y-3">
            {NAV.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="font-semibold transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold">Contact</h3>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
              <span className="font-semibold">{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
              <a href={SITE.phoneHref} className="font-semibold transition-colors hover:text-gold">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
              <a
                href={`mailto:${SITE.email}`}
                className="break-all font-semibold transition-colors hover:text-gold"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Legal">
          <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold">Legal</h3>
          <ul className="mt-5 space-y-3">
            <li>
              <button
                onClick={onPrivacy}
                className="font-semibold transition-colors hover:text-gold"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={onPrivacy}
                className="font-semibold transition-colors hover:text-gold"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                onClick={onPrivacy}
                className="font-semibold transition-colors hover:text-gold"
              >
                Cookie Policy
              </button>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold">Hours</h3>
          <ul className="mt-5 space-y-3">
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
              <span className="font-semibold">
                Sunday – Saturday
                <span className="block text-cream/60">{SITE.hoursLabel}</span>
              </span>
            </li>
          </ul>
          <p className="mt-5 rounded-2xl bg-cream/5 p-4 text-sm leading-relaxed">
            Cakes for weddings and big occasions need 2–3 days' notice. A quick call is all it
            takes.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm sm:flex-row">
          <p>
            © {year} {SITE.name}, {SITE.sub}. All rights reserved.
          </p>
          <p className="font-script text-xl text-gold">Baked with care in Butwal, Nepal</p>
        </div>
      </div>
    </footer>
  )
}
