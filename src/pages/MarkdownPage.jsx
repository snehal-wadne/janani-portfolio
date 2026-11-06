import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export default function MarkdownPage({ title, markdown, backLabel = 'Back to portfolio' }) {
  return (
    <div style={{ background: 'var(--ink)', minHeight: '100vh' }}>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(23,17,15,0.97)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(201,162,94,0.2)',
        padding: '0 1.5rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Link
          to="/"
          className="back-link"
          style={{
            color: 'var(--gold)', fontFamily: 'var(--font-body)',
            fontSize: '0.875rem', letterSpacing: '0.08em',
            textTransform: 'uppercase', display: 'flex',
            alignItems: 'center', gap: '0.5rem'
          }}
        >
          ← {backLabel}
        </Link>
        <span style={{
          fontFamily: 'var(--font-serif)', color: 'var(--ivory)',
          fontSize: '0.95rem', opacity: 0.6
        }}>
          Janani Pradhaban
        </span>
      </div>

      <div className="markdown-page">
        <h1 style={{ marginBottom: '1rem' }}>{title}</h1>
        <div style={{ borderBottom: '1px solid rgba(201,162,94,0.3)', marginBottom: '3rem' }} />
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}
