import { motion } from 'framer-motion'
import { profile, stats } from '../data/resumeData'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About Me" title="A little about my journey" />

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl leading-relaxed text-ink/80"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-ink/10 bg-white/50 px-5 py-6 text-center hover:bg-white transition-colors"
              >
                <p className="font-display text-3xl sm:text-4xl font-semibold text-ink">{s.value}</p>
                <p className="mt-1 text-xs sm:text-sm uppercase tracking-wide text-ink/60">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
