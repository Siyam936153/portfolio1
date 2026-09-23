import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/resumeData'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-ink/10 p-6 sm:p-7 flex flex-col ${
                p.highlight ? 'bg-ink text-cream sm:col-span-2' : 'bg-white/60 text-ink'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl sm:text-2xl font-semibold">{p.title}</h3>
                <span
                  className={`grid place-items-center h-10 w-10 shrink-0 rounded-full border transition-colors ${
                    p.highlight
                      ? 'border-cream/30 group-hover:bg-cream group-hover:text-ink'
                      : 'border-ink/15 group-hover:bg-ink group-hover:text-cream'
                  }`}
                >
                  <FiArrowUpRight />
                </span>
              </div>
              <p className={`mt-3 text-sm sm:text-base leading-relaxed ${p.highlight ? 'text-cream/75' : 'text-ink/70'}`}>
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1 text-xs font-medium border ${
                      p.highlight ? 'border-cream/25 text-cream/80' : 'border-ink/15 text-ink/70'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
