import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Specialties from './components/Specialties'
import MenuSection from './components/MenuSection'
import AppDownload from './components/AppDownload'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import PrivacyPolicy from './components/PrivacyPolicy'

const getPage = () => (window.location.pathname === '/privacy-policy' ? 'privacy' : 'home')

export default function App() {
  const [page, setPage] = useState<'home' | 'privacy'>(getPage)

  useEffect(() => {
    const onPop = () => setPage(getPage())
    const onHash = () => {
      if (window.location.hash) {
        setPage('home')
        window.history.replaceState({}, '', `/${window.location.hash}`)
      }
    }
    window.addEventListener('popstate', onPop)
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  const openPrivacy = () => {
    window.history.pushState({}, '', '/privacy-policy')
    setPage('privacy')
    window.scrollTo({ top: 0 })
  }
  const goHome = () => {
    window.history.pushState({}, '', '/')
    setPage('home')
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <Navbar />
      <main>
        {page === 'privacy' ? (
          <PrivacyPolicy onBack={goHome} />
        ) : (
          <>
            <Hero />
            <Marquee />
            <About />
            <Specialties />
            <MenuSection />
            <AppDownload />
            <LocationSection />
          </>
        )}
      </main>
      <Footer onPrivacy={openPrivacy} />
      <FloatingActions />
    </>
  )
}
