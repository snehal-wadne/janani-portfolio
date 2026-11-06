export default function Footer({ footer }) {
  return (
    <footer style={{
      background: 'var(--ink)',
      borderTop: '1px solid rgba(201,162,94,0.2)',
      padding: '3rem 1.5rem',
      textAlign: 'center'
    }}>
      <div className="container">
        {/* Lotus divider */}
        <div style={{ marginBottom: '1.5rem' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C12 2 10 6 10 9C10 11.2 10.8 13 12 14C13.2 13 14 11.2 14 9C14 6 12 2 12 2Z" fill="#C9A25E" opacity="0.9"/>
            <path d="M4 8C4 8 7 10 9 12C10.4 13.4 11 15 11 16C9.5 16 7.5 15 6 13.5C4 11.5 4 8 4 8Z" fill="#C9A25E" opacity="0.7"/>
            <path d="M20 8C20 8 17 10 15 12C13.6 13.4 13 15 13 16C14.5 16 16.5 15 18 13.5C20 11.5 20 8 20 8Z" fill="#C9A25E" opacity="0.7"/>
            <circle cx="12" cy="17" r="2" fill="#C9A25E" opacity="0.9"/>
          </svg>
        </div>

        <p style={{
          fontFamily: 'var(--font-serif)', color: 'var(--gold)',
          fontSize: '1.1rem', marginBottom: '0.5rem'
        }}>
          {footer.line}
        </p>
        <p style={{
          color: 'var(--sand)', fontSize: '0.95rem',
          fontStyle: 'italic', marginBottom: '1.5rem',
          fontFamily: 'var(--font-serif)'
        }}>
          {footer.mission}
        </p>
        <p style={{ color: 'rgba(227,213,181,0.4)', fontSize: '0.75rem' }}>
          {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
