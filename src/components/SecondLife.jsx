import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'
import TempleCanvas from './ui/TempleCanvas'

export default function SecondLife({ data }) {
  const { night, resilience, blessing, gratitude, seekingBlessings } = data

  return (
    <section
      id="second-life"
      style={{
        background: 'linear-gradient(180deg, var(--plum) 0%, #301B2B 50%, var(--ink) 100%)',
        padding: 'var(--section-pad) 1rem',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <TempleCanvas style={{ opacity: 0.4 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, boxSizing: 'border-box' }}>

        {/* The Night That Changed Everything */}
        <Reveal>
          <SectionHeading eyebrow={night.eyebrow} heading={night.heading} />
        </Reveal>
        <div className="night-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginBottom: '5rem',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {night.steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div style={{
                background: 'rgba(23,17,15,0.75)',
                border: '1.5px solid rgba(201,162,94,0.3)',
                borderRadius: '4px',
                padding: 'clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.5rem)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,162,94,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)',
                  color: 'var(--gold)', fontWeight: 700,
                  marginBottom: '0.35rem'
                }}>
                  {step.time}
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', fontWeight: 600, marginBottom: '0.5rem'
                }}>
                  {step.title}
                </div>
                <p style={{ color: 'var(--sand)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
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
            gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: '5rem',
            width: '100%'
          }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              <ArchFrame
                src={`/images/${resilience.image}`}
                alt={resilience.imageAlt}
                size={380}
              />
              <p style={{
                color: 'var(--gold-soft)', fontSize: '0.82rem',
                marginTop: '0.75rem', fontStyle: 'italic'
              }}>
                {resilience.imageCaption}
              </p>
            </div>
            <div>
              <SectionHeading eyebrow={resilience.eyebrow} heading={resilience.heading} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.25rem', width: '100%' }}>
                {resilience.steps.map((step, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '1.25rem', alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '50%',
                      border: '2px solid var(--gold)',
                      background: 'rgba(201,162,94,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                      fontSize: '1.1rem', fontWeight: 700
                    }}>
                      {step.n}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                        fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.2rem'
                      }}>
                        {step.title}
                      </div>
                      <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>
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
            gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: '5rem',
            width: '100%'
          }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
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
                color: 'var(--sand)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', marginTop: '1.25rem'
              }}>
                {blessing.text}
              </p>
              <blockquote style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
                color: 'var(--ivory)', fontStyle: 'italic',
                borderLeft: '3px solid var(--gold)', paddingLeft: '1.25rem',
                lineHeight: 1.5
              }}>
                &ldquo;{blessing.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </Reveal>

        {/* Gratitude to the donor family */}
        <Reveal>
          <div className="gratitude-grid" style={{
            display: 'grid', gridTemplateColumns: '1.5fr 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center',
            width: '100%'
          }}>
            <div>
              <SectionHeading eyebrow={gratitude.eyebrow} heading={gratitude.heading} />
              <div style={{ marginTop: '1.25rem' }}>
                {gratitude.paragraphs.map((p, i) => (
                  <p key={i} style={{
                    color: 'var(--sand)', lineHeight: 1.8,
                    marginBottom: '1.25rem', fontSize: 'clamp(0.92rem, 2vw, 1.02rem)'
                  }}>
                    {p}
                  </p>
                ))}
              </div>
              <blockquote style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
                color: 'var(--ivory)', fontStyle: 'italic',
                borderLeft: '3px solid var(--gold)',
                paddingLeft: '1.25rem', marginTop: '1.75rem',
                lineHeight: 1.5
              }}>
                &ldquo;{gratitude.quote}&rdquo;
              </blockquote>
            </div>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
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
        @media (max-width: 860px) {
          .resilience-grid, .blessing-grid, .gratitude-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
          .gratitude-grid > div:last-child {
            order: -1;
          }
        }
        @media (max-width: 520px) {
          .night-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
