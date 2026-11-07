import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function About({ about }) {
  return (
    <section id="about" className="section-light" style={{ padding: 'var(--section-pad) 1.5rem' }}>
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '5rem',
          alignItems: 'start'
        }}>
          <Reveal>
            <div style={{ textAlign: 'center' }}>
              <ArchFrame src={`/images/${about.image}`} alt={about.imageAlt} size={440} light />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading eyebrow={about.eyebrow} heading={about.heading} light />
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--plum)', fontSize: '1.08rem' }}>
                {about.intro}
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--plum)' }}>
                {about.family}
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="about-stats-grid" style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem', marginBottom: '2.5rem'
              }}>
                {about.stats.map((s, i) => (
                  <div key={i} style={{
                    textAlign: 'center',
                    borderTop: '2px solid var(--gold)',
                    paddingTop: '1.25rem',
                    background: 'rgba(201, 162, 94, 0.05)',
                    borderRadius: '0 0 4px 4px',
                    padding: '1.25rem 0.5rem 0.75rem'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                      color: 'var(--gold)', fontWeight: 700, lineHeight: 1
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontSize: '0.82rem', color: 'var(--plum)',
                      marginTop: '0.5rem', lineHeight: 1.35
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              {about.paragraphs.map((p, i) => (
                <p key={i} style={{ lineHeight: 1.8, marginBottom: '1rem', color: 'var(--plum)' }}>
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.3}>
              <blockquote style={{
                borderLeft: '3px solid var(--gold)',
                paddingLeft: '1.5rem', marginTop: '2.5rem',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
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
            gap: 2.5rem !important;
          }
          .about-grid > div:first-child {
            max-width: 320px;
            margin: 0 auto;
          }
        }
        @media (max-width: 600px) {
          .about-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}
