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
            gap: '4rem', alignItems: 'center', marginBottom: '5.5rem'
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

        {/* Prayer - SINGLE IMAGE with Lord Nataraja altar */}
        <Reveal>
          <div className="prayer-section" style={{
            background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EDE0 100%)',
            border: '1.5px solid var(--gold)',
            borderRadius: '6px',
            padding: '3rem 2.5rem',
            marginBottom: '5.5rem',
            boxShadow: '0 12px 35px rgba(82, 54, 74, 0.08)'
          }}>
            <div className="prayer-grid" style={{
              display: 'grid', gridTemplateColumns: '1.3fr 1fr',
              gap: '3.5rem', alignItems: 'center'
            }}>
              {/* Single Image showing Janani Praying before Lord Nataraja */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  position: 'relative',
                  background: '#FFFFFF',
                  border: '1.5px solid var(--gold)',
                  borderRadius: '4px',
                  padding: '10px',
                  boxShadow: '0 16px 36px rgba(82, 54, 74, 0.15), 0 2px 8px rgba(0,0,0,0.06)',
                  maxWidth: '560px',
                  margin: '0 auto'
                }}>
                  <div style={{
                    position: 'relative',
                    border: '1px solid rgba(201, 162, 94, 0.4)',
                    borderRadius: '2px',
                    background: '#FAF5EB',
                    padding: '6px',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={`/images/${prayer.image}`}
                      alt={prayer.imageAlt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '440px',
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
                  fontSize: '0.92rem',
                  color: 'var(--plum)',
                  fontStyle: 'italic',
                  letterSpacing: '0.02em',
                  lineHeight: 1.5
                }}>
                  {prayer.imageCaption}
                </p>
              </div>

              {/* Prayer Points */}
              <div>
                <SectionHeading eyebrow={prayer.eyebrow} heading={prayer.heading} light />
                <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 0' }}>
                  {prayer.points.map((pt, i) => (
                    <li key={i} style={{
                      display: 'flex', gap: '1rem', alignItems: 'flex-start',
                      marginBottom: '1.25rem', color: 'var(--plum)',
                      lineHeight: 1.7, fontSize: '1.02rem'
                    }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '1.2rem', marginTop: '-0.1rem' }}>✦</span>
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
            gap: '4rem', alignItems: 'center', marginBottom: '5.5rem'
          }}>
            <div>
              <SectionHeading eyebrow={backstage.eyebrow} heading={backstage.heading} light />
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 0' }}>
                {backstage.points.map((pt, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    marginBottom: '1.25rem', color: 'var(--plum)',
                    lineHeight: 1.7, fontSize: '1.02rem'
                  }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '1.2rem', marginTop: '-0.1rem' }}>✦</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ textAlign: 'center' }}>
              <ArchFrame src={`/images/${backstage.image}`} alt={backstage.imageAlt} size={380} light />
            </div>
          </div>
        </Reveal>

        {/* Costume */}
        <Reveal>
          <div className="costume-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.4fr',
            gap: '4rem', alignItems: 'center', marginBottom: '5.5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <ArchFrame src={`/images/${costume.image}`} alt={costume.imageAlt} size={380} light />
            </div>
            <div>
              <SectionHeading eyebrow={costume.eyebrow} heading={costume.heading} light />
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 0' }}>
                {costume.items.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '1.25rem', marginBottom: '1.25rem',
                    paddingBottom: '1.25rem',
                    borderBottom: i < costume.items.length - 1 ? '1px solid rgba(82,54,74,0.12)' : 'none',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{
                      width: '34px', height: '34px', borderRadius: '50%',
                      border: '1.5px solid var(--gold)',
                      background: 'rgba(201, 162, 94, 0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--gold)', fontSize: '0.85rem',
                      fontFamily: 'var(--font-serif)', fontWeight: 700,
                      flexShrink: 0, marginTop: '0.1rem'
                    }}>
                      {i + 1}
                    </span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--plum)', fontSize: '1.05rem', fontFamily: 'var(--font-serif)' }}>
                        {item.name}
                      </div>
                      <div style={{ color: '#6B5565', fontSize: '0.92rem', marginTop: '0.2rem', lineHeight: 1.6 }}>
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
              <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0 2rem' }}>
                {onStage.points.map((pt, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    marginBottom: '1rem', color: 'var(--plum)',
                    lineHeight: 1.6, fontSize: '1rem'
                  }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '1.2rem', marginTop: '-0.1rem' }}>✦</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <blockquote style={{
                borderLeft: '3px solid var(--gold)', paddingLeft: '1.5rem',
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                color: 'var(--kumkum)', fontStyle: 'italic', lineHeight: 1.6
              }}>
                &ldquo;{onStage.quote}&rdquo;
              </blockquote>
            </div>
            <div style={{ textAlign: 'center' }}>
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
            gap: 2.5rem !important;
          }
          .backstage-grid > div:last-child,
          .onstage-grid > div:last-child {
            order: -1;
          }
          .prayer-section {
            padding: 2rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  )
}
