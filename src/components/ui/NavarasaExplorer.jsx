import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAVARASA_DATA = [
  {
    id: 'shringara',
    rasa: 'Shringara',
    devanagari: 'शृङ्गार',
    meaning: 'Love & Devotion',
    color: '#D4738C',
    colorName: 'Syama / Rosy Amber',
    deity: 'Vishnu',
    biographyReflection: 'Her childhood love for Bharatanatyam sparked at age four, becoming a sacred devotion to the dance that no adversity could extinguish.'
  },
  {
    id: 'hasya',
    rasa: 'Hasya',
    devanagari: 'हास्य',
    meaning: 'Joy & Mirth',
    color: '#E6B800',
    colorName: 'Sita / Golden Light',
    deity: 'Pramatha',
    biographyReflection: 'The radiant smile on stage, the laughter she shares teaching her students, and the pure happiness of watching her son grow.'
  },
  {
    id: 'karuna',
    rasa: 'Karuna',
    devanagari: 'करुणा',
    meaning: 'Compassion & Mercy',
    color: '#A89F91',
    colorName: 'Kapota / Dove Grey',
    deity: 'Yama',
    biographyReflection: 'The supreme grace of the donor and their family, who in their darkest hour of grief showed divine mercy to give Janani a second life.'
  },
  {
    id: 'raudra',
    rasa: 'Raudra',
    devanagari: 'रौद्र',
    meaning: 'Fierce Will & Trial',
    color: '#C7382B',
    colorName: 'Rakta / Crimson Fire',
    deity: 'Rudra (Shiva)',
    biographyReflection: 'The fierce internal battle against failing health, refusing to surrender hope through five painful years on the transplant waiting list.'
  },
  {
    id: 'veera',
    rasa: 'Veera',
    devanagari: 'वीर',
    meaning: 'Courage & Heroism',
    color: '#E09943',
    colorName: 'Gaura / Radiant Saffron',
    deity: 'Indra',
    biographyReflection: 'Bravery entering the 12-hour surgery, enduring intensive care, rebuilding muscles from zero, and stepping boldly back onto stage.'
  },
  {
    id: 'bhayanaka',
    rasa: 'Bhayanaka',
    devanagari: 'भयानक',
    meaning: 'Fear & Fragility',
    color: '#4A3B4E',
    colorName: 'Krsna / Midnight Ink',
    deity: 'Kala',
    biographyReflection: 'The chill of the diagnosis at age 13 when her health collapsed and the doctors laid bare the grave risks of surgery.'
  },
  {
    id: 'bibhatsa',
    rasa: 'Bibhatsa',
    devanagari: 'बीभत्स',
    meaning: 'Ordeal & Aversion',
    color: '#5E6B5A',
    colorName: 'Nila / Shadowed Earth',
    deity: 'Mahakala',
    biographyReflection: 'The harsh physical decline before surgery—darkened skin, loss of hair, and physical exhaustion—transformed through resilience.'
  },
  {
    id: 'adbhuta',
    rasa: 'Adbhuta',
    devanagari: 'अद्भुत',
    meaning: 'Wonder & Miracle',
    color: '#D4AF37',
    colorName: 'Pita / Luminous Gold',
    deity: 'Brahma',
    biographyReflection: 'The true miracle in the year after transplant: welcoming her healthy son on 28 September 2017 and dancing once again.'
  },
  {
    id: 'shanta',
    rasa: 'Shanta',
    devanagari: 'शान्त',
    meaning: 'Peace & Transcendence',
    color: '#FAF5EB',
    colorName: 'Sveta / Pristine Ivory',
    deity: 'Para-Brahman',
    biographyReflection: 'The profound inner peace found in folded hands before Lord Nataraja and living each day with deep gratitude and purpose.'
  }
]

export default function NavarasaExplorer({ heading }) {
  const [activeRasa, setActiveRasa] = useState(NAVARASA_DATA[0])

  return (
    <div style={{ marginBottom: '5rem' }}>
      {/* Section Title */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--ivory)',
          fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
          marginBottom: '0.75rem'
        }}>
          {heading || 'Navarasa: The Nine Emotions of Life & Stage'}
        </h3>
        <p style={{
          color: 'var(--sand)',
          fontSize: '0.95rem',
          maxWidth: '620px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          In classical Bharatanatyam, the nine rasas mirror every facet of human experience. For Janani, these are not just stage emotions, but the lived chapters of her survival and art.
        </p>
      </div>

      {/* Grid of 9 Rasa Selectors */}
      <div className="navarasa-interactive-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        maxWidth: '920px',
        margin: '0 auto 2rem'
      }}>
        {NAVARASA_DATA.map((item) => {
          const isSelected = activeRasa.id === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveRasa(item)}
              aria-label={`Select ${item.rasa}: ${item.meaning}`}
              style={{
                background: isSelected ? 'rgba(82, 54, 74, 0.7)' : 'rgba(23, 17, 15, 0.85)',
                border: isSelected ? '1.5px solid var(--gold)' : '1px solid rgba(201, 162, 94, 0.25)',
                borderRadius: '4px',
                padding: '1.25rem 1rem',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                position: 'relative',
                boxShadow: isSelected ? '0 8px 24px rgba(201, 162, 94, 0.2)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'rgba(201, 162, 94, 0.6)'
                  e.currentTarget.style.background = 'rgba(82, 54, 74, 0.35)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'rgba(201, 162, 94, 0.25)'
                  e.currentTarget.style.background = 'rgba(23, 17, 15, 0.85)'
                }
              }}
            >
              <span style={{
                fontSize: '0.75rem',
                color: item.color,
                opacity: 0.9,
                fontFamily: 'var(--font-serif)',
                display: 'block',
                marginBottom: '0.2rem'
              }}>
                {item.devanagari}
              </span>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: isSelected ? 'var(--gold)' : 'var(--ivory)'
              }}>
                {item.rasa}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--sand)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginTop: '0.25rem'
              }}>
                {item.meaning}
              </div>
            </button>
          )
        })}
      </div>

      {/* Active Rasa Deep Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRasa.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(82, 54, 74, 0.45) 0%, rgba(23, 17, 15, 0.9) 100%)',
            border: '1.5px solid var(--gold)',
            borderRadius: '6px',
            padding: '2rem 2.5rem',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(201, 162, 94, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle background color tint */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: activeRasa.color,
              opacity: 0.12,
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(201, 162, 94, 0.25)',
            paddingBottom: '1rem',
            marginBottom: '1.25rem',
            gap: '1rem'
          }}>
            <div>
              <span style={{
                color: 'var(--gold)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 600
              }}>
                Classical Rasa &middot; {activeRasa.devanagari}
              </span>
              <h4 style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--ivory)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                margin: '0.2rem 0'
              }}>
                {activeRasa.rasa} — <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{activeRasa.meaning}</span>
              </h4>
            </div>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              fontSize: '0.8rem',
              color: 'var(--sand)'
            }}>
              <div>
                <span style={{ color: 'var(--gold)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Presiding Deity</span>
                <strong>{activeRasa.deity}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--gold)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Natyashastra Hue</span>
                <strong>{activeRasa.colorName}</strong>
              </div>
            </div>
          </div>

          <div>
            <span style={{
              color: 'var(--gold)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              ✦ Resonance in Janani&rsquo;s Life Journey
            </span>
            <p style={{
              color: 'var(--ivory)',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              margin: 0
            }}>
              &ldquo;{activeRasa.biographyReflection}&rdquo;
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .navarasa-interactive-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 440px) {
          .navarasa-interactive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
