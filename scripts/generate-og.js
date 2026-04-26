#!/usr/bin/env node
// Generate Open Graph images per the v0.3 brand kit (§C.2).
// Renders one studio OG (public/og-studio.png) plus one per dossier
// (public/og/{slug}.png) using hand-written SVG and resvg-js for raster output.
//
// Time fields are captured at build time and rendered as plain text — so the
// share card carries the moment the build was minted, like a mission patch.

import { Resvg } from '@resvg/resvg-js'
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { PROJECTS } from '../src/lib/projects.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const PUBLIC = resolve(ROOT, 'public')
const OG_DIR = resolve(PUBLIC, 'og')

const FONT_DIR = resolve(__dirname, 'fonts')
const FONT_FILES = [
  // Geist — body, medium headlines, Black display
  resolve(FONT_DIR, 'Geist-Regular.ttf'),
  resolve(FONT_DIR, 'Geist-Medium.ttf'),
  resolve(FONT_DIR, 'Geist-Black.ttf'),
  // JetBrains Mono — caps + telemetry
  resolve(FONT_DIR, 'JetBrainsMono-Regular.ttf'),
  resolve(FONT_DIR, 'JetBrainsMono-Medium.ttf'),
  resolve(FONT_DIR, 'JetBrainsMono-Bold.ttf'),
]

const INK = '#0E1218'
const HALOGEN = '#E8EAEC'
const BONE = '#EBE6D7'
const SLATE = '#A6ACB6'
const STEEL = '#6A727E'
const GRAPHITE = '#363B45'
const FILAMENT = '#E1925A'
const PHOSPHOR = '#7BC07A'

const W = 1200
const H = 630

const LAB_ESTABLISHED = new Date(Date.UTC(2024, 2, 12))
const NOW = new Date()
const MS_PER_DAY = 1000 * 60 * 60 * 24

const pad = (n, w = 2) => String(n).padStart(w, '0')

function formatYMD(date) {
  return `${date.getUTCFullYear()}.${pad(date.getUTCMonth() + 1)}.${pad(date.getUTCDate())}`
}

function metDays(reference, now, decimals = 1) {
  const days = (now.getTime() - reference.getTime()) / MS_PER_DAY
  const sign = days >= 0 ? '+' : '-'
  return `T${sign}${Math.abs(days).toFixed(decimals)}D`
}

const SANS = "Geist"
const MONO = "JetBrains Mono"

const STATUS_COLORS = {
  DEPLOYED: PHOSPHOR,
  ACTIVE: FILAMENT,
  'IN-DEVELOPMENT': BONE,
  CONCEPT: STEEL,
  ARCHIVED: STEEL,
  DECOMMISSIONED: '#C03A35',
}

// Lower-right registration mark per §C.1.
function registrationMark(x, y, size = 36) {
  const dot = size * 0.24
  return `
    <g transform="translate(${x},${y})">
      <rect x="0" y="0" width="${size}" height="${size}" fill="none" stroke="${BONE}" stroke-width="1"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${dot / 2 + 0.5}" fill="${FILAMENT}"/>
    </g>
  `
}

function escapeXml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  }[c]))
}

