export default function SectionHeading({ eyebrow, heading, light = false }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      {eyebrow && (
        <p style={{
          color: 'var(--gold)',
          textTransform: 'uppercase',
          fontVariant: 'small-caps',
          letterSpacing: '0.15em',
          fontSize: '0.75rem',
          marginBottom: '0.5rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 600
        }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        color: light ? 'var(--ink)' : 'var(--ivory)',
        lineHeight: 1.1,
        fontWeight: 600
      }}>
        {heading}
      </h2>
    </div>
  )
}
