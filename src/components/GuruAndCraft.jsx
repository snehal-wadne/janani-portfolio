import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function GuruAndCraft({ data }) {
  const { guru, prayer, backstage, costume, onStage } = data

  return (
    <section id="guru" className="section-light" style={{ padding: 'var(--section-pad) 1.5rem' }}>
      <div className="container">

        {/* Guru */}
        <Reveal>
          <div className="guru-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.5fr',
            gap: '4rem', alignItems: 'center', marginBottom: '5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <ArchFrame src={`/images/${guru.image}`} alt={guru.imageAlt} size={400} light />
              <p style={{
                marginTop: '1.25rem', background: 'var(--plum)', color: 'var(--ivory)',
                padding: '0.75rem 1.25rem',
                fontFamily: 'var(--font-serif)', fontSize: '1rem',
                display: 'inline-block', letterSpacing: '0.03em',
                borderRadius: '2px', border: '1px solid var(--gold)'
              }}>
                {guru.label}
              </p>
            </div>
            <div>
              <SectionHeading eyebrow={guru.eyebrow} heading={guru.heading} light />
              <p style={{ color: 'var(--plum)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                {guru.text}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Prayer */}
        <Reveal>
          <SectionHeading eyebrow={prayer.eyebrow} heading={prayer.heading} light />
          <div className="prayer-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.3fr',
            gap: '2rem', marginBottom: '2.5rem', alignItems: 'center'
          }}>
            {prayer.images.map((img, i) => (
              <div key={i} style={{
                position: 'relative',
                background: '#FAF5EB',
                border: '1.5px solid var(--gold)',
                borderRadius: '4px',
                padding: '8px',
                boxShadow: '0 12px 30px rgba(82, 54, 74, 0.12)'
              }}>
                <img
                  src={`/images/${img.file}`}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: '2px',
                    border: '1px solid rgba(201, 162, 94, 0.3)'
                  }}
                />
              </div>
            ))}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 4rem' }}>
            {prayer.points.map((pt, i) => (
              <li key={i} style={{
                display: 'flex', gap: '1rem',
                marginBottom: '0.75rem', color: 'var(--plum)'
              }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
                {pt}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Backstage */}
        <Reveal>
          <div className="backstage-grid" style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr',
            gap: '4rem', alignItems: 'center', marginBottom: '5rem'
          }}>
            <div>
              <SectionHeading eyebrow={backstage.eyebrow} heading={backstage.heading} light />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {backstage.points.map((pt, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '1rem', marginBottom: '1rem',
                    color: 'var(--plum)', lineHeight: 1.6
                  }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ArchFrame src={`/images/${backstage.image}`} alt={backstage.imageAlt} size={380} light />
            </div>
          </div>
        </Reveal>

        {/* Costume */}
        <Reveal>
          <div className="costume-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.4fr',
            gap: '4rem', alignItems: 'center', marginBottom: '5rem'
          }}>
            <div>
              <ArchFrame src={`/images/${costume.image}`} alt={costume.imageAlt} size={380} light />
            </div>
            <div>
              <SectionHeading eyebrow={costume.eyebrow} heading={costume.heading} light />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {costume.items.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '1rem', marginBottom: '1.25rem',
                    paddingBottom: '1.25rem',
                    borderBottom: i < costume.items.length - 1
                      ? '1px solid rgba(82,54,74,0.15)' : 'none'
                  }}>
                    <span style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      border: '1px solid var(--gold)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--gold)', fontSize: '0.75rem',
                      flexShrink: 0, marginTop: '0.1rem'
                    }}>
                      {i + 1}
                    </span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--plum)' }}>{item.name}</div>
                      <div style={{ color: '#6B5565', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                        {item.text}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* On Stage */}
        <Reveal>
          <div className="onstage-grid" style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr',
            gap: '4rem', alignItems: 'center'
          }}>
            <div>
              <SectionHeading eyebrow={onStage.eyebrow} heading={onStage.heading} light />
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
                {onStage.points.map((pt, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '1rem', marginBottom: '1rem',
                    color: 'var(--plum)', lineHeight: 1.6
                  }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <blockquote style={{
                borderLeft: '3px solid var(--gold)', paddingLeft: '1.5rem',
                fontFamily: 'var(--font-serif)', fontSize: '1.3rem',
                color: 'var(--kumkum)', fontStyle: 'italic'
              }}>
                &ldquo;{onStage.quote}&rdquo;
              </blockquote>
            </div>
            <div>
              <ArchFrame src={`/images/${onStage.image}`} alt={onStage.imageAlt} size={380} light />
            </div>
          </div>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .guru-grid, .backstage-grid, .costume-grid, .onstage-grid {
            grid-template-columns: 1fr !important;
          }
          .backstage-grid > div:last-child, .onstage-grid > div:last-child { order: -1; }
          .prayer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