// Studio template per §C.2.
function studioSvg() {
  const labAge = Math.floor((NOW - LAB_ESTABLISHED) / MS_PER_DAY)
  const met = metDays(LAB_ESTABLISHED, NOW, 1)
  const totalActive = PROJECTS.filter((p) => p.status === 'ACTIVE' || p.status === 'DEPLOYED').length

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
      <rect width="${W}" height="${H}" fill="${INK}"/>

      <!-- subtle coordinate grid -->
      <g stroke="${GRAPHITE}" stroke-width="1" opacity="0.35">
        ${Array.from({ length: 12 }, (_, i) => `<line x1="${(i + 1) * 96}" y1="0" x2="${(i + 1) * 96}" y2="${H}"/>`).join('')}
        ${Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${(i + 1) * 96}" x2="${W}" y2="${(i + 1) * 96}"/>`).join('')}
      </g>

      <!-- L1 metadata strip — top -->
      <g font-family="${MONO}" font-size="16" letter-spacing="1.3" fill="${SLATE}">
        <text x="64" y="78">INCEPTYON LABS</text>
        <text x="270" y="78" fill="${GRAPHITE}">/</text>
        <text x="296" y="78">EST. ${formatYMD(LAB_ESTABLISHED)}</text>
        <text x="510" y="78" fill="${GRAPHITE}">/</text>
        <text x="536" y="78">TAMPA, FL</text>
        <text x="676" y="78" fill="${GRAPHITE}">/</text>
        <text x="702" y="78" fill="${BONE}">LAB AGE: ${labAge}D</text>
      </g>
      <line x1="64" y1="100" x2="${W - 64}" y2="100" stroke="${GRAPHITE}" stroke-width="1"/>

      <!-- Display headline — Halogen, Black weight -->
      <g font-family="${SANS}" font-weight="900" fill="${HALOGEN}" letter-spacing="-3">
        <text x="64" y="280" font-size="120">Systems for</text>
        <text x="64" y="408" font-size="120">impossible ideas.</text>
      </g>

      <!-- Mission elapsed time block -->
      <g font-family="${MONO}" font-size="22" fill="${SLATE}" letter-spacing="0.5">
        <text x="64" y="478" fill="${BONE}">${met}</text>
        <text x="180" y="478" fill="${GRAPHITE}">·</text>
        <text x="208" y="478">LAB OPERATIONAL</text>
      </g>

      <!-- L1 metadata strip — bottom -->
      <line x1="64" y1="${H - 80}" x2="${W - 64}" y2="${H - 80}" stroke="${GRAPHITE}" stroke-width="1"/>
      <g font-family="${MONO}" font-size="16" letter-spacing="1.3" fill="${SLATE}">
        <text x="64" y="${H - 44}">DOSSIERS: ${pad(PROJECTS.length)}</text>
        <text x="240" y="${H - 44}" fill="${GRAPHITE}">/</text>
        <text x="266" y="${H - 44}">ACTIVE: ${pad(totalActive)}</text>
        <text x="430" y="${H - 44}" fill="${GRAPHITE}">/</text>
        <text x="456" y="${H - 44}">SYSTEMS FOR PROBLEMS WITHOUT CATEGORIES</text>
      </g>

      <!-- Registration mark, lower right -->
      ${registrationMark(W - 100, H - 100, 40)}
    </svg>
  `
}

// Per-dossier template per §C.2.
function dossierSvg(project) {
  const met = metDays(project.established_on, NOW, 0).replace('.0D', 'D')
  const statusColor = STATUS_COLORS[project.status] || SLATE

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
      <rect width="${W}" height="${H}" fill="${INK}"/>

      <g stroke="${GRAPHITE}" stroke-width="1" opacity="0.35">
        ${Array.from({ length: 12 }, (_, i) => `<line x1="${(i + 1) * 96}" y1="0" x2="${(i + 1) * 96}" y2="${H}"/>`).join('')}
        ${Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${(i + 1) * 96}" x2="${W}" y2="${(i + 1) * 96}"/>`).join('')}
      </g>

      <!-- Top strip -->
      <g font-family="${MONO}" font-size="16" letter-spacing="1.3" fill="${SLATE}">
        <text x="64" y="78">INCEPTYON LABS</text>
        <text x="270" y="78" fill="${GRAPHITE}">/</text>
        <text x="296" y="78">DOSSIER ${project.code} / ${pad(PROJECTS.length)}</text>
      </g>
      <line x1="64" y1="100" x2="${W - 64}" y2="100" stroke="${GRAPHITE}" stroke-width="1"/>

      <!-- Project meta -->
      <g font-family="${MONO}" font-size="18" letter-spacing="1" fill="${SLATE}">
        <text x="64" y="172">PROJECT ${project.code}</text>
        <text x="200" y="172" fill="${GRAPHITE}">/</text>
        <text x="226" y="172">${escapeXml(project.domain)}</text>
        <text x="${226 + project.domain.length * 11 + 12}" y="172" fill="${GRAPHITE}">/</text>
        <text x="${226 + project.domain.length * 11 + 36}" y="172" fill="${statusColor}">${project.status} · ${met}</text>
      </g>

      <!-- Display name -->
      <g font-family="${SANS}" font-weight="900" fill="${HALOGEN}" letter-spacing="-3">
        <text x="64" y="320" font-size="116">${escapeXml(project.title)}</text>
      </g>

      ${project.subtitle
        ? `<text x="64" y="362" font-family="${MONO}" font-size="20" letter-spacing="1.5" fill="${SLATE}">${escapeXml(project.subtitle)}</text>`
        : ''}

      <!-- Description / signal -->
      <g font-family="${SANS}" font-weight="500" fill="${BONE}">
        <text x="64" y="440" font-size="32">${escapeXml(project.classification)}</text>
        ${project.signal
          ? `<text x="64" y="486" font-size="26" fill="${SLATE}" font-style="italic">"${escapeXml(project.signal)}"</text>`
          : ''}
      </g>

      <!-- Bottom strip -->
      <line x1="64" y1="${H - 80}" x2="${W - 64}" y2="${H - 80}" stroke="${GRAPHITE}" stroke-width="1"/>
      <g font-family="${MONO}" font-size="16" letter-spacing="1.3" fill="${SLATE}">
        <text x="64" y="${H - 44}">STACK: ${project.stack.join(' · ')}</text>
      </g>

      ${registrationMark(W - 100, H - 100, 40)}
    </svg>
  `
}

function rasterize(svg, outPath) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: W },
    background: INK,
    font: {
      loadSystemFonts: false,
      fontFiles: FONT_FILES,
      defaultFontFamily: 'Geist',
    },
  })
  const png = resvg.render().asPng()
  writeFileSync(outPath, png)
}

function ensureDir(p) {
  if (!existsSync(p)) mkdirSync(p, { recursive: true })
}

function main() {
  ensureDir(OG_DIR)

  const studioPath = resolve(PUBLIC, 'og-studio.png')
  rasterize(studioSvg(), studioPath)
  console.log(`✓ ${studioPath}`)

  for (const project of PROJECTS) {
    const out = resolve(OG_DIR, `${project.slug}.png`)
    rasterize(dossierSvg(project), out)
    console.log(`✓ ${out}`)
  }
}

main()
