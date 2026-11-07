import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]
  const closeRef = useRef()
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Minimum swipe distance threshold (in px)
  const minSwipeDistance = 50

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

  const onTouchStartHandle = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMoveHandle = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEndHandle = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      onNext()
    } else if (isRightSwipe) {
      onPrev()
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.caption}`}
      onClick={onClose}
      onTouchStart={onTouchStartHandle}
      onTouchMove={onTouchMoveHandle}
      onTouchEnd={onTouchEndHandle}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(10, 6, 5, 0.94)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem'
      }}
    >
      {/* Close button */}
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute', top: '1.25rem', right: '1.25rem',
          background: 'rgba(23, 17, 15, 0.8)', border: '1.5px solid var(--gold)', color: 'var(--gold)',
          cursor: 'pointer', padding: '0.6rem', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
        }}
      >
        <X size={20} />
      </button>

      {/* Prev Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
        className="lightbox-nav-btn lightbox-prev"
        style={{
          position: 'absolute', left: '1.25rem',
          background: 'rgba(23, 17, 15, 0.8)', border: '1.5px solid var(--gold)', color: 'var(--gold)',
          cursor: 'pointer', padding: '0.75rem', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          transition: 'all 0.2s ease'
        }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '92vw',
          maxHeight: '88vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div style={{
          position: 'relative',
          background: '#0D0908',
          border: '1.5px solid var(--gold)',
          borderRadius: '4px',
          padding: '8px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.7)'
        }}>
          <img
            src={`/images/${item.file}`}
            alt={item.alt}
            style={{
              maxWidth: '85vw',
              maxHeight: '70vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '2px'
            }}
          />
        </div>

        {item.caption && (
          <p style={{
            color: 'var(--ivory)',
            marginTop: '1rem',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            letterSpacing: '0.02em',
            marginBottom: '0.25rem'
          }}>
            {item.caption}
          </p>
        )}

        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          color: 'var(--gold)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-body)'
        }}>
          <span>{index + 1} of {items.length}</span>
          <span>·</span>
          <span style={{ color: 'var(--sand)', opacity: 0.8 }}>Swipe or use arrow keys</span>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
        className="lightbox-nav-btn lightbox-next"
        style={{
          position: 'absolute', right: '1.25rem',
          background: 'rgba(23, 17, 15, 0.8)', border: '1.5px solid var(--gold)', color: 'var(--gold)',
          cursor: 'pointer', padding: '0.75rem', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          transition: 'all 0.2s ease'
        }}
      >
        <ChevronRight size={24} />
      </button>

      <style>{`
        @media (max-width: 640px) {
          .lightbox-nav-btn {
            padding: 0.5rem !important;
            bottom: 1.5rem !important;
            top: auto !important;
          }
          .lightbox-prev {
            left: 25% !important;
            transform: translateX(-50%);
          }
          .lightbox-next {
            right: 25% !important;
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  )
}
