import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function Collaborate({ collaborate }) {
  const { items, howWeBegin, closing, contact } = collaborate

  // Check if any contact value is non-null
  const hasContact = Object.entries(contact).some(([k, v]) => k !== '_note' && v !== null)

  return (
    <section id="collaborate" className="section-light" style={{ padding: 'var(--section-pad) 1rem', width: '100%', boxSizing: 'border-box' }}>
      <div className="container" style={{ boxSizing: 'border-box' }}>
        <Reveal>
          <SectionHeading eyebrow={collaborate.eyebrow} heading={collaborate.heading} light />
        </Reveal>

        {/* Service cards */}
        <div className="collab-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem', marginBottom: '5rem', width: '100%', boxSizing: 'border-box'
        }}>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div style={{
                border: '1px solid rgba(82,54,74,0.25)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem) clamp(1rem, 2.5vw, 1.75rem)', borderRadius: '4px',
                background: 'var(--ivory)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(23,17,15,0.06)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(82, 54, 74, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(82,54,74,0.25)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(23,17,15,0.06)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                  fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.65rem'
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--plum)',
                  fontSize: '1.15rem', marginBottom: '0.65rem'
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6B5565', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* How we begin */}
        <Reveal>
          <div style={{
            background: 'var(--plum)', color: 'var(--ivory)',
            padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1rem, 3.5vw, 2rem)', borderRadius: '6px', marginBottom: '5rem',
            boxShadow: '0 16px 40px rgba(82, 54, 74, 0.15)',
            width: '100%', boxSizing: 'border-box'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)', color: 'var(--gold)',
              fontSize: 'clamp(1.35rem, 2.5vw, 2.2rem)', marginBottom: '2rem',
              textAlign: 'center'
            }}>
              {howWeBegin.heading}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: 520, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
              {howWeBegin.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    border: '2px solid var(--gold)',
                    background: 'rgba(201, 162, 94, 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                    fontWeight: 700, fontSize: '1.05rem'
                  }}>
                    {i + 1}
                  </span>
                  <p style={{ color: 'var(--sand)', lineHeight: 1.6, margin: 0, fontSize: 'clamp(0.95rem, 2vw, 1.02rem)' }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Closing banner */}
        <Reveal>
          <div className="closing-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: '5rem',
            width: '100%'
          }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              <ArchFrame
                src={`/images/${closing.image}`}
                alt={closing.imageAlt}
                size={380}
                light
                caption={closing.caption}
              />
            </div>
            <div style={{ width: '100%', boxSizing: 'border-box' }}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                color: 'var(--plum)', fontWeight: 700, lineHeight: 1,
                marginBottom: '0.4rem'
              }}>
                {closing.greeting}
              </div>
              <p style={{
                color: 'var(--gold)', fontSize: '0.82rem',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                marginBottom: '1.25rem', fontWeight: 600
              }}>
                &ldquo;{closing.greetingMeaning}&rdquo;
              </p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)',
                color: 'var(--plum)', lineHeight: 1.5,
                marginBottom: '1.25rem', fontStyle: 'italic'
              }}>
                {closing.line}
              </p>
              <p style={{
                color: '#6B5565', fontSize: '0.92rem',
                borderTop: '1px solid rgba(82,54,74,0.2)',
                paddingTop: '0.85rem', fontStyle: 'italic'
              }}>
                — {closing.signature}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Contact details */}
        <Reveal>
          <div style={{
            textAlign: 'center',
            padding: '2rem clamp(0.75rem, 3vw, 1.5rem)',
            borderTop: '1px solid rgba(82,54,74,0.15)',
            borderBottom: '1px solid rgba(82,54,74,0.15)',
            width: '100%', boxSizing: 'border-box'
          }}>
            <p style={{
              color: 'var(--gold)', textTransform: 'uppercase',
              letterSpacing: '0.15em', fontSize: '0.78rem', marginBottom: '0.85rem',
              fontWeight: 600
            }}>
              Contact
            </p>
            {hasContact ? (
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {contact.email && (
                  <a href={`mailto:${contact.email}`} style={{ color: 'var(--plum)', fontWeight: 600 }}>
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a href={`tel:${contact.phone}`} style={{ color: 'var(--plum)', fontWeight: 600 }}>
                    {contact.phone}
                  </a>
                )}
                {contact.instagram && (
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--plum)', fontWeight: 600 }}>
                    Instagram
                  </a>
                )}
                {contact.youtube && (
                  <a href={contact.youtube} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--plum)', fontWeight: 600 }}>
                    YouTube
                  </a>
                )}
                {contact.location && (
                  <span style={{ color: 'var(--plum)' }}>{contact.location}</span>
                )}
              </div>
            ) : (
              <p style={{
                color: 'var(--plum)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(0.95rem, 2vw, 1.08rem)',
                margin: 0
              }}>
                Contact details coming soon. For cultural events, lectures or awareness enquiries, please check back shortly.
              </p>
            )}
          </div>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 960px) {
          .collab-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .closing-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
            text-align: center;
          }
        }
        @media (max-width: 520px) {
          .collab-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
