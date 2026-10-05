type IconProps = {
  className?: string
}

function Stroke({ className, children, viewBox = '0 0 24 24' }: IconProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function Fill({ className, children, viewBox = '0 0 24 24' }: IconProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} fill="currentColor" className={className} aria-hidden="true">
      {children}
    </svg>
  )
}

export const PhoneIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </Stroke>
)

export const MailIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Stroke>
)

export const MapPinIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </Stroke>
)

export const ClockIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Stroke>
)

export const ArrowRightIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Stroke>
)

export const ArrowUpIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </Stroke>
)

export const MenuIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </Stroke>
)

export const CloseIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Stroke>
)

export const CheckIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M20 6 9 17l-5-5" />
  </Stroke>
)

export const ExternalIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </Stroke>
)

export const NavigationIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </Stroke>
)

export const DownloadIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </Stroke>
)

export const CoffeeIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" x2="6" y1="2" y2="4" />
    <line x1="10" x2="10" y1="2" y2="4" />
    <line x1="14" x2="14" y1="2" y2="4" />
  </Stroke>
)

export const CakeIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
    <path d="M2 21h20" />
    <path d="M7 8v3" />
    <path d="M12 8v3" />
    <path d="M17 8v3" />
    <path d="M7 4a1 1 0 0 1 2 0c0 .6-.5 1-1 1s-1-.4-1-1Z" />
    <path d="M12 4a1 1 0 0 1 2 0c0 .6-.5 1-1 1s-1-.4-1-1Z" />
    <path d="M17 4a1 1 0 0 1 2 0c0 .6-.5 1-1 1s-1-.4-1-1Z" />
  </Stroke>
)

export const ChefHatIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
    <path d="M6 17h12" />
  </Stroke>
)

export const WheatIcon = ({ className }: IconProps) => (
  <Stroke className={className}>
    <path d="M12 22v-9" />
    <path d="M12 13c-3 0-5-2.2-5-5.5C10 7.5 12 10 12 13Z" />
    <path d="M12 13c3 0 5-2.2 5-5.5C14 7.5 12 10 12 13Z" />
    <path d="M12 19c-3 0-5-2.2-5-5.5 3 0 5 2.5 5 5.5Z" />
    <path d="M12 19c3 0 5-2.2 5-5.5-3 0-5 2.5-5 5.5Z" />
    <path d="M12 7.5C12 5 10.5 3.2 8.5 2.6 8.7 5.4 10 7 12 7.5Z" />
    <path d="M12 7.5c0-2.5 1.5-4.3 3.5-4.9-.2 2.8-1.5 4.4-3.5 4.9Z" />
  </Stroke>
)

export const FacebookIcon = ({ className }: IconProps) => (
  <Fill className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </Fill>
)

export const InstagramIcon = ({ className }: IconProps) => (
  <Fill className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </Fill>
)

export const TikTokIcon = ({ className }: IconProps) => (
  <Fill className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </Fill>
)

export const PlayStoreIcon = ({ className }: IconProps) => (
  <Fill className={className} viewBox="0 0 24 24">
    <path d="M3.6 2.3c-.36.18-.6.55-.6 1.06v17.28c0 .5.24.88.6 1.06l.08.05 9.67-9.67v-.04L3.68 2.25l-.08.05Z" />
    <path d="m16.93 15.66-3.58-3.58L4.04 21.4c.34.36.9.4 1.53.05l11.36-5.79Z" />
    <path d="m20.74 10.53-3.8-2.16-3.94 3.67 3.94 3.94 3.82-2.17c1.09-.62 1.09-1.63-.02-3.28Z" />
    <path d="M4.04 2.6l9.31 9.32 3.58-3.59L5.57 2.55c-.63-.36-1.19-.31-1.53.05Z" />
  </Fill>
)

export const AppleIcon = ({ className }: IconProps) => (
  <Fill className={className} viewBox="0 0 384 512">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </Fill>
)

export const socialIcon = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
} as const
