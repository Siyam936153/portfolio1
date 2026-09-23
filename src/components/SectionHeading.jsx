import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center mx-auto' : ''}`}
    >
      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink">
        {title}
      </h2>
    </motion.div>
  )
}
