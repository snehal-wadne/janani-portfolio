import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'
import TempleCanvas from './ui/TempleCanvas'

export default function Mission({ mission }) {
  return (
    <section
      id="mission"
      style={{
        background: 'var(--ink)', padding: 'var(--section-pad) 1rem',
        position: 'relative', overflow: 'hidden',
        width: '100%', boxSizing: 'border-box'
      }}
    >
      <TempleCanvas style={{ opacity: 0.5 }} />

      {/* Mandala background */}
      <svg
        style={{
          position: 'absolute', right: '-10%', top: '5%',
          width: '500px', height: '500px',
          opacity: 0.04, pointerEvents: 'none'
        }}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="190" fill="none" stroke="#C9A25E" strokeWidth="1"/>
        <circle cx="200" cy="200" r="150" fill="none" stroke="#C9A25E" strokeWidth="0.5"/>
        <circle cx="200" cy="200" r="110" fill="none" stroke="#C9A25E" strokeWidth="1"/>
        <circle cx="200" cy="200" r="70" fill="none" stroke="#C9A25E" strokeWidth="0.5"/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((a) => (
          <line
            key={a}
            x1={200 + Math.cos(a * Math.PI / 180) * 70}
            y1={200 + Math.sin(a * Math.PI / 180) * 70}
            x2={200 + Math.cos(a * Math.PI / 180) * 190}
            y2={200 + Math.sin(a * Math.PI / 180) * 190}
            stroke="#C9A25E" strokeWidth="0.5"
          />
        ))}
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 1, boxSizing: 'border-box' }}>
        <Reveal>
          <SectionHeading eyebrow={mission.eyebrow} heading={mission.heading} />
          <p style={{ color: 'var(--sand)', lineHeight: 1.8, maxWidth: '65ch', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', marginBottom: '3rem' }}>
            {mission.intro}
          </p>
        </Reveal>

        {/* Headline quote */}
        <Reveal delay={0.1}>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3.5vw, 2rem)',
            border: '1.5px solid rgba(201,162,94,0.3)',
            borderRadius: '4px',
            marginBottom: '5rem',
            background: 'rgba(82,54,74,0.18)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
            boxSizing: 'border-box',
            width: '100%'
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 5vw, 3.8rem)',
              color: 'var(--gold)', fontWeight: 700,
              lineHeight: 1.2
            }}>
              {mission.headlineQuote}
            </p>
            <p style={{
              color: 'var(--sand)', marginTop: '1.25rem',
              fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              lineHeight: 1.5
            }}>
              &ldquo;{mission.personalQuote}&rdquo;
            </p>
          </div>
        </Reveal>

        {/* Four reasons cards */}
        <Reveal delay={0.15}>
          <div className="reasons-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem', marginBottom: '5rem', width: '100%', boxSizing: 'border-box'
          }}>
            {mission.reasons.map((reason, i) => (
              <div key={i} style={{
                border: '1px solid rgba(201,162,94,0.3)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1rem, 2.5vw, 1.75rem)', borderRadius: '4px',
                background: 'rgba(82,54,74,0.22)',
                transition: 'transform 0.3s, border-color 0.3s',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                boxSizing: 'border-box'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'rgba(201,162,94,0.7)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(201,162,94,0.3)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                  fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.65rem'
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
                  fontSize: '1.15rem', marginBottom: '0.65rem'
                }}>
                  {reason.title}
                </h3>
                <p style={{ color: 'var(--sand)', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Call to action */}
        <Reveal delay={0.2}>
          <div style={{
            textAlign: 'center', marginBottom: '4rem',
            padding: 'clamp(2rem, 5vw, 3rem) clamp(0.75rem, 3vw, 2rem)',
            borderTop: '1px solid rgba(201,162,94,0.3)',
            borderBottom: '1px solid rgba(201,162,94,0.3)',
            width: '100%', boxSizing: 'border-box'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
              fontSize: 'clamp(1.35rem, 3vw, 2.3rem)', marginBottom: '2rem'
            }}>
              {mission.callToAction.heading}
            </h3>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '1.15rem',
              maxWidth: 520, margin: '0 auto', marginBottom: '2.5rem', width: '100%', boxSizing: 'border-box'
            }}>
              {mission.callToAction.steps.map((step, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '1rem', alignItems: 'center',
                  textAlign: 'left'
                }}>
                  <span style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    border: '2px solid var(--gold)',
                    background: 'rgba(201,162,94,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                    fontWeight: 700, fontSize: '0.95rem'
                  }}>
                    {i + 1}
                  </span>
                  <p style={{ color: 'var(--sand)', lineHeight: 1.5, margin: 0, fontSize: '0.95rem' }}>{step}</p>
                </div>
              ))}
            </div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
              color: 'var(--gold)', fontWeight: 600, margin: 0
            }}>
              {mission.callToAction.closing}
            </p>
          </div>
        </Reveal>

        {/* Message to the world */}
        <Reveal delay={0.25}>
          <div style={{
            maxWidth: '65ch', margin: '0 auto',
            textAlign: 'center', marginBottom: '4rem', padding: '0 0.5rem'
          }}>
            {mission.messageToTheWorld.map((line, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                color: i === 0 ? 'var(--ivory)' : 'var(--sand)',
                lineHeight: 1.7, marginBottom: '1.2rem',
                fontStyle: 'italic'
              }}>
                {line}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Links to long-form pages */}
        <Reveal delay={0.3}>
          <div className="mission-links-group" style={{
            display: 'flex', gap: '0.85rem', flexWrap: 'wrap',
            justifyContent: 'center', marginBottom: '4rem', width: '100%'
          }}>
            <Link
              to="/story"
              style={{
                background: 'transparent', color: 'var(--gold)',
                border: '1.5px solid var(--gold)', padding: '0.85rem 1.75rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.82rem', letterSpacing: '0.06em',
                textTransform: 'uppercase', borderRadius: '2px',
                transition: 'all 0.3s', display: 'inline-block',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
            >
              Read Her Full Story
            </Link>
            <Link
              to="/speech"
              style={{
                background: 'transparent', color: 'var(--gold)',
                border: '1.5px solid var(--gold)', padding: '0.85rem 1.75rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.82rem', letterSpacing: '0.06em',
                textTransform: 'uppercase', borderRadius: '2px',
                transition: 'all 0.3s', display: 'inline-block',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
            >
              Her Awareness Speech
            </Link>
            <Link
              to="/volunteer"
              style={{
                background: 'transparent', color: 'var(--gold)',
                border: '1.5px solid var(--gold)', padding: '0.85rem 1.75rem',
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.82rem', letterSpacing: '0.06em',
                textTransform: 'uppercase', borderRadius: '2px',
                transition: 'all 0.3s', display: 'inline-block',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
            >
              Volunteer Statement
            </Link>
          </div>
        </Reveal>

        {/* Disclaimer */}
        <Reveal delay={0.35}>
          <p style={{
            color: 'rgba(227,213,181,0.6)',
            fontSize: '0.78rem', textAlign: 'center',
            maxWidth: '60ch', margin: '0 auto', lineHeight: 1.6,
            borderTop: '1px solid rgba(201,162,94,0.15)', paddingTop: '1.75rem',
            paddingLeft: '0.5rem', paddingRight: '0.5rem'
          }}>
            {mission.disclaimer}
          </p>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reasons-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .reasons-grid { grid-template-columns: 1fr !important; }
          .mission-links-group {
            flex-direction: column;
            width: 100%;
          }
          .mission-links-group a {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
