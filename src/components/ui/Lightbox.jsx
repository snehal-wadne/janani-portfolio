import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]
  const closeRef = useRef()

  useEffect(() => {
    closeRef.current?.focus()
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handler)
    // Prevent background scroll
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.caption}`}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'none', border: '1px solid var(--gold)', color: 'var(--gold)',
          cursor: 'pointer', padding: '0.5rem', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1
        }}
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
        style={{
          position: 'absolute', left: '1rem',
          background: 'none', border: '1px solid var(--gold)', color: 'var(--gold)',
          cursor: 'pointer', padding: '0.75rem', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '90vh', textAlign: 'center' }}
      >
        <img
          src={`/images/${item.file}`}
          alt={item.alt}
          style={{
            maxWidth: '100%', maxHeight: '80vh',
            objectFit: 'contain', borderRadius: '4px'
          }}
        />
        {item.caption && (
          <p style={{
            color: 'var(--ivory)', marginTop: '1rem',
            fontFamily: 'var(--font-serif)', fontSize: '1rem', opacity: 0.9
          }}>
            {item.caption}
          </p>
        )}
        <p style={{ color: 'rgba(246,239,224,0.4)', fontSize: '0.75rem', marginTop: '0.5rem' }}>
          {index + 1} / {items.length}
        </p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
        style={{
          position: 'absolute', right: '1rem',
          background: 'none', border: '1px solid var(--gold)', color: 'var(--gold)',
          cursor: 'pointer', padding: '0.75rem', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
