import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function Journey({ journey }) {
  return (
    <section id="journey" className="section-dark" style={{ padding: 'var(--section-pad) 1.5rem' }}>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={journey.eyebrow} heading={journey.heading} />
        </Reveal>

        {/* Timeline */}
        <div style={{ position: 'relative', marginBottom: '5rem' }}>
          {/* Centre line */}
          <div className="timeline-line" style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: '1px', background: 'rgba(201,162,94,0.3)',
            transform: 'translateX(-50%)'
          }} />

          {journey.timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div className="timeline-row" style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '2rem', marginBottom: '3rem', alignItems: 'center'
                }}>
                  {isLeft ? (
                    <>
                      <div style={{ textAlign: 'right', paddingRight: '2.5rem' }}>
                        <span style={{
                          color: 'var(--gold)', fontFamily: 'var(--font-serif)',
                          fontSize: '0.85rem', fontWeight: 600,
                          textTransform: 'uppercase', letterSpacing: '0.08em'
                        }}>
                          {item.label}
                        </span>
                        <h3 style={{
                          fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                          fontSize: '1.2rem', margin: '0.3rem 0'
                        }}>
                          {item.title}
                        </h3>
                        <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                          {item.text}
                        </p>
                      </div>
                      <div style={{ paddingLeft: '2rem' }}>
                        <div style={{
                          width: '14px', height: '14px', borderRadius: '50%',
                          background: 'var(--gold)',
                          border: '3px solid var(--ink)',
                          boxShadow: '0 0 0 2px var(--gold)',
                          marginLeft: '-7px'
                        }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{
                        paddingRight: '2rem',
                        display: 'flex', justifyContent: 'flex-end'
                      }}>
                        <div style={{
                          width: '14px', height: '14px', borderRadius: '50%',
                          background: 'var(--gold)',
                          border: '3px solid var(--ink)',
                          boxShadow: '0 0 0 2px var(--gold)',
                          marginRight: '-7px'
                        }} />
                      </div>
                      <div style={{ paddingLeft: '2.5rem' }}>
                        <span style={{
                          color: 'var(--gold)', fontFamily: 'var(--font-serif)',
                          fontSize: '0.85rem', fontWeight: 600,
                          textTransform: 'uppercase', letterSpacing: '0.08em'
                        }}>
                          {item.label}
                        </span>
                        <h3 style={{
                          fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                          fontSize: '1.2rem', margin: '0.3rem 0'
                        }}>
                          {item.title}
                        </h3>
                        <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                          {item.text}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Diagnosis block */}
        <Reveal>
          <h3 style={{
            fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            marginBottom: '2.5rem', textAlign: 'center'
          }}>
            {journey.diagnosis.heading}
          </h3>
          <div className="diagnosis-stats" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem', marginBottom: '3rem'
          }}>
            {journey.diagnosis.stats.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center',
                borderTop: '2px solid var(--gold)', paddingTop: '1.5rem'
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: 'var(--gold)', fontWeight: 700
                }}>
                  {s.value}
                </div>
                <div style={{ color: 'var(--sand)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="diagnosis-cards" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem', marginBottom: '3rem'
          }}>
            {journey.diagnosis.cards.map((card, i) => (
              <div key={i} style={{
                padding: '2rem',
                border: '1px solid rgba(201,162,94,0.3)',
                borderRadius: '2px', background: 'rgba(82,54,74,0.2)'
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                  fontSize: '1.1rem', marginBottom: '0.75rem'
                }}>
                  {card.title}
                </h4>
                <p style={{ color: 'var(--sand)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <blockquote style={{
            textAlign: 'center', fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
            color: 'var(--ivory)', fontStyle: 'italic',
            borderTop: '1px solid rgba(201,162,94,0.3)',
            borderBottom: '1px solid rgba(201,162,94,0.3)',
            padding: '2rem'
          }}>
            &ldquo;{journey.diagnosis.pullQuote}&rdquo;
          </blockquote>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none; }
          .timeline-row {
            grid-template-columns: 1fr !important;
          }
          .timeline-row > div:first-child:has(div[style*="marginLeft"]) {
            display: none;
          }
          .timeline-row > div:last-child:has(div[style*="marginRight"]) {
            display: none;
          }
          .diagnosis-stats, .diagnosis-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
