import { motion, useReducedMotion } from 'framer-motion'
import ArchFrame from './ui/ArchFrame'
import TempleCanvas from './ui/TempleCanvas'

export default function Hero({ person }) {
  const reduced = useReducedMotion()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const navHeight = 75
      const rect = el.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      window.scrollTo({
        top: Math.max(0, rect.top + scrollTop - navHeight),
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 50% 30%, #2A1820 0%, var(--ink) 70%)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '74px',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Background Interactive Temple Particles */}
      <TempleCanvas style={{ opacity: 0.85 }} />

      {/* Traditional Sacred Mandala background pattern */}
      <svg
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          opacity: 0.05, pointerEvents: 'none'
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="190" fill="none" stroke="#C9A25E" strokeWidth="1"/>
        <circle cx="200" cy="200" r="150" fill="none" stroke="#C9A25E" strokeWidth="0.5"/>
        <circle cx="200" cy="200" r="110" fill="none" stroke="#C9A25E" strokeWidth="1"/>
        <circle cx="200" cy="200" r="70" fill="none" stroke="#C9A25E" strokeWidth="0.5"/>
        <circle cx="200" cy="200" r="30" fill="none" stroke="#C9A25E" strokeWidth="1"/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((a) => (
          <line
            key={a}
            x1={200 + Math.cos(a * Math.PI / 180) * 30}
            y1={200 + Math.sin(a * Math.PI / 180) * 30}
            x2={200 + Math.cos(a * Math.PI / 180) * 190}
            y2={200 + Math.sin(a * Math.PI / 180) * 190}
            stroke="#C9A25E" strokeWidth="0.5"
          />
        ))}
      </svg>

      <div
        className="container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
          padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 3vw, 1.5rem)',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          boxSizing: 'border-box'
        }}
      >
        {/* Text Content */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-text"
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>✦</span>
            <p style={{
              color: 'var(--gold)', textTransform: 'uppercase',
              letterSpacing: '0.15em', fontSize: '0.75rem',
              fontWeight: 600, margin: 0
            }}>
              {person.heroKicker}
            </p>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.1rem, 7vw, 5.2rem)',
            color: 'var(--ivory)', lineHeight: 1.1,
            marginBottom: '1rem', fontWeight: 700,
            wordBreak: 'break-word'
          }}>
            {person.name}
          </h1>

          <p style={{
            color: 'var(--gold-soft)', fontSize: 'clamp(0.78rem, 1.8vw, 0.85rem)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '1.25rem', lineHeight: 1.5,
            wordBreak: 'break-word'
          }}>
            {person.roles.join(' · ')}
          </p>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
            color: 'var(--sand)', lineHeight: 1.6,
            marginBottom: '0.65rem', fontStyle: 'italic'
          }}>
            &ldquo;{person.tagline}&rdquo;
          </p>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--gold)', lineHeight: 1.6, marginBottom: '2rem'
          }}>
            {person.heroQuote}
          </p>

          <div className="hero-cta-group" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', width: '100%' }}>
            <button
              onClick={() => scrollTo('journey')}
              style={{
                background: 'var(--gold)', color: 'var(--ink)',
                border: 'none', padding: '0.85rem 2rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.82rem', letterSpacing: '0.06em',
                textTransform: 'uppercase', cursor: 'pointer',
                borderRadius: '2px', transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(201, 162, 94, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold-soft)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Her Story
            </button>
            <button
              onClick={() => scrollTo('collaborate')}
              style={{
                background: 'transparent', color: 'var(--gold)',
                border: '1.5px solid var(--gold)', padding: '0.85rem 2rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.82rem', letterSpacing: '0.06em',
                textTransform: 'uppercase', cursor: 'pointer',
                borderRadius: '2px', transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold)'
                e.currentTarget.style.color = 'var(--ink)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Collaborate
            </button>
          </div>
        </motion.div>

        {/* Hero Arch Frame Image */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          className="hero-image"
        >
          <ArchFrame
            src={`/images/${person.heroImage}`}
            alt="Portrait of Janani Pradhaban in a red and teal saree"
            size={440}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2.25rem !important;
            padding: 2.5rem 1rem !important;
          }
          .hero-text { order: 2; }
          .hero-image { order: 1; }
          .hero-image > div { max-width: min(320px, 100%) !important; }
          .hero-text > div:first-child { justify-content: center; }
          .hero-cta-group { justify-content: center; }
        }
        @media (max-width: 440px) {
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
