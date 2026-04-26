import { useNow, usePrefersReducedMotion } from '../hooks/useNow'
import {
  LAB_ESTABLISHED,
  formatUTCClock,
  formatLocalClock,
  met,
} from '../lib/studio'

// The studio's live clock chrome. §5.13.
// variant: 'block' (default) renders the stacked anatomy from §5.13.
// variant: 'inline' renders a one-line `T+781.0D · 14:23:07 UTC` for nav.
export default function Chronograph({
  variant = 'block',
  status = 'LAB OPERATIONAL',
  className = '',
  showLocal = true,
  reference = LAB_ESTABLISHED,
  decimals = 1,
}) {
  const now = useNow(1000)
  const reduced = usePrefersReducedMotion()

  const metStr = met(reference, now, decimals)
  const utcStr = formatUTCClock(now)
  const localStr = formatLocalClock(now)

  if (variant === 'inline') {
    return (
      <span
        className={`mono-telemetry tabular text-[11px] time-element time-muted ${className}`}
        aria-label="Mission elapsed time and UTC clock"
      >
        {metStr} <span className="text-graphite">·</span> {utcStr}
      </span>
    )
  }

  return (
    <div
      className={`mono-telemetry tabular text-[11px] leading-[1.6] text-slate ${className}`}
      role="group"
      aria-label="Studio chronograph"
    >
      <div className="time-element">{metStr}</div>
      <div className="time-element">{utcStr}</div>
      {showLocal && <div className="time-element">{localStr}</div>}
      <div className="my-2 h-px w-12 bg-graphite" aria-hidden="true" />
      <div className="text-bone">{status}</div>
      {reduced && (
        <div className="mt-2 text-[10px] text-steel">
          AS OF {formatUTCClock(now)}
        </div>
      )}
    </div>
  )
}
