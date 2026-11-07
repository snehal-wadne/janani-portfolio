import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const MARGAM_STEPS = [
  {
    n: 1,
    name: 'Alarippu',
    translation: 'The Sacred Flowering',
    tempo: 'Vilamba to Druta',
    role: 'Pure rhythmic invocation. Neck, eye, and shoulder movements unfold rhythmically like the opening of temple lotus petals.',
    lifeReflection: 'Like the blossoming of a flower, her artistic debut began at age four with pure delight and boundless promise.'
  },
  {
    n: 2,
    name: 'Jatiswaram',
    translation: 'Rhythm Bound to Swaras',
    tempo: 'Madhyama (Medium)',
    role: 'A brilliant exposition of pure Nritta (dance geometry) set to melodic sol-fa syllables without lyrical words.',
    lifeReflection: 'Rigorous childhood training, synchronizing footwork, rhythm, and devotion under her guru’s careful guidance.'
  },
  {
    n: 3,
    name: 'Shabdam',
    translation: 'The First Words of Song',
    tempo: 'Gentle & Devotional',
    role: 'The first introduction of Abhinaya (expression) and spoken lyrics, singing hymns of adoration to the divine.',
    lifeReflection: 'Taking the public stage at her Salangai Pujai (age 13) and Arangetram (age 16), finding her true artistic voice.'
  },
  {
    n: 4,
    name: 'Varnam',
    translation: 'The Crown Jewel of Margam',
    tempo: 'Complex Multi-speed Tala',
    role: 'The most demanding centerpiece of the recital, demanding peak stamina, intricate Jatis, and intense emotional depth.',
    lifeReflection: 'Her life’s greatest test: enduring five years on the transplant waitlist and 12 hours of surgery with unshakeable fortitude.'
  },
  {
    n: 5,
    name: 'Padam',
    translation: 'The Soul of Expressive Abhinaya',
    tempo: 'Vilamba (Slow, Deeply Emotional)',
    role: 'Poetic songs of divine longing, deep empathy, and subtle facial nuances where time seems to stand still.',
    lifeReflection: 'The sacred, quiet gratitude held for her anonymous donor, honouring the gift of life with every breath.'
  },
  {
    n: 6,
    name: 'Tillana',
    translation: 'The Exuberant Rhythmic Finale',
    tempo: 'Druta (Fast, Joyous)',
    role: 'A breathless celebration of rhythm, breathtaking sculptural poses, and soaring joy that enchants the audience.',
    lifeReflection: 'The exhilarating triumph of returning to dance after transplant and celebrating the blessing of motherhood.'
  },
  {
    n: 7,
    name: 'Mangalam',
    translation: 'The Benediction of Blessings',
    tempo: 'Slow Reverent Prayer',
    role: 'The concluding salutation bowing to the Lord of Dance, the orchestra, the guru, and the assembled gathering.',
    lifeReflection: 'Janani’s lifelong mission: dedicating her voice to Mohan Foundation, raising organ donation awareness: “Please save lives.”'
  }
]

