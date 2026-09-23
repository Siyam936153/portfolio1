import { motion } from 'framer-motion'
import { education, experience } from '../data/resumeData'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const timeline = [
    ...experience.map((e) => ({ ...e, type: 'Experience', title: e.role, org: e.company })),
    ...education.map((e) => ({ ...e, type: 'Education', title: e.degree, org: e.school, points: [e.detail] })),
  ]

  return (
    <section id="experience" className="px-4 sm:px-6 py-20 sm:py-28 bg-sand/50">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Journey" title="Experience & education" />

        <div className="relative border-l-2 border-ink/10 pl-6 sm:pl-10 space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 grid place-items-center h-4 w-4 rounded-full bg-accent ring-4 ring-sand/50" />
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">{item.type}</span>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="text-sm sm:text-base text-ink/60">
                {item.org} {item.location ? `· ${item.location}` : ''} {item.period ? `· ${item.period}` : ''}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((pt) => (
                  <li key={pt} className="text-sm sm:text-base text-ink/70 flex gap-2">
                    <span className="text-accent mt-1">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
