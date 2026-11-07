import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Nav({ nav, personName }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-70px 0px -40% 0px' }
    )
    nav.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [nav])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) {
        closeDrawer()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const closeDrawer = () => {
    setOpen(false)
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }

  const openDrawer = () => {
    setOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const scrollTo = (id) => {
    // 1. Immediately unlock scrolling and close the sidebar
    closeDrawer()

    // 2. Perform smooth scroll with fallback
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const navHeight = 75
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const targetY = rect.top + scrollTop - navHeight

        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        })
      }
    }, 60)
  }

  return (
    <>
      <header
        className="nav-wrapper"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(23,17,15,0.96)' : 'rgba(23,17,15,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201,162,94,0.25)',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '70px',
          transition: 'background 0.3s ease, border-color 0.3s ease'
        }}
        aria-label="Primary navigation"
      >
        {/* Brand Name / Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: 'var(--font-serif)', color: 'var(--gold)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 600, letterSpacing: '0.04em',
            display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}
          aria-label="Back to top"
        >
          <span style={{ fontSize: '0.9rem', color: 'var(--gold)' }}>✦</span>
          <span>{personName}</span>
        </button>

        {/* Center / Desktop Links */}
        <nav aria-label="Desktop Navigation" className="nav-desktop">
          <ul
            style={{ display: 'flex', gap: '1.25rem', listStyle: 'none', margin: 0, padding: 0 }}
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
                    letterSpacing: '0.08em', padding: '0.35rem 0.5rem',
                    transition: 'color 0.25s ease, border-color 0.25s ease', textTransform: 'uppercase',
                    borderBottom: active === item.id ? '2px solid var(--gold)' : '2px solid transparent',
                    fontWeight: active === item.id ? 600 : 500
                  }}
                  onMouseEnter={(e) => {
                    if (active !== item.id) e.currentTarget.style.color = 'var(--gold)'
                  }}
                  onMouseLeave={(e) => {
                    if (active !== item.id) e.currentTarget.style.color = 'var(--ivory)'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right-Side Sidebar Toggle Button (Visible on all screen sizes for quick right sidebar access) */}
        <button
          className="nav-sidebar-toggle"
          onClick={openDrawer}
          aria-label="Open right navigation sidebar"
          aria-expanded={open}
          style={{
            background: 'rgba(201, 162, 94, 0.1)',
            border: '1.5px solid var(--gold)',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'var(--gold)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 0.85rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold)'
            e.currentTarget.style.color = 'var(--ink)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(201, 162, 94, 0.1)'
            e.currentTarget.style.color = 'var(--gold)'
          }}
        >
          <Menu size={18} />
          <span>Menu</span>
        </button>
      </header>

      {/* RIGHT-SIDE SLIDE-OUT SIDEBAR & BACKDROP */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Backdrop Overlay on the Left */}
            <motion.div
              key="sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeDrawer}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(10, 6, 5, 0.72)',
                backdropFilter: 'blur(6px)',
                zIndex: 1040,
                cursor: 'pointer'
              }}
              aria-hidden="true"
            />

            {/* The Right-Side Sidebar Drawer */}
            <motion.aside
              key="sidebar-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-label="Right navigation sidebar"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(380px, 86vw)',
                background: 'linear-gradient(180deg, #1A1210 0%, #17110F 100%)',
                borderLeft: '1.5px solid var(--gold)',
                boxShadow: '-16px 0 50px rgba(0, 0, 0, 0.75)',
                zIndex: 1050,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                overflowX: 'hidden'
              }}
            >
              {/* Sidebar Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem 1.75rem',
                borderBottom: '1px solid rgba(201, 162, 94, 0.25)',
                background: 'rgba(82, 54, 74, 0.2)'
              }}>
                <div>
                  <span style={{
                    color: 'var(--gold)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    fontWeight: 600,
                    display: 'block'
                  }}>
                    ✦ Navigation
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--ivory)',
                    fontSize: '1.15rem',
                    fontWeight: 600
                  }}>
                    {personName}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeDrawer}
                  aria-label="Close sidebar"
                  style={{
                    background: 'rgba(23, 17, 15, 0.7)',
                    border: '1px solid var(--gold)',
                    borderRadius: '50%',
                    color: 'var(--gold)',
                    width: '38px',
                    height: '38px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--ink)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(23, 17, 15, 0.7)'
                    e.currentTarget.style.color = 'var(--gold)'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Nav Links List */}
              <nav aria-label="Sidebar Sections" style={{ padding: '1.25rem 1rem', flex: 1 }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {nav.map((item, idx) => {
                    const isCurrent = active === item.id
                    return (
                      <li key={item.id} style={{ marginBottom: '0.35rem' }}>
                        <button
                          onClick={() => scrollTo(item.id)}
                          style={{
                            width: '100%',
                            background: isCurrent ? 'rgba(82, 54, 74, 0.45)' : 'transparent',
                            border: 'none',
                            borderLeft: isCurrent ? '3px solid var(--gold)' : '3px solid transparent',
                            borderRadius: '0 4px 4px 0',
                            padding: '0.85rem 1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            textAlign: 'left',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (!isCurrent) {
                              e.currentTarget.style.background = 'rgba(201, 162, 94, 0.1)'
                              e.currentTarget.style.borderLeftColor = 'rgba(201, 162, 94, 0.5)'
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isCurrent) {
                              e.currentTarget.style.background = 'transparent'
                              e.currentTarget.style.borderLeftColor = 'transparent'
                            }
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <span style={{
                              color: isCurrent ? 'var(--gold)' : 'var(--gold-soft)',
                              fontFamily: 'var(--font-serif)',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              opacity: isCurrent ? 1 : 0.75,
                              minWidth: '22px'
                            }}>
                              0{idx + 1}
                            </span>
                            <span style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: '1.25rem',
                              fontWeight: isCurrent ? 700 : 500,
                              color: isCurrent ? 'var(--gold)' : 'var(--ivory)',
                              letterSpacing: '0.02em'
                            }}>
                              {item.label}
                            </span>
                          </div>
                          <ChevronRight
                            size={16}
                            style={{
                              color: isCurrent ? 'var(--gold)' : 'rgba(201, 162, 94, 0.4)',
                              transform: isCurrent ? 'translateX(2px)' : 'none',
                              transition: 'transform 0.2s'
                            }}
                          />
                        </button>
                      </li>
                    )
                  })}
                </ul>

                {/* Long-form articles direct access */}
                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(201, 162, 94, 0.2)'
                }}>
                  <span style={{
                    color: 'var(--gold)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.75rem',
                    paddingLeft: '0.5rem'
                  }}>
                    In-Depth Reading
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <Link
                      to="/story"
                      onClick={closeDrawer}
                      style={{
                        padding: '0.6rem 0.75rem',
                        color: 'var(--sand)',
                        fontSize: '0.88rem',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(23, 17, 15, 0.4)',
                        border: '1px solid rgba(201, 162, 94, 0.2)'
                      }}
                    >
                      <span>Read Her Full Story</span>
                      <span style={{ color: 'var(--gold)' }}>→</span>
                    </Link>
                    <Link
                      to="/speech"
                      onClick={closeDrawer}
                      style={{
                        padding: '0.6rem 0.75rem',
                        color: 'var(--sand)',
                        fontSize: '0.88rem',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(23, 17, 15, 0.4)',
                        border: '1px solid rgba(201, 162, 94, 0.2)'
                      }}
                    >
                      <span>Her Awareness Speech</span>
                      <span style={{ color: 'var(--gold)' }}>→</span>
                    </Link>
                    <Link
                      to="/volunteer"
                      onClick={closeDrawer}
                      style={{
                        padding: '0.6rem 0.75rem',
                        color: 'var(--sand)',
                        fontSize: '0.88rem',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgba(23, 17, 15, 0.4)',
                        border: '1px solid rgba(201, 162, 94, 0.2)'
                      }}
                    >
                      <span>Volunteer Statement</span>
                      <span style={{ color: 'var(--gold)' }}>→</span>
                    </Link>
                  </div>
                </div>
              </nav>

              {/* Sidebar Footer */}
              <div style={{
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid rgba(201, 162, 94, 0.2)',
                background: 'rgba(82, 54, 74, 0.15)',
                textAlign: 'center'
              }}>
                <p style={{
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  margin: '0 0 0.3rem'
                }}>
                  &ldquo;A gift of life can become a lifetime of hope.&rdquo;
                </p>
                <span style={{ color: 'var(--sand)', fontSize: '0.72rem', opacity: 0.7 }}>
                  Bharatanatyam &middot; Organ Donation Awareness
                </span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
