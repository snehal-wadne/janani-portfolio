export default function ArchFrame({
  src,
  alt,
  size = 420,
  className = '',
  light = false,
  caption = null
}) {
  return (
    <div
      className={`classical-frame-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: typeof size === 'number' ? `${size}px` : size,
        margin: '0 auto',
        padding: '8px',
        boxSizing: 'border-box'
      }}
    >
      {/* Subtle Inset Decorative Gold Outline (stays 100% within frame bounds) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '2px',
          border: '1px solid var(--gold)',
          opacity: light ? 0.35 : 0.45,
          borderRadius: '4px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main framed photo card */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: light ? '#FAF5EB' : 'rgba(23, 17, 15, 0.9)',
          border: '1.5px solid var(--gold)',
          borderRadius: '4px',
          padding: '8px',
          boxShadow: light
            ? '0 12px 30px rgba(82, 54, 74, 0.12), 0 2px 8px rgba(0,0,0,0.06)'
            : '0 16px 36px rgba(0, 0, 0, 0.5), 0 0 16px rgba(201, 162, 94, 0.1)',
          boxSizing: 'border-box'
        }}
      >
        {/* Inner passe-partout / matting container */}
        <div
          style={{
            position: 'relative',
            border: `1px solid ${light ? 'rgba(201, 162, 94, 0.4)' : 'rgba(201, 162, 94, 0.35)'}`,
            borderRadius: '2px',
            background: light ? '#FDFBF7' : '#140E0C',
            padding: '4px',
            overflow: 'hidden',
          }}
        >
          {/* The full uncropped image */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '480px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Traditional Temple Gold Corner Accents */}
        {/* Top-Left Corner */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          style={{
            position: 'absolute', top: -3, left: -3, width: 18, height: 18,
            pointerEvents: 'none', fill: 'var(--gold)'
          }}
        >
          <path d="M0 0 L15 0 L15 3 L3 3 L3 15 L0 15 Z" />
          <circle cx="6" cy="6" r="1.5" />
        </svg>

        {/* Top-Right Corner */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          style={{
            position: 'absolute', top: -3, right: -3, width: 18, height: 18,
            pointerEvents: 'none', fill: 'var(--gold)'
          }}
        >
          <path d="M24 0 L9 0 L9 3 L21 3 L21 15 L24 15 Z" />
          <circle cx="18" cy="6" r="1.5" />
        </svg>

        {/* Bottom-Left Corner */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          style={{
            position: 'absolute', bottom: -3, left: -3, width: 18, height: 18,
            pointerEvents: 'none', fill: 'var(--gold)'
          }}
        >
          <path d="M0 24 L15 24 L15 21 L3 21 L3 9 L0 9 Z" />
          <circle cx="6" cy="18" r="1.5" />
        </svg>

        {/* Bottom-Right Corner */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          style={{
            position: 'absolute', bottom: -3, right: -3, width: 18, height: 18,
            pointerEvents: 'none', fill: 'var(--gold)'
          }}
        >
          <path d="M24 24 L9 24 L9 21 L21 21 L21 9 L24 9 Z" />
          <circle cx="18" cy="18" r="1.5" />
        </svg>

        {caption && (
          <p style={{
            color: light ? 'var(--plum)' : 'var(--gold-soft)',
            fontSize: '0.85rem',
            marginTop: '0.75rem',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: 1.4
          }}>
            {caption}
          </p>
        )}
      </div>
    </div>
  )
}
