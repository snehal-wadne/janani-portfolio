import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function SecondLife({ data }) {
  const { night, resilience, blessing, gratitude, seekingBlessings } = data

  return (
    <section id="second-life" style={{ background: 'var(--plum)', padding: 'var(--section-pad) 1.5rem' }}>
      <div className="container">

        {/* The Night That Changed Everything */}
        <Reveal>
          <SectionHeading eyebrow={night.eyebrow} heading={night.heading} />
        </Reveal>
        <div className="night-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: 'rgba(201,162,94,0.2)',
          border: '1px solid rgba(201,162,94,0.2)',
          marginBottom: '5rem'
        }}>
          {night.steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{
                background: i % 2 === 0 ? 'rgba(23,17,15,0.7)' : 'rgba(82,54,74,0.5)',
                padding: '2rem 1.5rem',
                borderBottom: i < 4 ? '1px solid rgba(201,162,94,0.2)' : 'none',
                minHeight: '180px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                  color: 'var(--gold)', fontWeight: 700,
                  marginBottom: '0.5rem'
                }}>
                  {step.time}
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                  fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem'
                }}>
                  {step.title}
                </div>
                <p style={{ color: 'var(--sand)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Art Shaped by Resilience */}
        <Reveal>
          <div className="resilience-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.5fr',
            gap: '4rem', alignItems: 'center', marginBottom: '5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <ArchFrame
                src={`/images/${resilience.image}`}
                alt={resilience.imageAlt}
                size={380}
              />
              <p style={{
                color: 'var(--gold-soft)', fontSize: '0.85rem',
                marginTop: '0.75rem', fontStyle: 'italic'
              }}>
                {resilience.imageCaption}
              </p>
            </div>
            <div>
              <SectionHeading eyebrow={resilience.eyebrow} heading={resilience.heading} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {resilience.steps.map((step, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '1.5rem', alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      border: '2px solid var(--gold)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                      fontSize: '1.2rem', fontWeight: 700
                    }}>
                      {step.n}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                        fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.3rem'
                      }}>
                        {step.title}
                      </div>
                      <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* A Gift for Her Son — CRITICAL: Dr. Rela is NOT described as doctor/surgeon */}
        <Reveal>
          <div className="blessing-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.5fr',
            gap: '4rem', alignItems: 'center', marginBottom: '5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <ArchFrame
                src={`/images/${blessing.image}`}
                alt={blessing.imageAlt}
                size={380}
                caption={blessing.caption}
              />
            </div>
            <div>
              <SectionHeading eyebrow={blessing.eyebrow} heading={blessing.heading} />
              <p style={{
                color: 'var(--sand)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.05rem'
              }}>
                {blessing.text}
              </p>
              <blockquote style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                color: 'var(--ivory)', fontStyle: 'italic',
                borderLeft: '3px solid var(--gold)', paddingLeft: '1.5rem'
              }}>
                {blessing.quote}
              </blockquote>
            </div>
          </div>
        </Reveal>

        {/* Gratitude to the donor family */}
        <Reveal>
          <div className="gratitude-grid" style={{
            display: 'grid', gridTemplateColumns: '1.5fr 1fr',
            gap: '4rem', alignItems: 'center'
          }}>
            <div>
              <SectionHeading eyebrow={gratitude.eyebrow} heading={gratitude.heading} />
              {gratitude.paragraphs.map((p, i) => (
                <p key={i} style={{
                  color: 'var(--sand)', lineHeight: 1.8,
                  marginBottom: '1.25rem', fontSize: '1.05rem'
                }}>
                  {p}
                </p>
              ))}
              <blockquote style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: 'var(--ivory)', fontStyle: 'italic',
                borderLeft: '3px solid var(--gold)',
                paddingLeft: '1.5rem', marginTop: '2rem'
              }}>
                &ldquo;{gratitude.quote}&rdquo;
              </blockquote>
            </div>
            <div style={{ textAlign: 'center' }}>
              <ArchFrame
                src={`/images/${seekingBlessings.image}`}
                alt={seekingBlessings.imageAlt}
                size={380}
                caption={seekingBlessings.caption}
              />
            </div>
          </div>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .night-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .night-grid { grid-template-columns: 1fr !important; }
          .resilience-grid, .blessing-grid, .gratitude-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
