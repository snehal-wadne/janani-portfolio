import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'
import TempleCanvas from './ui/TempleCanvas'
import NavarasaExplorer from './ui/NavarasaExplorer'
import MargamStepper from './ui/MargamStepper'
import TalaVisualizer from './ui/TalaVisualizer'

export default function TheArt({ art }) {
  return (
    <section
      id="art"
      className="section-dark"
      style={{
        padding: 'var(--section-pad) 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Floating Temple Diyas & Embers */}
      <TempleCanvas style={{ opacity: 0.7 }} />

      {/* Traditional Watermark Sanskrit Calligraphy Shloka in Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center',
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          color: 'var(--gold)',
          opacity: 0.04,
          letterSpacing: '0.2em',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          zIndex: 0
        }}
      >
        यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः । यतो मनस्ततो भावो यतो भावस्ततो रसः ॥
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <SectionHeading
            eyebrow={art.eyebrow}
            heading={art.heading}
          />
          <p style={{
            color: 'var(--sand)',
            lineHeight: 1.8,
            fontSize: '1.05rem',
            maxWidth: '720px',
            marginBottom: '3.5rem'
          }}>
            For Janani, Bharatanatyam is more than a classical tradition—it was her childhood dream from age four, her spiritual anchor during five years on the transplant list, and the breath of her second life.
          </p>
        </Reveal>

        {/* Nataraja image + 3 points */}
        <div className="art-intro-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
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
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                  marginBottom: '1.5rem', paddingBottom: '1.5rem',
                  borderBottom: i < art.points.length - 1 ? '1px solid rgba(201,162,94,0.15)' : 'none'
                }}>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', marginTop: '0.1rem', flexShrink: 0 }}>✦</span>
                  <p style={{ color: 'var(--sand)', lineHeight: 1.7, fontSize: '1.05rem' }}>{pt}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Interactive Tala Rhythm & Salangai Pulse */}
        <Reveal>
          <TalaVisualizer />
        </Reveal>

        {/* Bha-Ra-Ta-Natyam tiles */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <p style={{
              color: 'var(--gold)', textTransform: 'uppercase',
              letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600
            }}>
              {art.nameReading.title}
            </p>
          </div>
          <div className="bhaRaTa-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px', marginBottom: '5rem',
            border: '1.5px solid rgba(201,162,94,0.3)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            {art.nameReading.parts.map((part, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? 'rgba(82,54,74,0.45)' : 'rgba(23,17,15,0.75)',
                padding: '2.5rem 1.5rem', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(201,162,94,0.3)' : 'none',
                transition: 'background 0.3s'
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  color: 'var(--gold)', fontWeight: 700
                }}>
                  {part.syllable}
                </div>
                <div style={{
                  color: 'var(--ivory)', fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem', margin: '0.5rem 0'
                }}>
                  {part.meaning}
                </div>
                <div style={{
                  color: 'var(--sand)', fontSize: '0.8rem',
                  textTransform: 'uppercase', letterSpacing: '0.12em'
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
            fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
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
                border: '1.5px solid rgba(201,162,94,0.35)',
                padding: '2.25rem 2rem', textAlign: 'center',
                borderRadius: '4px', background: 'rgba(82,54,74,0.25)',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,162,94,0.35)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                  fontSize: '1.75rem', marginBottom: '0.75rem'
                }}>
                  {item.name}
                </h4>
                <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Interactive Navarasa Explorer */}
        <Reveal>
          <NavarasaExplorer heading={art.navarasa.heading} />
        </Reveal>

        {/* Interactive Margam Stepper */}
        <Reveal>
          <MargamStepper margam={art.margam} />
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .art-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .bhaRaTa-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bhaRaTa-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .bhaRaTa-grid > div:nth-child(1),
          .bhaRaTa-grid > div:nth-child(2) {
            border-bottom: 1px solid rgba(201,162,94,0.3);
          }
          .aspects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .bhaRaTa-grid {
            grid-template-columns: 1fr !important;
          }
          .bhaRaTa-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(201,162,94,0.3) !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
