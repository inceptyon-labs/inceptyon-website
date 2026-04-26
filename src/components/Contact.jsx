import { motion } from 'framer-motion'
import { useNow } from '../hooks/useNow'
import { formatUTCClock } from '../lib/studio'

const Contact = () => {
  const now = useNow(1000)

  return (
    <section
      id="contact"
      className="relative px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
          className="mb-12 border-b border-graphite pb-6"
        >
          <p className="mono-caps tabular text-[11px] text-slate">
            03 / 03 — COORDINATES
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
          className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-24"
        >
          {/* Copy */}
          <div className="prose-body space-y-6 text-base leading-[1.7] text-slate md:text-lg">
            <p>
              The lab operates from Tampa, Florida.
            </p>
            <p>
              Most work is shipped publicly. Quiet correspondence is welcome.
            </p>

            <div className="pt-6">
              <a
                href="mailto:hello@inceptyon.io"
                className="btn-filament btn-bracket text-[11px]"
              >
                TRANSMIT
              </a>
            </div>
          </div>

          {/* Coordinates plate */}
          <div className="border border-graphite bg-carbon p-8">
            <div className="mono-caps tabular flex items-center justify-between text-[10px] text-steel">
              <span>COORDINATES</span>
              <span className="time-element">{formatUTCClock(now)}</span>
            </div>
            <dl className="mono-caps tabular mt-6 space-y-4 text-xs">
              <div className="flex justify-between gap-6 border-b border-graphite pb-3">
                <dt className="text-steel">EMAIL</dt>
                <dd>
                  <a
                    href="mailto:hello@inceptyon.io"
                    className="text-bone hover:text-filament"
                  >
                    HELLO@INCEPTYON.IO
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-graphite pb-3">
                <dt className="text-steel">LATITUDE</dt>
                <dd className="text-bone">27.9506° N</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-graphite pb-3">
                <dt className="text-steel">LONGITUDE</dt>
                <dd className="text-bone">82.4572° W</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-graphite pb-3">
                <dt className="text-steel">REGION</dt>
                <dd className="text-bone">TAMPA, FL</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-graphite pb-3">
                <dt className="text-steel">UTC OFFSET</dt>
                <dd className="text-bone">-05:00</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-steel">CHANNELS</dt>
                <dd className="flex gap-3">
                  <a
                    href="https://github.com/inceptyon-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone hover:text-filament"
                  >
                    GITHUB
                  </a>
                  <span className="text-graphite">·</span>
                  <a
                    href="https://x.com/inceptyonlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone hover:text-filament"
                  >
                    X
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
