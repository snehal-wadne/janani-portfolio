import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'
import TempleCanvas from './ui/TempleCanvas'

export default function Journey({ journey }) {
  return (
    <section
      id="journey"
      className="section-dark"
      style={{
        padding: 'var(--section-pad) 1rem',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <TempleCanvas style={{ opacity: 0.5 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, boxSizing: 'border-box' }}>
        <Reveal>
          <SectionHeading eyebrow={journey.eyebrow} heading={journey.heading} />
        </Reveal>

        {/* Timeline Desktop & Mobile Responsive */}
        <div className="timeline-container" style={{ position: 'relative', marginBottom: '5rem', width: '100%', boxSizing: 'border-box' }}>
          {/* Desktop Central Spine Line */}
          <div className="timeline-spine-desktop" style={{
            position: 'absolute', left: '50%', top: '10px', bottom: '10px',
            width: '2px', background: 'linear-gradient(180deg, rgba(201,162,94,0.1) 0%, rgba(201,162,94,0.6) 50%, rgba(201,162,94,0.1) 100%)',
            transform: 'translateX(-50%)'
          }} />

          {/* Mobile Left Spine Line */}
          <div className="timeline-spine-mobile" style={{
            position: 'absolute', left: '16px', top: '10px', bottom: '10px',
            width: '2px', background: 'linear-gradient(180deg, rgba(201,162,94,0.1) 0%, rgba(201,162,94,0.6) 50%, rgba(201,162,94,0.1) 100%)',
            display: 'none'
          }} />

          {journey.timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <Reveal key={i} delay={i * 0.05}>
                {/* Desktop Alternating Row */}
                <div className={`timeline-item-desktop ${isLeft ? 'left-item' : 'right-item'}`} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '2.5rem', marginBottom: '3rem', alignItems: 'center'
                }}>
                  {isLeft ? (
                    <>
                      <div style={{ textAlign: 'right', paddingRight: '2.5rem' }}>
                        <span style={{
                          color: 'var(--gold)', fontFamily: 'var(--font-serif)',
                          fontSize: '0.82rem', fontWeight: 600,
                          textTransform: 'uppercase', letterSpacing: '0.1em'
                        }}>
                          {item.label}
                        </span>
                        <h4 style={{
                          fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                          fontSize: '1.25rem', margin: '0.25rem 0'
                        }}>
                          {item.title}
                        </h4>
                        <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                          {item.text}
                        </p>
                      </div>
                      <div style={{ paddingLeft: '2.5rem', position: 'relative' }}>
                        <div style={{
                          position: 'absolute', left: '-8px', top: '50%', transform: 'translateY(-50%)',
                          width: '16px', height: '16px', borderRadius: '50%',
                          background: 'var(--gold)',
                          border: '3px solid var(--ink)',
                          boxShadow: '0 0 0 2px var(--gold)'
                        }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ paddingRight: '2.5rem', position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
                        <div style={{
                          position: 'absolute', right: '-8px', top: '50%', transform: 'translateY(-50%)',
                          width: '16px', height: '16px', borderRadius: '50%',
                          background: 'var(--gold)',
                          border: '3px solid var(--ink)',
                          boxShadow: '0 0 0 2px var(--gold)'
                        }} />
                      </div>
                      <div style={{ paddingLeft: '2.5rem' }}>
                        <span style={{
                          color: 'var(--gold)', fontFamily: 'var(--font-serif)',
                          fontSize: '0.82rem', fontWeight: 600,
                          textTransform: 'uppercase', letterSpacing: '0.1em'
                        }}>
                          {item.label}
                        </span>
                        <h4 style={{
                          fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                          fontSize: '1.25rem', margin: '0.25rem 0'
                        }}>
                          {item.title}
                        </h4>
                        <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                          {item.text}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Row (Shown only on <= 768px, Never overflows) */}
                <div className="timeline-item-mobile" style={{
                  display: 'none',
                  position: 'relative',
                  paddingLeft: '42px',
                  marginBottom: '2rem',
                  textAlign: 'left',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                  {/* Gold node on mobile spine */}
                  <div style={{
                    position: 'absolute', left: '10px', top: '4px',
                    width: '14px', height: '14px', borderRadius: '50%',
                    background: 'var(--gold)',
                    border: '2px solid var(--ink)',
                    boxShadow: '0 0 0 2px var(--gold)'
                  }} />

                  <span style={{
                    color: 'var(--gold)', fontFamily: 'var(--font-serif)',
                    fontSize: '0.78rem', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    display: 'block'
                  }}>
                    {item.label}
                  </span>
                  <h4 style={{
                    fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', margin: '0.2rem 0 0.35rem'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.88rem', margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Diagnosis block */}
        <Reveal>
          <div style={{
            background: 'linear-gradient(135deg, rgba(82,54,74,0.3) 0%, rgba(23,17,15,0.8) 100%)',
            border: '1.5px solid rgba(201,162,94,0.3)',
            borderRadius: '6px',
            padding: 'clamp(1.5rem, 4vw, 3rem) clamp(0.85rem, 3vw, 2rem)',
            marginBottom: '4rem',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
              fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
              marginBottom: '2rem', textAlign: 'center'
            }}>
              {journey.diagnosis.heading}
            </h3>

            {/* Diagnosis Stats */}
            <div className="diagnosis-stats" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(1rem, 2.5vw, 2rem)', marginBottom: '2.5rem',
              width: '100%', boxSizing: 'border-box'
            }}>
              {journey.diagnosis.stats.map((s, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  borderTop: '2px solid var(--gold)',
                  background: 'rgba(23,17,15,0.4)',
                  padding: '1.25rem 0.75rem',
                  borderRadius: '0 0 4px 4px',
                  boxSizing: 'border-box'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                    color: 'var(--gold)', fontWeight: 700
                  }}>
                    {s.value}
                  </div>
                  <div style={{ color: 'var(--sand)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Diagnosis Cards */}
            <div className="diagnosis-cards" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem', marginBottom: '2.5rem',
              width: '100%', boxSizing: 'border-box'
            }}>
              {journey.diagnosis.cards.map((card, i) => (
                <div key={i} style={{
                  padding: 'clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.75rem)',
                  border: '1px solid rgba(201,162,94,0.3)',
                  borderRadius: '4px', background: 'rgba(82,54,74,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  boxSizing: 'border-box'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                    fontSize: '1.15rem', marginBottom: '0.65rem'
                  }}>
                    {card.title}
                  </h4>
                  <p style={{ color: 'var(--sand)', lineHeight: 1.7, fontSize: '0.9rem', margin: 0 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <blockquote style={{
              textAlign: 'center', fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 2.5vw, 1.75rem)',
              color: 'var(--ivory)', fontStyle: 'italic',
              borderTop: '1px solid rgba(201,162,94,0.3)',
              borderBottom: '1px solid rgba(201,162,94,0.3)',
              padding: '1.75rem 0.5rem',
              margin: '0 auto',
              maxWidth: '720px',
              lineHeight: 1.5
            }}>
              &ldquo;{journey.diagnosis.pullQuote}&rdquo;
            </blockquote>
          </div>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-spine-desktop { display: none !important; }
          .timeline-spine-mobile { display: block !important; }
          .timeline-item-desktop { display: none !important; }
          .timeline-item-mobile { display: block !important; }
          .diagnosis-stats, .diagnosis-cards {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}
