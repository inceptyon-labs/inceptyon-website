import { motion } from 'framer-motion'
import Chronograph from './Chronograph'
import { useNow } from '../hooks/useNow'
import {
  LAB_ESTABLISHED,
  LAB_LOCATION,
  daysSince,
  formatYMD,
} from '../lib/studio'
import { PROJECT_TOTAL } from '../lib/projects'

const DOSSIER_TOTAL = PROJECT_TOTAL

const Hero = () => {
  const now = useNow(1000)
  const labAge = daysSince(LAB_ESTABLISHED, now)

  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen px-6 pt-32 pb-24 md:px-12 md:pt-40 md:pb-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* L1 metadata strip — studio identity + lab age */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
          className="mono-caps tabular flex flex-wrap gap-x-6 gap-y-2 border-b border-graphite pb-4 text-[11px] text-slate"
        >
          <span>INCEPTYON LABS</span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span>EST. {formatYMD(LAB_ESTABLISHED)}</span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span>{LAB_LOCATION}</span>
          <span aria-hidden="true" className="text-graphite">/</span>
          <span className="time-element">LAB AGE: {labAge}D</span>
        </motion.div>

        <div className="grid items-start gap-16 pt-16 md:grid-cols-[1.4fr_0.6fr] md:gap-24 md:pt-24">
          <div>
            {/* Display 1 — Black weight, Halogen */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0.2, 1] }}
              className="display max-w-[13ch] text-[clamp(3.25rem,10vw,6.5rem)] leading-[0.92] md:max-w-[18ch]"
              style={{ fontWeight: 900 }}
            >
              Systems for impossible ideas.
            </motion.h1>

            {/* Positioning */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0.2, 1] }}
              className="prose-body mt-10 max-w-[60ch] text-base leading-[1.6] text-slate md:text-lg md:leading-[1.65]"
            >
              Inceptyon Labs is an independent software studio building apps,
              games, agents, dashboards, and experimental tools across consumer
              software, infrastructure, and generative systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.2, 0, 0.2, 1] }}
              className="prose-body mt-4 max-w-[60ch] text-base leading-[1.6] text-slate md:text-lg md:leading-[1.65]"
            >
              Each project is treated as a system. Each system is cataloged
              as a dossier.
            </motion.p>

            {/* Bordered Filament CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.2, 0, 0.2, 1] }}
              className="mt-12"
            >
              <button
                onClick={scrollToWork}
                className="btn-filament btn-bracket text-[11px]"
              >
                INSPECT DOSSIERS
              </button>
            </motion.div>
          </div>

          {/* Time block — the clock IS the hero image */}
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.2, 0, 0.2, 1] }}
            className="border-l border-graphite pl-8 md:pl-12"
            aria-label="Studio operational telemetry"
          >
            <p className="mono-caps tabular text-[10px] text-steel">
              OPERATIONAL TELEMETRY
            </p>
            <div className="mt-6">
              <Chronograph
                variant="block"
                status="LAB OPERATIONAL"
                className="text-[13px] md:text-[14px]"
              />
            </div>

            <div className="mt-8 border-t border-graphite pt-6">
              <p className="mono-caps tabular text-[10px] text-steel">
                CATALOG
              </p>
              <p className="mono-telemetry tabular mt-3 text-[28px] leading-none text-bone">
                {String(DOSSIER_TOTAL).padStart(2, '0')}
                <span className="text-steel"> / {String(DOSSIER_TOTAL).padStart(2, '0')}</span>
              </p>
              <p className="mono-caps tabular mt-3 text-[10px] text-slate">
                ACTIVE DOSSIERS
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default Hero
