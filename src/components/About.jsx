import { motion } from 'framer-motion'
import { useNow } from '../hooks/useNow'
import { LAB_ESTABLISHED, daysSince, formatYMD } from '../lib/studio'

const principles = [
  {
    code: '01',
    title: 'Catalog over roadmap',
    body: 'We don’t have a roadmap. We have a catalog. Each entry is a self-contained thesis.',
  },
  {
    code: '02',
    title: 'Apparatus over app',
    body: 'More software should look like instruments and less like apps. Restraint is the brand.',
  },
  {
    code: '03',
    title: 'Public artifacts',
    body: 'Small teams, fast iteration, public artifacts. The catalog is the argument.',
  },
]

const About = () => {
  const now = useNow(1000)
  const labAge = daysSince(LAB_ESTABLISHED, now)

  return (
    <section
      id="about"
      className="relative px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
          className="mb-16 flex flex-wrap items-end justify-between gap-4 border-b border-graphite pb-6"
        >
          <p className="mono-caps tabular text-[11px] text-slate">
            02 / 03 — LAB NOTES
          </p>
          <p className="mono-caps tabular text-[11px] text-steel time-element">
            EST. {formatYMD(LAB_ESTABLISHED)} · LAB AGE: {labAge}D
          </p>
        </motion.div>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
          className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-24"
        >
          <div className="prose-body space-y-6 text-base leading-[1.7] text-slate md:text-lg">
            <p>
              <span className="text-bone">INCEPTYON LABS</span> is an
              independent software studio operating from Tampa, Florida. The
              lab builds apps, agents, dashboards, and experimental tools
              across consumer software, infrastructure, and generative
              systems.
            </p>
            <p>
              The studio’s working method is simple: small teams, fast
              iteration, public artifacts. Each project is a self-contained
              thesis about what a piece of software can do in a domain we
              find under-served or interestingly strange. Some are
              commercial. Some are research. Some are operational tools we
              built for ourselves and decided to ship.
            </p>
            <p className="text-bone">We don’t have a roadmap. We have a catalog.</p>
          </div>

          {/* Studio plate */}
          <div className="relative">
            <div className="mono-caps tabular mb-3 flex justify-between text-[10px] text-steel">
              <span>PLATE 02 / STUDIO</span>
              <span>{formatYMD(LAB_ESTABLISHED)}</span>
            </div>
            <div className="relative aspect-[5/3] overflow-hidden border border-graphite bg-carbon">
              <img
                src="/studio.png"
                alt="Inceptyon Labs studio, Tampa, FL"
                className="h-full w-full object-cover saturate-50"
              />
            </div>
            <div className="mono-caps tabular mt-3 flex justify-between text-[10px] text-steel">
              <span>27.9506° N · 82.4572° W</span>
              <span>UTC-05</span>
            </div>
          </div>
        </motion.div>

        {/* Principles grid */}
        <div className="mt-24 grid gap-px border border-graphite bg-graphite md:grid-cols-3">
          {principles.map((p, idx) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.08 * idx, ease: [0.2, 0, 0.2, 1] }}
              className="bg-ink p-8 md:p-10"
            >
              <p className="mono-caps tabular text-[10px] text-steel">
                {p.code} / PRINCIPLE
              </p>
              <h3 className="mt-4 text-2xl font-medium leading-tight text-bone">
                {p.title}
              </h3>
              <p className="prose-body mt-4 text-sm leading-[1.6] text-slate">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
