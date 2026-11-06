import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function TheArt({ art }) {
  return (
    <section id="art" className="section-dark" style={{ padding: 'var(--section-pad) 1.5rem' }}>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={art.eyebrow} heading={art.heading} />
        </Reveal>

        {/* Nataraja image + 3 points */}
        <div className="art-intro-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.5fr',
          gap: '4rem', alignItems: 'center', marginBottom: '5rem'
        }}>
          <Reveal>
            <div style={{ textAlign: 'center' }}>
              <ArchFrame
                src={`/images/${art.image}`}
                alt={art.imageAlt}
                size={380}
                caption={art.imageCaption}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {art.points.map((pt, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  marginBottom: '1.5rem', paddingBottom: '1.5rem',
                  borderBottom: i < art.points.length - 1 ? '1px solid rgba(201,162,94,0.15)' : 'none'
                }}>
                  <span style={{ color: 'var(--gold)', fontSize: '1.1rem', marginTop: '0.1rem', flexShrink: 0 }}>✦</span>
                  <p style={{ color: 'var(--sand)', lineHeight: 1.7 }}>{pt}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Bha-Ra-Ta-Natyam tiles */}
        <Reveal>
          <p style={{
            color: 'var(--gold)', textTransform: 'uppercase',
            letterSpacing: '0.15em', fontSize: '0.75rem', marginBottom: '1.5rem'
          }}>
            {art.nameReading.title}
          </p>
          <div className="bhaRaTa-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px', marginBottom: '5rem',
            border: '1px solid rgba(201,162,94,0.3)'
          }}>
            {art.nameReading.parts.map((part, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? 'rgba(82,54,74,0.5)' : 'rgba(23,17,15,0.8)',
                padding: '2rem 1rem', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(201,162,94,0.3)' : 'none'
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--gold)', fontWeight: 700
                }}>
                  {part.syllable}
                </div>
                <div style={{
                  color: 'var(--ivory)', fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem', margin: '0.4rem 0'
                }}>
                  {part.meaning}
                </div>
                <div style={{
                  color: 'var(--sand)', fontSize: '0.8rem',
                  textTransform: 'uppercase', letterSpacing: '0.1em'
                }}>
                  {part.gloss}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Nritta / Nritya / Natya cards */}
        <Reveal>
          <h3 style={{
            fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            marginBottom: '2rem', textAlign: 'center'
          }}>
            {art.aspects.heading}
          </h3>
          <div className="aspects-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem', marginBottom: '5rem'
          }}>
            {art.aspects.items.map((item, i) => (
              <div key={i} style={{
                border: '1px solid rgba(201,162,94,0.4)',
                padding: '2rem', textAlign: 'center',
                borderRadius: '2px', background: 'rgba(82,54,74,0.2)',
                transition: 'all 0.3s'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                  fontSize: '1.6rem', marginBottom: '0.75rem'
                }}>
                  {item.name}
                </h3>
                <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Navarasa 3×3 grid */}
        <Reveal>
          <h3 style={{
            fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            marginBottom: '2rem', textAlign: 'center'
          }}>
            {art.navarasa.heading}
          </h3>
          <div className="navarasa-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px', background: 'rgba(201,162,94,0.2)',
            marginBottom: '5rem', border: '1px solid rgba(201,162,94,0.2)'
          }}>
            {art.navarasa.items.map((item, i) => (
              <div key={i} style={{
                background: 'var(--ink)', padding: '1.5rem', textAlign: 'center',
                transition: 'background 0.3s'
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                  fontSize: '1.3rem', fontWeight: 600
                }}>
                  {item.rasa}
                </div>
                <div style={{
                  color: 'var(--sand)', fontSize: '0.85rem', marginTop: '0.3rem',
                  textTransform: 'uppercase', letterSpacing: '0.08em'
                }}>
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Margam 7-step path */}
        <Reveal>
          <h3 style={{
            fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            marginBottom: '0.5rem', textAlign: 'center'
          }}>
            {art.margam.heading}
          </h3>
          <p style={{
            color: 'var(--sand)', textAlign: 'center',
            marginBottom: '3rem', fontSize: '0.95rem'
          }}>
            {art.margam.intro}
          </p>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1rem',
            maxWidth: 700, margin: '0 auto', marginBottom: '1.5rem'
          }}>
            {art.margam.items.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'center',
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(201,162,94,0.25)',
                borderRadius: '2px', background: 'rgba(82,54,74,0.15)'
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  border: '2px solid var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                  fontSize: '1.2rem', fontWeight: 700
                }}>
                  {item.n}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                    fontSize: '1.1rem', fontWeight: 600
                  }}>
                    {item.name}
                  </div>
                  <div style={{ color: 'var(--sand)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{
            color: 'var(--gold-soft)', textAlign: 'center',
            fontSize: '0.8rem', fontStyle: 'italic'
          }}>
            {art.margam.note}
          </p>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .art-intro-grid { grid-template-columns: 1fr !important; }
          .bhaRaTa-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .aspects-grid { grid-template-columns: 1fr !important; }
          .navarasa-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .navarasa-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
