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
            <ArchFrame src={`/images/${about.image}`} alt={about.imageAlt} size={440} light />
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading eyebrow={about.eyebrow} heading={about.heading} light />
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--plum)', fontSize: '1.05rem' }}>
                {about.intro}
              </p>
              <p style={{ lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--plum)' }}>
                {about.family}
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem', marginBottom: '2.5rem'
              }}>
                {about.stats.map((s, i) => (
                  <div key={i} style={{
                    textAlign: 'center',
                    borderTop: '2px solid var(--gold)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      color: 'var(--gold)', fontWeight: 700, lineHeight: 1
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontSize: '0.8rem', color: 'var(--plum)',
                      marginTop: '0.4rem', lineHeight: 1.3
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
                paddingLeft: '1.5rem', marginTop: '2rem',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: 'var(--kumkum)', fontStyle: 'italic'
              }}>
                &ldquo;{about.quote}&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
        <Divider />
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-grid > div:first-child {
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
