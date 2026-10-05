import Reveal from './Reveal'
import { CakeIcon, CoffeeIcon, WheatIcon } from './icons'

const CARDS = [
  {
    icon: WheatIcon,
    image: '/images/bread.jpg',
    alt: 'Rustic breads with wheat',
    title: 'Artisan Bakes',
    text: "Croissants, buns, brownies and breads, baked in batches through the day and never carried over to tomorrow.",
    tags: ['Croissant', 'Donut', 'Brownie'],
  },
  {
    icon: CakeIcon,
    image: '/images/celebration-cake.jpg',
    alt: 'A tiered celebration cake with fresh berries',
    title: 'Signature Cakes',
    text: 'Black forest to red velvet, by the pound or built to order. Tell us the occasion and we will sketch the cake with you.',
    tags: ['Fresh Cream', 'Truffle', 'Custom orders'],
  },
  {
    icon: CoffeeIcon,
    image: '/images/coffee.jpg',
    alt: 'Friends sharing coffee at the cafe',
    title: 'Specialty Coffee',
    text: 'Ground to order and pulled properly. Pair your cup with whatever came out of the oven last. That is the regulars’ way.',
    tags: ['Cappuccino', 'Cold Coffee', 'Masala Chiya'],
  },
]

export default function Specialties() {
  return (
    <section id="specialties" className="scroll-mt-24 bg-sand/60 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">What we do best</span>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Three things we take seriously
          </h2>
          <p className="mt-4 text-lg text-cocoa">
            ✨ A premium bakery and cafe. The rest of the menu is big, but these three are the
            reason people come back.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand text-cream shadow-lift">
                    <card.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-bold text-ink">{card.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-cocoa">{card.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-soft px-3 py-1 text-xs font-extrabold text-brand-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
