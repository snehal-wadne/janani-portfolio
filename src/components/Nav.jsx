import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav({ nav, personName }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    nav.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [nav])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav
      className="nav-wrapper"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(23,17,15,0.97)' : 'rgba(23,17,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,162,94,0.2)',
        padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
        transition: 'background 0.3s'
      }}
      aria-label="Primary navigation"
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          fontFamily: 'var(--font-serif)', color: 'var(--gold)',
          fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.02em'
        }}
        aria-label="Back to top"
      >
        {personName}
      </button>

      {/* Desktop links */}
      <ul
        className="nav-desktop"
        style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}
      >
        {nav.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              aria-current={active === item.id ? 'page' : undefined}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: active === item.id ? 'var(--gold)' : 'var(--ivory)',
                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                letterSpacing: '0.08em', padding: '0.25rem',
                transition: 'color 0.3s', textTransform: 'uppercase',
                borderBottom: active === item.id ? '1px solid var(--gold)' : '1px solid transparent'
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--ivory)', display: 'none',
          alignItems: 'center', justifyContent: 'center'
        }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          role="dialog"
          aria-label="Navigation menu"
          style={{
            position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
            background: 'var(--ink)', zIndex: 99,
            display: 'flex', flexDirection: 'column',
            padding: '2rem', gap: '0.25rem',
            overflowY: 'auto'
          }}
        >
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: active === item.id ? 'var(--gold)' : 'var(--ivory)',
                fontFamily: 'var(--font-serif)', fontSize: '1.75rem',
                textAlign: 'left', padding: '1rem 0',
                borderBottom: '1px solid rgba(201,162,94,0.15)',
                transition: 'color 0.2s'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
