import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { achievements, certifications } from '../data/resumeData'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Certifications" title="Learning, always" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-3xl border border-ink/10 bg-white/60 p-5 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <FiAward className="text-2xl text-accent" />
              <h3 className="mt-3 font-display text-base sm:text-lg font-semibold text-ink leading-snug">
                {c.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent2">{c.issuer}</p>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{c.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Achievements" title="Milestones worth mentioning" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-ink text-cream p-6"
              >
                <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
