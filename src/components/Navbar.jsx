import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const marker = window.scrollY + window.innerHeight * 0.35
      let current = '#home'
      sections.forEach((section) => {
        if (section.offsetTop <= marker) current = `#${section.id}`
      })
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={close}>
            <span className="brand-mark">R</span>
            <span>rahanyas<span style={{ color: 'var(--accent-2)' }}>_</span></span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={active === link.href ? 'active' : ''}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="btn btn-primary nav-cta">Let&apos;s Talk</a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              className="mobile-menu glass"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="Mobile"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={close}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn btn-primary" onClick={close} style={{ marginTop: '0.25rem' }}>
                Let&apos;s Talk
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
