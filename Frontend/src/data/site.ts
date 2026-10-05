export const SITE = {
  name: "Daddy's Cake",
  sub: 'The Premium Bakery',
  phoneDisplay: '98233 17217',
  phoneRaw: '9823317217',
  phoneHref: 'tel:+9779823317217',
  email: 'daddyscake01@gmail.com',
  address: 'Kalikanagar-9, Butwal, Rupandehi, Nepal',
  mapEmbed: 'https://www.google.com/maps?q=27.6840286,83.4624813&z=17&output=embed',
  mapLink:
    "https://www.google.com/maps/place/Daddy's+Kitchen+The+cafe+and+Restaurant/@27.6850927,83.4623418,18z/data=!4m6!3m5!1s0x3996867dc6176477:0xf5eb8652b2f15812!8m2!3d27.6840286!4d83.4624813!16s%2Fg%2F11dfh3y8qt",
  mapsName: "Daddy's Kitchen - The Cafe & Restaurant",
  openHour: 7,
  closeHour: 21,
  hoursLabel: '7:00 AM – 9:00 PM',
  socials: [
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100068200462906',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/daddys__cake',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      href: 'https://www.tiktok.com/@daddyscakee',
    },
  ],
} as const

// NOTE: point this at the Play Store / App Store listing once the app ships.
// Until then the QR sends people to the Facebook page so nothing scans dead.
export const APP_DOWNLOAD_URL = 'https://www.facebook.com/profile.php?id=100068200462906'

export function isOpenNow(now: Date = new Date()): boolean {
  const h = now.getHours()
  return h >= SITE.openHour && h < SITE.closeHour
}
