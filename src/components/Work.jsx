import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNow } from '../hooks/useNow'
import { met, metAgo, formatYMD } from '../lib/studio'
import { PROJECTS, PROJECT_TOTAL } from '../lib/projects'
import DossierDrawer from './DossierDrawer'

const STATUS_STYLES = {
  DEPLOYED: 'border-phosphor text-phosphor',
  ACTIVE: 'border-filament text-filament',
  'IN-DEVELOPMENT': 'border-steel text-bone',
  CONCEPT: 'border-graphite text-steel',
  ARCHIVED: 'border-graphite text-steel opacity-70',
  DECOMMISSIONED: 'border-caution text-caution',
}

const StatusBadge = ({ status, suffix }) => (
  <span
    className={`mono-caps inline-flex items-center border px-2.5 py-1 text-[10px] tracking-[0.1em] ${STATUS_STYLES[status] || STATUS_STYLES.CONCEPT}`}
  >
    {status}
    {suffix && (
      <>
        <span className="mx-1.5 opacity-50">·</span>
        <span className="time-element">{suffix}</span>
      </>
    )}
  </span>
)

const DossierCard = ({ project, total, index, now, onInspect }) => {
  const operational = project.established_on
  const operationalMet = operational ? met(operational, now, 0).replace('.0D', 'D') : null
  const lastDeploy = project.latest_release
  const lastDeployAgo = lastDeploy ? metAgo(lastDeploy, now) : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: 0.04 * index, ease: [0.2, 0, 0.2, 1] }}
      className="group flex h-full flex-col border border-graphite bg-carbon transition-colors duration-instrument ease-instrument hover:border-filament"
    >
      {/* Header — two strips per §5.3 */}
      <div className="mono-caps tabular border-b border-graphite px-6 py-3 text-[10px]">
        <div className="flex items-center justify-between gap-3 text-slate">
          <span>DOSSIER {project.code} / {String(total).padStart(2, '0')}</span>
          <StatusBadge status={project.status} suffix={operationalMet} />
        </div>
        <p className="mt-1.5 truncate text-steel">DOMAIN: {project.domain}</p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Title row — small logo plate + project name */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-graphite bg-ink p-1.5">
            <img
              src={project.logo}
              alt=""
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="project-name text-xl font-medium leading-[1.1] tracking-display text-bone">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mono-caps mt-1 text-[10px] text-slate">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        <p className="prose-body mt-4 text-[13px] leading-[1.5] text-slate">
          {project.classification}
        </p>
        {project.signal && (
          <p className="mt-1.5 text-[13px] leading-[1.5] text-bone">
            “{project.signal}”
          </p>
        )}

        <div className="mt-5 h-px bg-graphite" />

        {/* Metadata */}
        <dl className="mono-caps tabular mt-5 space-y-2.5 text-[10px]">
          <div className="flex gap-5">
            <dt className="w-20 shrink-0 text-steel">INSTANCES</dt>
            <dd className="text-bone">{project.instances.join(' · ')}</dd>
          </div>
          <div className="flex gap-5">
            <dt className="w-20 shrink-0 text-steel">STACK</dt>
            <dd className="text-bone">{project.stack.join(' · ')}</dd>
          </div>
          {lastDeploy && (
            <div className="flex gap-5">
              <dt className="w-20 shrink-0 text-steel">LATEST</dt>
              <dd className="text-bone time-element">
                {formatYMD(lastDeploy)}
                <span className="mx-1.5 text-graphite">/</span>
                <span className="text-slate">{lastDeployAgo}</span>
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {project.primary_link && (
            <a
              href={project.primary_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filament btn-bracket text-[10px]"
              aria-label={`${project.title} — open ${project.links[0]?.label?.toLowerCase() ?? 'link'}`}
            >
              {project.links[0]?.label ?? 'VISIT'} ↗
            </a>
          )}
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="mono-caps btn-bracket text-[10px] text-slate transition-colors duration-instrument ease-instrument hover:text-bone"
          >
            INSPECT
          </button>
        </div>
      </div>
    </motion.article>
  )
}

const Work = () => {
  const now = useNow(1000)
  const [activeProject, setActiveProject] = useState(null)

  const total = PROJECT_TOTAL

  return (
    <section
      id="work"
      className="relative px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
          className="mb-12 flex flex-col gap-4 border-b border-graphite pb-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mono-caps tabular text-[11px] text-slate">
              01 / 03 — DOSSIERS
            </p>
            <p className="mono-caps tabular mt-2 text-[11px] text-steel">
              ACTIVE AND ARCHIVED PROJECTS
            </p>
          </div>
          <p className="mono-caps tabular text-[11px] text-steel">
            COUNT: {String(total).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <DossierCard
              key={project.slug}
              project={project}
              total={total}
              index={index}
              now={now}
              onInspect={setActiveProject}
            />
          ))}
        </div>
      </div>

      <DossierDrawer
        project={activeProject}
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}

export default Work
