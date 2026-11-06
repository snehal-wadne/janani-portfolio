export default function Divider() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '1rem',
      margin: '3rem auto', maxWidth: 400, padding: '0 1.5rem'
    }}>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--gold))' }} />
      <svg
        width="28" height="28" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      >
        <path d="M12 2C12 2 10 6 10 9C10 11.2 10.8 13 12 14C13.2 13 14 11.2 14 9C14 6 12 2 12 2Z" fill="#C9A25E" opacity="0.9"/>
        <path d="M4 8C4 8 7 10 9 12C10.4 13.4 11 15 11 16C9.5 16 7.5 15 6 13.5C4 11.5 4 8 4 8Z" fill="#C9A25E" opacity="0.7"/>
        <path d="M20 8C20 8 17 10 15 12C13.6 13.4 13 15 13 16C14.5 16 16.5 15 18 13.5C20 11.5 20 8 20 8Z" fill="#C9A25E" opacity="0.7"/>
        <circle cx="12" cy="17" r="2" fill="#C9A25E" opacity="0.9"/>
        <path d="M12 19C12 19 10 21 12 22C14 21 12 19 12 19Z" fill="#C9A25E" opacity="0.6"/>
      </svg>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--gold))' }} />
    </div>
  )
}