export default function MargamStepper({ margam }) {
  const [currentStep, setCurrentStep] = useState(0)
  const step = MARGAM_STEPS[currentStep]

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % MARGAM_STEPS.length)
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + MARGAM_STEPS.length) % MARGAM_STEPS.length)

  return (
    <div style={{ marginBottom: '5rem', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--ivory)',
          fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
          marginBottom: '0.5rem'
        }}>
          {margam.heading || 'A Recital in Seven Movements'}
        </h3>
        <p style={{
          color: 'var(--sand)',
          fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
          maxWidth: '640px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          {margam.intro}
        </p>
      </div>

      {/* Stepper Navigation Track (Responsive with overflow safety) */}
      <div style={{
        maxWidth: '840px',
        margin: '0 auto 2rem',
        padding: '0 0.5rem',
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          minWidth: '280px',
          padding: '0.5rem 0'
        }}>
          {/* Connecting Gold Line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            right: '16px',
            height: '2px',
            background: 'rgba(201, 162, 94, 0.25)',
            transform: 'translateY(-50%)',
            zIndex: 0
          }} />

          {/* Active Fill Line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            width: `${(currentStep / (MARGAM_STEPS.length - 1)) * 100}%`,
            maxWidth: 'calc(100% - 32px)',
            height: '2px',
            background: 'var(--gold)',
            transform: 'translateY(-50%)',
            zIndex: 1,
            transition: 'width 0.3s ease'
          }} />

          {MARGAM_STEPS.map((s, idx) => {
            const isActive = idx === currentStep
            const isCompleted = idx < currentStep
            return (
              <button
                key={s.n}
                onClick={() => setCurrentStep(idx)}
                aria-label={`Step ${s.n}: ${s.name}`}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: isActive ? 'clamp(34px, 5vw, 44px)' : 'clamp(28px, 4vw, 36px)',
                  height: isActive ? 'clamp(34px, 5vw, 44px)' : 'clamp(28px, 4vw, 36px)',
                  borderRadius: '50%',
                  background: isActive ? 'var(--gold)' : (isCompleted ? 'var(--plum)' : 'var(--ink)'),
                  border: isActive ? '2px solid var(--ivory)' : '1.5px solid var(--gold)',
                  color: isActive ? 'var(--ink)' : 'var(--gold)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: isActive ? '1rem' : '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isActive ? '0 0 12px rgba(201, 162, 94, 0.6)' : 'none',
                  transition: 'all 0.25s ease',
                  flexShrink: 0
                }}
              >
                {s.n}
              </button>
            )
          })}
        </div>
      </div>

      {/* Step Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.n}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            background: 'rgba(82, 54, 74, 0.25)',
            border: '1.5px solid rgba(201, 162, 94, 0.4)',
            borderRadius: '6px',
            padding: 'clamp(1.25rem, 3.5vw, 2.25rem) clamp(1rem, 3vw, 2.5rem)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(201, 162, 94, 0.2)',
            paddingBottom: '0.75rem',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'var(--gold)',
                color: 'var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1rem',
                flexShrink: 0
              }}>
                {step.n}
              </span>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--ivory)',
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  margin: 0
                }}>
                  {step.name}
                </h4>
                <span style={{ color: 'var(--gold)', fontSize: '0.82rem', fontStyle: 'italic' }}>
                  {step.translation}
                </span>
              </div>
            </div>

            <span style={{
              background: 'rgba(201, 162, 94, 0.15)',
              border: '1px solid rgba(201, 162, 94, 0.3)',
              borderRadius: '2px',
              padding: '0.3rem 0.65rem',
              color: 'var(--sand)',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {step.tempo}
            </span>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <p style={{ color: 'var(--sand)', lineHeight: 1.7, fontSize: '0.94rem', margin: 0 }}>
              {step.role}
            </p>
          </div>

          <div style={{
            background: 'rgba(23, 17, 15, 0.65)',
            borderLeft: '3px solid var(--gold)',
            padding: '0.9rem 1rem',
            borderRadius: '0 4px 4px 0'
          }}>
            <span style={{
              color: 'var(--gold)',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600,
              display: 'block',
              marginBottom: '0.25rem'
            }}>
              ✦ Artistic Parallel in Her Life
            </span>
            <p style={{
              color: 'var(--ivory)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.6,
              fontSize: 'clamp(0.9rem, 2vw, 0.98rem)'
            }}>
              &ldquo;{step.lifeReflection}&rdquo;
            </p>
          </div>

          {/* Stepper Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(201, 162, 94, 0.15)',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={prevStep}
              style={{
                background: 'transparent',
                border: '1px solid rgba(201, 162, 94, 0.4)',
                color: 'var(--gold)',
                padding: '0.45rem 0.85rem',
                borderRadius: '2px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.82rem'
              }}
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <span style={{ color: 'var(--sand)', fontSize: '0.78rem' }}>
              Movement {step.n} of 7
            </span>
            <button
              onClick={nextStep}
              style={{
                background: 'var(--gold)',
                border: '1px solid var(--gold)',
                color: 'var(--ink)',
                padding: '0.45rem 0.85rem',
                borderRadius: '2px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontWeight: 600,
                fontSize: '0.82rem'
              }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <p style={{
        color: 'var(--gold-soft)',
        textAlign: 'center',
        fontSize: '0.78rem',
        fontStyle: 'italic',
        marginTop: '1.25rem',
        padding: '0 1rem'
      }}>
        {margam.note}
      </p>
    </div>
  )
}
