import { motion, useReducedMotion } from 'framer-motion'
import ArchFrame from './ui/ArchFrame'

export default function Hero({ person }) {
  const reduced = useReducedMotion()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'var(--ink)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Mandala background pattern */}
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
          width: '100%'
        }}
      >
        {/* Text */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-text"
        >
          <p style={{
            color: 'var(--gold)', textTransform: 'uppercase',
            letterSpacing: '0.2em', fontSize: '0.75rem',
            marginBottom: '1rem', fontWeight: 600
          }}>
            {person.heroKicker}
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            color: 'var(--ivory)', lineHeight: 1,
            marginBottom: '1.5rem', fontWeight: 700
          }}>
            {person.name}
          </h1>
          <p style={{
            color: 'var(--gold-soft)', fontSize: '0.875rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            {person.roles.join(' · ')}
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'var(--sand)', lineHeight: 1.6,
            marginBottom: '0.75rem', fontStyle: 'italic'
          }}>
            &ldquo;{person.tagline}&rdquo;
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: 'var(--gold)', lineHeight: 1.6, marginBottom: '2.5rem'
          }}>
            {person.heroQuote}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('journey')}
              style={{
                background: 'var(--gold)', color: 'var(--ink)',
                border: 'none', padding: '0.875rem 2rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.875rem', letterSpacing: '0.08em',
                textTransform: 'uppercase', cursor: 'pointer',
                borderRadius: '2px', transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold-soft)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--gold)' }}
            >
              Her Story
            </button>
            <button
              onClick={() => scrollTo('collaborate')}
              style={{
                background: 'transparent', color: 'var(--gold)',
                border: '1px solid var(--gold)', padding: '0.875rem 2rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.875rem', letterSpacing: '0.08em',
                textTransform: 'uppercase', cursor: 'pointer',
                borderRadius: '2px', transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
            >
              Collaborate
            </button>
          </div>
        </motion.div>

        {/* Image */}
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
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem !important;
          }
          .hero-text { order: 2; }
          .hero-image { order: 1; }
          .hero-image > div { max-width: 280px !important; }
          .hero-text > div:last-child { justify-content: center; }
        }
      `}</style>
    </section>
  )
}
