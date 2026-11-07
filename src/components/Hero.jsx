import { motion, useReducedMotion } from 'framer-motion'
import ArchFrame from './ui/ArchFrame'
import TempleCanvas from './ui/TempleCanvas'

export default function Hero({ person }) {
  const reduced = useReducedMotion()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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
        overflow: 'hidden'
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
        {[0,45,90,135,180,225,270,315].map((a) => (
          <ellipse
            key={a} cx="200" cy="200" rx="30" ry="90"
            fill="none" stroke="#C9A25E" strokeWidth="0.5"
            transform={`rotate(${a} 200 200)`}
          />
        ))}
      </svg>

      <div
        className="container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          padding: '4rem 1.5rem',
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Text Content */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-text"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>✦</span>
            <p style={{
              color: 'var(--gold)', textTransform: 'uppercase',
              letterSpacing: '0.2em', fontSize: '0.78rem',
              fontWeight: 600, margin: 0
            }}>
              {person.heroKicker}
            </p>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            color: 'var(--ivory)', lineHeight: 1.08,
            marginBottom: '1.25rem', fontWeight: 700
          }}>
            {person.name}
          </h1>

          <p style={{
            color: 'var(--gold-soft)', fontSize: '0.85rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '1.5rem', lineHeight: 1.6
          }}>
            {person.roles.join(' · ')}
          </p>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
            color: 'var(--sand)', lineHeight: 1.6,
            marginBottom: '0.75rem', fontStyle: 'italic'
          }}>
            &ldquo;{person.tagline}&rdquo;
          </p>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: 'var(--gold)', lineHeight: 1.6, marginBottom: '2.5rem'
          }}>
            {person.heroQuote}
          </p>

          <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('journey')}
              style={{
                background: 'var(--gold)', color: 'var(--ink)',
                border: 'none', padding: '0.9rem 2.2rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.85rem', letterSpacing: '0.08em',
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
                border: '1.5px solid var(--gold)', padding: '0.9rem 2.2rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.85rem', letterSpacing: '0.08em',
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
          style={{ display: 'flex', justifyContent: 'center' }}
          className="hero-image"
        >
          <ArchFrame
            src={`/images/${person.heroImage}`}
            alt="Portrait of Janani Pradhaban in a red and teal saree"
            size={480}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2.5rem !important;
            padding: 3rem 1.25rem !important;
          }
          .hero-text { order: 2; }
          .hero-image { order: 1; }
          .hero-image > div { max-width: 290px !important; }
          .hero-text > div:first-child { justify-content: center; }
          .hero-cta-group { justify-content: center; }
        }
        @media (max-width: 480px) {
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
