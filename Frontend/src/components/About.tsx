import Reveal from './Reveal'
import { CheckIcon } from './icons'

const POINTS = [
  'Baked fresh every morning, never carried over',
  'Cakes made to order for birthdays, weddings, bratabandha',
  'Veg and non-veg options across the whole menu',
  'Family seating, takeaway and phone orders',
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Photos */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div aria-hidden className="absolute -left-5 -top-5 h-40 w-40 rounded-[2rem] bg-brand/10" />
            <img
              src="/images/cafe-interior.jpg"
              alt="Inside the cafe at Daddy's Cake"
              className="relative aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-card"
              loading="lazy"
            />
            <img
              src="/images/baker-hands.jpg"
              alt="Our baker kneading the morning dough"
              className="absolute -bottom-12 -right-3 aspect-[4/3] w-1/2 rounded-[2rem] border-8 border-cream object-cover shadow-card sm:-right-8"
              loading="lazy"
            />
            <div className="absolute -bottom-10 left-4 rounded-3xl bg-brand px-6 py-4 text-cream shadow-lift sm:left-8">
              <p className="font-display text-2xl font-black leading-none">8 cuisines</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-cream/80">
                one kitchen
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              From morning dough to evening chiya
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-cocoa">
              Daddy's Cake started with a simple thought: Butwal deserved a bakery that takes its
              cakes seriously. So every morning our bakers are at the counter before the town wakes
              up, rolling dough, whipping cream and pulling the first batch out of the oven by
              seven.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cocoa">
              We're a cafe too. Families come in for a birthday cake and stay for lunch; regulars
              drop by for chiya and a plate of steam momos. Eight cuisines share one kitchen here,
              and everything, from the black forest to the jhol achar, is made in-house.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-8 space-y-3.5">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-dark">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-9 font-script text-3xl text-brand">
              the Daddy's Cake family, Kalikanagar
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
