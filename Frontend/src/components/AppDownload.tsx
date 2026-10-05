import { QRCodeSVG } from 'qrcode.react'
import Reveal from './Reveal'
import { AppleIcon, CheckIcon, DownloadIcon, PlayStoreIcon } from './icons'
import { APP_DOWNLOAD_URL } from '../data/site'

const PERKS = [
  'Order cakes for pickup or local delivery',
  'Book a table before you leave home',
  'First word on fresh batches and seasonal mithai',
]

export default function AppDownload() {
  return (
    <section id="app" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-x">
        <div className="wheat-bg relative overflow-hidden rounded-[2.5rem] bg-brand-deeper px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-rose/20 blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Copy */}
            <Reveal>
              <span className="eyebrow !text-gold">Download app</span>
              <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-cream sm:text-5xl">
                Daddy's Cake, on your phone
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/80">
                Our app is in the oven. Soon you will order cakes, book tables and get fresh-batch
                alerts straight from your phone, no waiting in line on cake day.
              </p>
              <ul className="mt-7 space-y-3">
                {PERKS.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-cream/90">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/25 text-gold">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-semibold">{perk}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* QR card */}
            <Reveal delay={150}>
              <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-white p-8 text-center shadow-lift">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-cocoa">
                  Download app
                </p>
                <div className="mx-auto mt-5 grid place-items-center rounded-2xl border-2 border-dashed border-gold/50 p-4">
                  <QRCodeSVG
                    value={APP_DOWNLOAD_URL}
                    size={180}
                    bgColor="#ffffff"
                    fgColor="#2b1d12"
                    level="M"
                  />
                </div>
                <a
                  href={APP_DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-cream transition-colors hover:bg-brand-dark"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Scan &amp; Download Our App
                </a>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <span className="flex items-center gap-2.5 rounded-xl bg-ink px-3.5 py-2.5 text-left">
                    <PlayStoreIcon className="h-6 w-6 shrink-0 text-cream" />
                    <span className="leading-tight">
                      <span className="block text-[9px] uppercase tracking-wider text-cream/60">
                        Get it on
                      </span>
                      <span className="block text-sm font-bold text-cream">Google Play</span>
                    </span>
                  </span>
                  <span className="flex items-center gap-2.5 rounded-xl bg-ink px-3.5 py-2.5 text-left">
                    <AppleIcon className="h-6 w-6 shrink-0 text-cream" />
                    <span className="leading-tight">
                      <span className="block text-[9px] uppercase tracking-wider text-cream/60">
                        Download on the
                      </span>
                      <span className="block text-sm font-bold text-cream">App Store</span>
                    </span>
                  </span>
                </div>

                <p className="mt-4 text-xs font-semibold text-cocoa">
                  Rolling out soon. The QR takes you to our page for now.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
