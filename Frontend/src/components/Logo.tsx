type LogoProps = {
  variant?: 'light' | 'dark'
  compact?: boolean
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#home" className="group inline-flex items-center" aria-label="Daddy's Cake home">
      <img
        src="/images/logo.png"
        alt="Daddy's Cake, The Premium Bakery"
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          compact ? 'h-12' : 'h-16'
        }`}
      />
    </a>
  )
}
