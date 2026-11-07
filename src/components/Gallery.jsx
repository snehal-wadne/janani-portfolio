import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Lightbox from './ui/Lightbox'
import Reveal from './ui/Reveal'
import TempleCanvas from './ui/TempleCanvas'

const CATEGORIES = [
  { id: 'all', label: 'All Moments' },
  { id: 'dance', label: 'Classical Recital' },
  { id: 'tradition', label: 'Guru & Sacred Craft' },
  { id: 'life', label: 'Life & Second Life' }
]

export default function Gallery({ gallery }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = selectedCategory === 'all'
    ? gallery.items
    : gallery.items.filter((item) => item.category === selectedCategory)

  const openLightbox = (originalIndex) => {
    const item = gallery.items[originalIndex]
    const idxInFiltered = filteredItems.findIndex((it) => it.file === item.file)
    setLightboxIndex(idxInFiltered >= 0 ? idxInFiltered : 0)
  }

  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length)
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filteredItems.length)

  return (
    <section
      id="gallery"
      className="section-dark"
      style={{
        padding: 'var(--section-pad) 1rem',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <TempleCanvas style={{ opacity: 0.4 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, boxSizing: 'border-box' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <SectionHeading eyebrow={gallery.eyebrow} heading={gallery.heading} />
            <p style={{
              color: 'var(--sand)',
              fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
              maxWidth: '620px',
              margin: '-1.5rem auto 2.5rem',
              lineHeight: 1.6,
              padding: '0 0.5rem'
            }}>
              Photographic milestones documenting Janani’s devotion to Bharatanatyam, her reverent training under her guru, and her triumphant journey through organ transplantation.
            </p>

            {/* Filter Tabs (Responsive) */}
            <div style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              background: 'rgba(23, 17, 15, 0.8)',
              padding: '6px',
              borderRadius: '30px',
              border: '1px solid rgba(201, 162, 94, 0.3)',
              justifyContent: 'center',
              maxWidth: '100%'
            }}>
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      background: isActive ? 'var(--gold)' : 'transparent',
                      color: isActive ? 'var(--ink)' : 'var(--ivory)',
                      border: 'none',
                      borderRadius: '24px',
                      padding: '0.45rem 1rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.75rem, 1.8vw, 0.82rem)',
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(1rem, 2.5vw, 1.5rem)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <AnimatePresence>
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.file}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                style={{ width: '100%', boxSizing: 'border-box' }}
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View full image: ${item.caption}`}
                  style={{
                    background: 'rgba(23, 17, 15, 0.85)',
                    border: '1.5px solid rgba(201, 162, 94, 0.3)',
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    borderRadius: '4px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(201, 162, 94, 0.2)'
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
                    border: '1px solid rgba(201, 162, 94, 0.2)',
                    overflow: 'hidden',
                    boxSizing: 'border-box'
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
                    <div>
                      <p style={{
                        color: 'var(--ivory)',
                        fontSize: 'clamp(0.85rem, 2vw, 0.92rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 600,
                        margin: 0
                      }}>
                        {item.caption}
                      </p>
                      {item.category && (
                        <span style={{
                          color: 'var(--gold)',
                          fontSize: '0.68rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          opacity: 0.85
                        }}>
                          {item.category === 'dance' ? 'Recital' : (item.category === 'tradition' ? 'Sacred Craft' : 'Life & Miracle')}
                        </span>
                      )}
                    </div>
                    <span style={{ color: 'var(--gold)', fontSize: '0.9rem', flexShrink: 0 }}>
                      ✦
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
