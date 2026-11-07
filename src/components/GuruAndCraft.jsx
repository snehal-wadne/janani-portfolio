import ArchFrame from './ui/ArchFrame'
import SectionHeading from './ui/SectionHeading'
import Divider from './ui/Divider'
import Reveal from './ui/Reveal'

export default function GuruAndCraft({ data }) {
  const { guru, prayer, backstage, costume, onStage } = data

  return (
    <section id="guru" className="section-light" style={{ padding: 'var(--section-pad) 1rem', width: '100%', boxSizing: 'border-box' }}>
      <div className="container" style={{ boxSizing: 'border-box' }}>

        {/* Guru */}
        <Reveal>
          <div className="guru-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.5fr',
            gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: '5rem',
            width: '100%'
          }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              <ArchFrame src={`/images/${guru.image}`} alt={guru.imageAlt} size={380} light />
              <p style={{
                marginTop: '1.25rem', background: 'var(--plum)', color: 'var(--ivory)',
                padding: '0.65rem 1.25rem',
                fontFamily: 'var(--font-serif)', fontSize: '0.95rem',
                display: 'inline-block', letterSpacing: '0.03em',
                borderRadius: '2px', border: '1px solid var(--gold)'
              }}>
                {guru.label}
              </p>
            </div>
            <div>
              <SectionHeading eyebrow={guru.eyebrow} heading={guru.heading} light />
              <p style={{ color: 'var(--plum)', lineHeight: 1.8, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
                {guru.text}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Prayer - SINGLE IMAGE with Lord Nataraja altar (100% full view, never cut off) */}
        <Reveal>
          <div className="prayer-section" style={{
            background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EDE0 100%)',
            border: '1.5px solid var(--gold)',
            borderRadius: '6px',
            padding: 'clamp(1.5rem, 4vw, 3rem) clamp(0.85rem, 3.5vw, 2.5rem)',
            marginBottom: '5rem',
            boxShadow: '0 12px 35px rgba(82, 54, 74, 0.08)',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div className="prayer-grid" style={{
              display: 'grid', gridTemplateColumns: '1.3fr 1fr',
              gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'center',
              width: '100%'
            }}>
              {/* Single Image showing Janani Praying before Lord Nataraja */}
              <div style={{ textAlign: 'center', width: '100%', boxSizing: 'border-box' }}>
                <div style={{
                  position: 'relative',
                  background: '#FFFFFF',
                  border: '1.5px solid var(--gold)',
                  borderRadius: '4px',
                  padding: '6px',
                  boxShadow: '0 16px 36px rgba(82, 54, 74, 0.15), 0 2px 8px rgba(0,0,0,0.06)',
                  maxWidth: '560px',
                  width: '100%',
                  margin: '0 auto',
                  boxSizing: 'border-box'
                }}>
                  <div style={{
                    position: 'relative',
                    border: '1px solid rgba(201, 162, 94, 0.4)',
                    borderRadius: '2px',
                    background: '#FAF5EB',
                    padding: '4px',
                    overflow: 'hidden',
                    boxSizing: 'border-box'
                  }}>
                    <img
                      src={`/images/${prayer.image}`}
                      alt={prayer.imageAlt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '2px',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                </div>
                <p style={{
                  marginTop: '1rem',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: 'var(--plum)',
                  fontStyle: 'italic',
                  letterSpacing: '0.02em',
                  lineHeight: 1.5,
                  padding: '0 0.5rem'
                }}>
                  {prayer.imageCaption}
                </p>
              </div>

              {/* Prayer Points */}
              <div style={{ width: '100%' }}>
                <SectionHeading eyebrow={prayer.eyebrow} heading={prayer.heading} light />
                <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0 0', width: '100%' }}>
                  {prayer.points.map((pt, i) => (
                    <li key={i} style={{
                      display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                      marginBottom: '1.25rem', color: 'var(--plum)',
                      lineHeight: 1.7, fontSize: 'clamp(0.92rem, 2vw, 1.02rem)'
                    }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '1.1rem', marginTop: '-0.1rem' }}>✦</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Backstage */}
        <Reveal>
          <div className="backstage-grid" style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: '5rem',
            width: '100%'
          }}>
            <div>
              <SectionHeading eyebrow={backstage.eyebrow} heading={backstage.heading} light />
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0 0', width: '100%' }}>
                {backstage.points.map((pt, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                    marginBottom: '1.25rem', color: 'var(--plum)',
                    lineHeight: 1.7, fontSize: 'clamp(0.92rem, 2vw, 1.02rem)'
                  }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '1.1rem', marginTop: '-0.1rem' }}>✦</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              <ArchFrame src={`/images/${backstage.image}`} alt={backstage.imageAlt} size={380} light />
            </div>
          </div>
        </Reveal>

        {/* Costume */}
        <Reveal>
          <div className="costume-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.4fr',
            gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: '5rem',
            width: '100%'
          }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              <ArchFrame src={`/images/${costume.image}`} alt={costume.imageAlt} size={380} light />
            </div>
            <div>
              <SectionHeading eyebrow={costume.eyebrow} heading={costume.heading} light />
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0 0', width: '100%' }}>
                {costume.items.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '1rem', marginBottom: '1.25rem',
                    paddingBottom: '1.25rem',
                    borderBottom: i < costume.items.length - 1 ? '1px solid rgba(82,54,74,0.12)' : 'none',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      border: '1.5px solid var(--gold)',
                      background: 'rgba(201, 162, 94, 0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--gold)', fontSize: '0.82rem',
                      fontFamily: 'var(--font-serif)', fontWeight: 700,
                      flexShrink: 0, marginTop: '0.1rem'
                    }}>
                      {i + 1}
                    </span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--plum)', fontSize: '1rem', fontFamily: 'var(--font-serif)' }}>
                        {item.name}
                      </div>
                      <div style={{ color: '#6B5565', fontSize: '0.9rem', marginTop: '0.2rem', lineHeight: 1.6 }}>
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
            gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center',
            width: '100%'
          }}>
            <div>
              <SectionHeading eyebrow={onStage.eyebrow} heading={onStage.heading} light />
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0 2rem', width: '100%' }}>
                {onStage.points.map((pt, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                    marginBottom: '1rem', color: 'var(--plum)',
                    lineHeight: 1.6, fontSize: 'clamp(0.92rem, 2vw, 1.02rem)'
                  }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '1.1rem', marginTop: '-0.1rem' }}>✦</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <blockquote style={{
                borderLeft: '3px solid var(--gold)', paddingLeft: '1.25rem',
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)',
                color: 'var(--kumkum)', fontStyle: 'italic', lineHeight: 1.5
              }}>
                &ldquo;{onStage.quote}&rdquo;
              </blockquote>
            </div>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              <ArchFrame src={`/images/${onStage.image}`} alt={onStage.imageAlt} size={380} light />
            </div>
          </div>
        </Reveal>

        <Divider />
      </div>

      <style>{`
        @media (max-width: 860px) {
          .guru-grid, .prayer-grid, .backstage-grid, .costume-grid, .onstage-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
          .backstage-grid > div:last-child,
          .onstage-grid > div:last-child {
            order: -1;
          }
          .prayer-section {
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}
