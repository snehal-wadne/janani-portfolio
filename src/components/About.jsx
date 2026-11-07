import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function About({ about }) {
  return (
    <section id="about" className="section-light" style={{ padding: 'var(--section-pad) 1rem', width: '100%', boxSizing: 'border-box' }}>
      <div className="container" style={{ boxSizing: 'border-box' }}>
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'start',
          width: '100%'
        }}>
          <Reveal>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              <ArchFrame src={`/images/${about.image}`} alt={about.imageAlt} size={380} light />
            </div>
          </Reveal>

          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <Reveal>
              <SectionHeading eyebrow={about.eyebrow} heading={about.heading} light />
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--plum)', fontSize: 'clamp(0.98rem, 2vw, 1.08rem)' }}>
                {about.intro}
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--plum)', fontSize: 'clamp(0.92rem, 2vw, 1rem)' }}>
                {about.family}
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="about-stats-grid" style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(0.75rem, 2vw, 1.5rem)', marginBottom: '2.5rem',
                width: '100%', boxSizing: 'border-box'
              }}>
                {about.stats.map((s, i) => (
                  <div key={i} style={{
                    textAlign: 'center',
                    borderTop: '2px solid var(--gold)',
                    background: 'rgba(201, 162, 94, 0.05)',
                    borderRadius: '0 0 4px 4px',
                    padding: '1.25rem clamp(0.35rem, 1.5vw, 0.75rem) 0.75rem',
                    boxSizing: 'border-box'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                      color: 'var(--gold)', fontWeight: 700, lineHeight: 1
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.72rem, 1.8vw, 0.8rem)', color: 'var(--plum)',
                      marginTop: '0.45rem', lineHeight: 1.35
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              {about.paragraphs.map((p, i) => (
                <p key={i} style={{ lineHeight: 1.8, marginBottom: '1rem', color: 'var(--plum)', fontSize: 'clamp(0.92rem, 2vw, 1rem)' }}>
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.3}>
              <blockquote style={{
                borderLeft: '3px solid var(--gold)',
                paddingLeft: '1.25rem', marginTop: '2rem',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)',
                color: 'var(--kumkum)', fontStyle: 'italic',
                lineHeight: 1.5
              }}>
                &ldquo;{about.quote}&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
        <Divider />
      </div>
      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
          .about-grid > div:first-child {
            max-width: min(320px, 100%) !important;
            margin: 0 auto;
          }
        }
        @media (max-width: 540px) {
          .about-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  )
}
