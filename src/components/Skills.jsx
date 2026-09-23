import { motion } from 'framer-motion'
import { skills } from '../data/resumeData'
import SectionHeading from './SectionHeading'

const categoryPalette = [
  'bg-accent/10 text-accent border-accent/30',
  'bg-accent2/10 text-accent2 border-accent2/30',
  'bg-sage/20 text-ink border-sage/50',
  'bg-ink/5 text-ink border-ink/20',
]

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-20 sm:py-28 bg-sand/50">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Skills" title="Tools & technologies I work with" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-ink/10 bg-white/60 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium ${categoryPalette[i % categoryPalette.length]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
