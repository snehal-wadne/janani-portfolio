import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function Collaborate({ collaborate }) {
  const { items, howWeBegin, closing, contact } = collaborate

  // Check if any contact value is non-null
  const hasContact = Object.entries(contact).some(([k, v]) => k !== '_note' && v !== null)

  return (
    <section id="collaborate" className="section-light" style={{ padding: 'var(--section-pad) 1.5rem' }}>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={collaborate.eyebrow} heading={collaborate.heading} light />
        </Reveal>

        {/* Service cards */}
        <div className="collab-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem', marginBottom: '5rem'
        }}>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                border: '1px solid rgba(82,54,74,0.3)',
                padding: '2rem', borderRadius: '2px',
                background: 'var(--ivory)',
                transition: 'all 0.3s',
                boxShadow: '0 2px 12px rgba(23,17,15,0.07)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(23,17,15,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(82,54,74,0.3)'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(23,17,15,0.07)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                  fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem'
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', color: 'var(--plum)',
                  fontSize: '1.1rem', marginBottom: '0.75rem'
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6B5565', lineHeight: 1.6, fontSize: '0.9rem' }}>
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
            padding: '3rem', borderRadius: '2px', marginBottom: '5rem'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)', color: 'var(--gold)',
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', marginBottom: '2rem',
              textAlign: 'center'
            }}>
              {howWeBegin.heading}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: 480, margin: '0 auto' }}>
              {howWeBegin.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <span style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: '2px solid var(--gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'var(--font-serif)', color: 'var(--gold)',
                    fontWeight: 700, fontSize: '1rem'
                  }}>
                    {i + 1}
                  </span>
                  <p style={{ color: 'var(--sand)', lineHeight: 1.5 }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Closing banner */}
        <Reveal>
          <div className="closing-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '4rem', alignItems: 'center', marginBottom: '4rem'
          }}>
            <div>
              <ArchFrame
                src={`/images/${closing.image}`}
                alt={closing.imageAlt}
                size={460}
                light
                caption={closing.caption}
              />
            </div>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: 'var(--plum)', fontWeight: 700, display: 'block', lineHeight: 1
                }}>
                  {closing.greeting}
                </span>
                <span style={{ color: '#6B5565', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  — {closing.greetingMeaning}
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                color: 'var(--plum)', lineHeight: 1.4, marginBottom: '1.5rem'
              }}>
                {closing.line}
              </p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                color: '#6B5565', fontStyle: 'italic'
              }}>
                {closing.signature}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Contact block */}
        <Reveal>
          <div style={{
            borderTop: '1px solid rgba(82,54,74,0.3)',
            paddingTop: '3rem', textAlign: 'center'
          }}>
            <p style={{
              color: 'var(--gold)', textTransform: 'uppercase',
              letterSpacing: '0.15em', fontSize: '0.75rem',
              marginBottom: '1.5rem', fontWeight: 600
            }}>
              Contact
            </p>
            {hasContact ? (
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {contact.email && (
                  <a href={`mailto:${contact.email}`} style={{ color: 'var(--plum)' }}>
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a href={`tel:${contact.phone}`} style={{ color: 'var(--plum)' }}>
                    {contact.phone}
                  </a>
                )}
                {contact.instagram && (
                  <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noreferrer" style={{ color: 'var(--plum)' }}>
                    Instagram
                  </a>
                )}
                {contact.youtube && (
                  <a href={contact.youtube} target="_blank" rel="noreferrer" style={{ color: 'var(--plum)' }}>
                    YouTube
                  </a>
                )}
                {contact.facebook && (
                  <a href={contact.facebook} target="_blank" rel="noreferrer" style={{ color: 'var(--plum)' }}>
                    Facebook
                  </a>
                )}
                {contact.location && (
                  <span style={{ color: 'var(--plum)' }}>{contact.location}</span>
                )}
              </div>
            ) : (
              <p style={{ color: '#6B5565', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                Contact details coming soon.
              </p>
            )}
          </div>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .collab-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .collab-grid { grid-template-columns: 1fr !important; }
          .closing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
