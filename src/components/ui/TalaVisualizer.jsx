import { useState, useEffect, useRef } from 'react'
import { Play, Square, Volume2, VolumeX } from 'lucide-react'

const TALA_BEATS = [
  { n: 1, action: 'Clap (Thatte)', syllable: 'Tha', type: 'Laghu' },
  { n: 2, action: 'Little finger', syllable: 'Dhi', type: 'Laghu' },
  { n: 3, action: 'Ring finger', syllable: 'Thom', type: 'Laghu' },
  { n: 4, action: 'Middle finger', syllable: 'Nam', type: 'Laghu' },
  { n: 5, action: 'Clap (Thatte)', syllable: 'Tha', type: 'Dhrutam 1' },
  { n: 6, action: 'Wave (Veechu)', syllable: 'Ka', type: 'Dhrutam 1' },
  { n: 7, action: 'Clap (Thatte)', syllable: 'Dhi', type: 'Dhrutam 2' },
  { n: 8, action: 'Wave (Veechu)', syllable: 'Mi', type: 'Dhrutam 2' }
]

export default function TalaVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentBeat, setCurrentBeat] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const audioCtxRef = useRef(null)

  // Initialize Web Audio API on user interaction
  const playBellSound = (isFirstBeat) => {
    if (!soundEnabled) return
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      }
      const ctx = audioCtxRef.current
      if (ctx.state === 'suspended') {
        ctx.resume()
      }

      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      // High gentle bell chime
      osc.type = 'sine'
      osc.frequency.setValueAtTime(isFirstBeat ? 880 : 587.33, ctx.currentTime) // A5 or D5
      osc.frequency.exponentialRampToValueAtTime(isFirstBeat ? 440 : 293.66, ctx.currentTime + 0.15)

      // Short decaying bell envelope
      gain.gain.setValueAtTime(0.12, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.25)
    } catch {
      // Audio fallback silent
    }
  }

  useEffect(() => {
    let intervalId = null
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentBeat((prev) => {
          const next = (prev + 1) % 8
          playBellSound(next === 0)
          return next
        })
      }, 720) // ~83 BPM traditional Vilamba/Madhyama tempo
    } else {
      setCurrentBeat(0)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isPlaying, soundEnabled])

  const togglePlay = () => {
    if (!isPlaying && soundEnabled && !audioCtxRef.current) {
      try {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      } catch {
        // Audio fallback
      }
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div style={{
      maxWidth: '920px',
      margin: '0 auto 5rem',
      background: 'rgba(23, 17, 15, 0.85)',
      border: '1.5px solid var(--gold)',
      borderRadius: '6px',
      padding: '2.5rem 2rem',
      boxShadow: '0 16px 40px rgba(0,0,0,0.45)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Sacred Geometric Mandala Accents */}
      <svg
        style={{
          position: 'absolute',
          right: '-50px',
          bottom: '-50px',
          width: '260px',
          height: '260px',
          opacity: 0.05,
          pointerEvents: 'none'
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A25E" strokeWidth="1" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#C9A25E" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="#C9A25E" strokeWidth="0.5" />
      </svg>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        gap: '1.5rem',
        borderBottom: '1px solid rgba(201, 162, 94, 0.2)',
        paddingBottom: '1.5rem'
      }}>
        <div>
          <span style={{
            color: 'var(--gold)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600
          }}>
            Interactive Classical Rhythm · Adi Tala
          </span>
          <h4 style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--ivory)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            margin: '0.3rem 0'
          }}>
            The Pulse of Salangai: 8-Beat Rhythm Cycle
          </h4>
          <p style={{
            color: 'var(--sand)',
            fontSize: '0.88rem',
            margin: 0,
            lineHeight: 1.5,
            maxWidth: '560px'
          }}>
            Every step Janani dances is governed by Tala—the ancient Indian science of rhythm. Press Play to experience the 8-beat cycle (4 Laghu beats + 4 Dhrutam beats) that syncs her ankle bells with eternity.
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            aria-label={soundEnabled ? 'Mute bell sound' : 'Enable bell sound'}
            title={soundEnabled ? 'Bell sound is ON' : 'Bell sound is OFF'}
            style={{
              background: soundEnabled ? 'rgba(201, 162, 94, 0.2)' : 'transparent',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              padding: '0.6rem',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <button
            onClick={togglePlay}
            style={{
              background: isPlaying ? 'var(--kumkum)' : 'var(--gold)',
              color: isPlaying ? 'var(--ivory)' : 'var(--ink)',
              border: 'none',
              padding: '0.75rem 1.6rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: isPlaying ? '0 0 16px rgba(155, 45, 38, 0.6)' : '0 4px 14px rgba(201, 162, 94, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            {isPlaying ? (
              <>
                <Square size={16} fill="currentColor" /> Stop Tala
              </>
            ) : (
              <>
                <Play size={16} fill="currentColor" /> Experience Rhythm
              </>
            )}
          </button>
        </div>
      </div>

      {/* The 8 Beats Flow */}
      <div className="tala-beats-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '8px'
      }}>
        {TALA_BEATS.map((beat, index) => {
          const isActive = isPlaying && currentBeat === index
          const isSamam = index === 0
          return (
            <div
              key={beat.n}
              style={{
                background: isActive
                  ? (isSamam ? 'var(--kumkum)' : 'var(--gold)')
                  : (isSamam ? 'rgba(155, 45, 38, 0.25)' : 'rgba(82, 54, 74, 0.35)'),
                border: isActive
                  ? '2px solid var(--ivory)'
                  : (isSamam ? '1.5px solid rgba(201, 162, 94, 0.6)' : '1px solid rgba(201, 162, 94, 0.25)'),
                borderRadius: '4px',
                padding: '1rem 0.5rem',
                textAlign: 'center',
                transform: isActive ? 'scale(1.08) translateY(-4px)' : 'scale(1)',
                transition: 'all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: isActive ? '0 10px 24px rgba(201, 162, 94, 0.4)' : 'none'
              }}
            >
              <span style={{
                fontSize: '0.65rem',
                color: isActive ? (isSamam ? 'var(--ivory)' : 'var(--ink)') : 'var(--sand)',
                textTransform: 'uppercase',
                display: 'block',
                fontWeight: 600,
                opacity: 0.85
              }}>
                Beat {beat.n}
              </span>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 700,
                color: isActive
                  ? (isSamam ? 'var(--ivory)' : 'var(--ink)')
                  : (isSamam ? 'var(--gold)' : 'var(--ivory)'),
                margin: '0.2rem 0'
              }}>
                {beat.syllable}
              </div>
              <span style={{
                fontSize: '0.62rem',
                color: isActive ? (isSamam ? 'var(--ivory)' : 'var(--ink)') : 'rgba(227, 213, 181, 0.7)',
                display: 'block',
                lineHeight: 1.2
              }}>
                {beat.action}
              </span>
            </div>
          )
        })}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1.25rem',
        fontSize: '0.78rem',
        color: 'var(--sand)',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <span><strong>Laghu (4 Beats):</strong> 1 Clap + 3 Finger counts</span>
        <span><strong>Dhrutam 1 (2 Beats):</strong> 1 Clap + 1 Wave</span>
        <span><strong>Dhrutam 2 (2 Beats):</strong> 1 Clap + 1 Wave</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tala-beats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </div>
  )
}
