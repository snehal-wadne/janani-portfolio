import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'
import Lightbox from './ui/Lightbox'
import Reveal from './ui/Reveal'

export default function Gallery({ gallery }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i - 1 + gallery.items.length) % gallery.items.length)
  const nextImage = () => setLightboxIndex((i) => (i + 1) % gallery.items.length)

  return (
    <section id="gallery" className="section-dark" style={{ padding: 'var(--section-pad) 1.5rem' }}>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow={gallery.eyebrow} heading={gallery.heading} />
        </Reveal>

        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          {gallery.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <button
                onClick={() => openLightbox(i)}
                aria-label={`View image: ${item.caption}`}
                style={{
                  background: 'rgba(23, 17, 15, 0.75)',
                  border: '1.5px solid rgba(201, 162, 94, 0.3)',
                  cursor: 'pointer',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  borderRadius: '4px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(201, 162, 94, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 162, 94, 0.3)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#100B09',
                  borderRadius: '2px',
                  border: '1px solid rgba(201, 162, 94, 0.15)',
                  overflow: 'hidden'
                }}>
                  <img
                    src={`/images/${item.file}`}
                    alt={item.alt}
                    loading="lazy"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </div>
                <div style={{
                  marginTop: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%'
                }}>
                  <p style={{
                    color: 'var(--ivory)',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 600,
                    margin: 0
                  }}>
                    {item.caption}
                  </p>
                  <span style={{ color: 'var(--gold)', fontSize: '0.85rem', opacity: 0.8 }}>
                    ✦
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={gallery.items}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
