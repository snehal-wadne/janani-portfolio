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
    // Find index in filteredItems or original items
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
        padding: 'var(--section-pad) 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <TempleCanvas style={{ opacity: 0.4 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <SectionHeading eyebrow={gallery.eyebrow} heading={gallery.heading} />
            <p style={{
              color: 'var(--sand)',
              fontSize: '0.95rem',
              maxWidth: '620px',
              margin: '-1.5rem auto 2.5rem',
              lineHeight: 1.6
            }}>
              Photographic milestones documenting Janani’s devotion to Bharatanatyam, her reverent training under her guru, and her triumphant journey through organ transplantation.
            </p>

            {/* Filter Tabs */}
            <div style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              background: 'rgba(23, 17, 15, 0.8)',
              padding: '6px',
              borderRadius: '30px',
              border: '1px solid rgba(201, 162, 94, 0.3)',
              justifyContent: 'center'
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
                      padding: '0.5rem 1.25rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem'
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
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View full image: ${item.caption}`}
                  style={{
                    background: 'rgba(23, 17, 15, 0.85)',
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
                    height: '260px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#100B09',
                    borderRadius: '2px',
                    border: '1px solid rgba(201, 162, 94, 0.2)',
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
                    marginTop: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                    <div>
                      <p style={{
                        color: 'var(--ivory)',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 600,
                        margin: 0
                      }}>
                        {item.caption}
                      </p>
                      {item.category && (
                        <span style={{
                          color: 'var(--gold)',
                          fontSize: '0.7rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          opacity: 0.85
                        }}>
                          {item.category === 'dance' ? 'Recital' : (item.category === 'tradition' ? 'Sacred Craft' : 'Life & Miracle')}
                        </span>
                      )}
                    </div>
                    <span style={{ color: 'var(--gold)', fontSize: '0.95rem' }}>
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
