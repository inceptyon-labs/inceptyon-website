// Studio constants. Treated as the authoritative reference for time elements.
export const LAB_ESTABLISHED = new Date(Date.UTC(2024, 2, 12)) // 2024.03.12
export const LAB_LOCATION = 'TAMPA, FL'
export const LAB_LATITUDE = '27.9506° N'
export const LAB_LONGITUDE = '82.4572° W'
export const LAB_TZ_LABEL = 'EST'
export const LAB_TZ_IANA = 'America/New_York'

const pad = (n, w = 2) => String(n).padStart(w, '0')

export function formatYMD(date) {
  return `${date.getUTCFullYear()}.${pad(date.getUTCMonth() + 1)}.${pad(date.getUTCDate())}`
}

export function formatUTCClock(date) {
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} UTC`
}

export function formatLocalClock(date, tz = LAB_TZ_IANA, label = LAB_TZ_LABEL) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(date)
  const get = (t) => parts.find((p) => p.type === t)?.value ?? '00'
  return `${get('hour')}:${get('minute')}:${get('second')} ${label}`
}

const MS_PER_DAY = 1000 * 60 * 60 * 24

// MET notation. T+ for after the reference, T- for before.
export function met(reference, now, decimals = 1) {
  const days = (now.getTime() - reference.getTime()) / MS_PER_DAY
  const sign = days >= 0 ? '+' : '-'
  return `T${sign}${Math.abs(days).toFixed(decimals)}D`
}

// Human-readable elapsed: T-2H AGO, T-5D AGO. Always negative (past event).
export function metAgo(reference, now) {
  const ms = now.getTime() - reference.getTime()
  if (ms < 0) {
    const futureDays = Math.ceil(-ms / MS_PER_DAY)
    return `T+${futureDays}D`
  }
  const minutes = ms / (1000 * 60)
  if (minutes < 60) return `T-${Math.max(1, Math.round(minutes))}M AGO`
  const hours = minutes / 60
  if (hours < 24) return `T-${Math.round(hours)}H AGO`
  const days = hours / 24
  return `T-${Math.round(days)}D AGO`
}

export function daysSince(reference, now) {
  return Math.floor((now.getTime() - reference.getTime()) / MS_PER_DAY)
}

// Build date — captured at module load. Updates with each deploy.
export const BUILD_DATE = formatYMD(new Date())
