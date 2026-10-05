import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './icons'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/90 text-ink shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:text-brand ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
