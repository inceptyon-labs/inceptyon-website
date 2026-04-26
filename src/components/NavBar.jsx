import { useState, useEffect } from 'react'
import Chronograph from './Chronograph'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { label: 'DOSSIERS', id: 'work' },
    { label: 'ABOUT', id: 'about' },
    { label: 'COORDINATES', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-instrument ease-instrument ${
        scrolled ? 'bg-ink/90 backdrop-blur-sm border-b border-graphite' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-6 md:h-20 md:px-12">
        {/* Wordmark + chronograph */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="mono-caps flex items-center gap-3 text-sm font-medium text-bone hover:text-bone"
            aria-label="Inceptyon Labs — go to top"
          >
            <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center border border-bone">
              <span className="h-1.5 w-1.5 bg-filament" />
            </span>
            <span className="project-name">INCEPTYON LABS</span>
          </button>

          {/* Live chronograph — desktop only */}
          <span aria-hidden="true" className="hidden text-graphite md:inline">/</span>
          <Chronograph variant="inline" className="hidden md:inline-flex" />
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="mono-caps text-xs text-slate transition-colors duration-instrument ease-instrument hover:text-halogen"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-filament btn-bracket text-xs"
          >
            TRANSMIT
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="mono-caps text-xs text-bone lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-y border-graphite bg-ink lg:hidden"
        >
          <div className="mx-auto max-w-[1400px] px-6 py-6">
            <Chronograph variant="inline" className="mb-6" />
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="mono-caps block w-full border-b border-graphite py-4 text-left text-sm text-bone"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-filament btn-bracket mono-caps mt-6 w-full text-xs"
            >
              TRANSMIT
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
