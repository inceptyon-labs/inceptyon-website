import { useEffect, useRef, useState } from 'react'
import { useNow } from '../hooks/useNow'
import {
  LAB_ESTABLISHED,
  LAB_LOCATION,
  LAB_LATITUDE,
  LAB_LONGITUDE,
  BUILD_DATE,
  formatYMD,
  formatUTCClock,
  formatLocalClock,
  met,
} from '../lib/studio'
import { PROJECTS } from '../lib/projects'

const RENDER_START = typeof performance !== 'undefined' ? performance.now() : 0

const Footer = () => {
  const now = useNow(1000)
  const renderTimeRef = useRef(null)
  const [renderTime, setRenderTime] = useState('—')

  useEffect(() => {
    if (renderTimeRef.current !== null) return
    const elapsed = (performance.now() - RENDER_START) / 1000
    renderTimeRef.current = elapsed
    setRenderTime(elapsed.toFixed(3))
  }, [])

  // Featured catalog: most recent first, with a public link.
  const featuredDossiers = [...PROJECTS]
    .filter((p) => p.primary_link)
    .sort((a, b) => Number(b.code) - Number(a.code))
    .slice(0, 6)
    .map((p) => ({
      label: p.subtitle ? `${p.title}: ${p.subtitle}` : p.title,
      href: p.primary_link,
    }))

  const columns = [
    {
      heading: 'DOSSIERS',
      items: featuredDossiers,
    },
    {
      heading: 'LAB',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Coordinates', href: '#contact' },
        { label: 'GitHub', href: 'https://github.com/inceptyon-labs' },
      ],
    },
    {
      heading: 'LEGAL',
      items: [
        { label: 'Privacy', href: '/privacy.html' },
        { label: 'Terms', href: '/terms.html' },
        { label: 'Support', href: '/support.html' },
      ],
    },
  ]

  return (
    <footer className="border-t border-graphite bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        {/* Identity strip */}
        <div className="mono-caps tabular flex flex-wrap gap-x-6 gap-y-2 border-b border-graphite pb-4 text-[10px] text-slate">
          <span>INCEPTYON LABS</span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span>SYSTEMS LAB</span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span>EST. {formatYMD(LAB_ESTABLISHED)}</span>
        </div>

        {/* Coordinates strip */}
        <div className="mono-caps tabular mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-steel">
          <span>{LAB_LATITUDE}, {LAB_LONGITUDE}</span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span>{LAB_LOCATION}</span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span>UTC-05</span>
        </div>

        {/* Live telemetry strip */}
        <div className="mono-telemetry tabular mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-slate">
          <span className="time-element">
            LAB OPERATIONAL <span className="text-bone">{met(LAB_ESTABLISHED, now, 1)}</span>
          </span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span className="time-element">{formatUTCClock(now)}</span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span className="time-element">{formatLocalClock(now)}</span>
        </div>

        {/* Columns */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-16">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mono-caps tabular border-b border-graphite pb-3 text-[10px] text-steel">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate transition-colors duration-instrument ease-instrument hover:text-bone"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Render telemetry */}
        <div className="mt-16 border-t border-graphite pt-6">
          <p className="mono-caps tabular text-[10px] leading-relaxed text-steel">
            © 2024–2026 INCEPTYON LABS LLC. ALL RIGHTS RESERVED.
            <span className="mx-2 text-graphite">/</span>
            ALL SYSTEMS OBSERVED.
            <span className="mx-2 text-graphite">/</span>
            <span className="time-element">RENDERED IN {renderTime}s</span>
            <span className="mx-2 text-graphite">/</span>
            <span className="time-element">BUILD {BUILD_DATE}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
