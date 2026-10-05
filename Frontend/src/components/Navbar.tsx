import { useEffect, useState } from 'react'
import Logo from './Logo'
import { CloseIcon, MenuIcon, socialIcon } from './icons'
import { SITE } from '../data/site'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Our Story' },
  { id: 'specialties', label: 'Specialties' },
  { id: 'menu', label: 'Menu' },
  { id: 'app', label: 'App' },
  { id: 'visit', label: 'Visit Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                active === link.id ? 'text-brand' : 'text-cocoa hover:text-ink'
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold transition-transform duration-300 ${
                  active === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink backdrop-blur lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out lg:hidden ${
          open ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <nav
          className="container-x flex flex-col gap-1 border-t border-ink/10 bg-cream/95 pb-6 pt-4 backdrop-blur-md"
          aria-label="Mobile"
        >
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                active === link.id ? 'bg-brand-soft text-brand' : 'text-cocoa hover:bg-sand'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center justify-center gap-3">
            {SITE.socials.map((s) => {
              const Icon = socialIcon[s.id as keyof typeof socialIcon]
              return (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-cocoa transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
