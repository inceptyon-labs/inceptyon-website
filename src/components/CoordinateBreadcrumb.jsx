// Coordinate-style breadcrumb. §5.12.
// segments: array of { label, href? }. The last segment is rendered current (Halogen).
export default function CoordinateBreadcrumb({ segments = [], className = '' }) {
  if (!segments.length) return null
  return (
    <nav
      aria-label="Coordinate breadcrumb"
      className={`mono-caps tabular text-[10px] md:text-[11px] text-slate ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {segments.map((seg, i) => {
          const isLast = i === segments.length - 1
          const className = isLast ? 'text-halogen' : 'text-slate'
          return (
            <li key={`${seg.label}-${i}`} className="flex items-center gap-2">
              {seg.href && !isLast ? (
                <a
                  href={seg.href}
                  className="text-slate transition-colors duration-instrument ease-instrument hover:text-halogen"
                >
                  {seg.label}
                </a>
              ) : (
                <span className={className}>{seg.label}</span>
              )}
              {!isLast && (
                <span className="text-graphite" aria-hidden="true">/</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
