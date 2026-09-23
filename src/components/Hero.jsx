import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/resumeData'
import ProfileImage from './ProfileImage'

const socials = [
  { href: profile.github, icon: FiGithub, label: 'GitHub' },
  { href: profile.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: `mailto:${profile.email}`, icon: FiMail, label: 'Email' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6">
      {/* decorative shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-sage/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-16 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-accent2/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-xs sm:text-sm font-medium text-ink/70">
            <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
            Open to Associate Software Engineer roles
          </span>

          <h1 className="mt-6 font-display font-semibold leading-[1.05] text-ink text-4xl sm:text-5xl md:text-6xl">
            Hi, I'm {profile.name.split(' ')[0]}
            <span className="text-accent">.</span>
            <br />
            I build for the <span className="text-outline">web</span>
            <span className="hidden sm:inline"> &amp; the edge.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-ink/70">
            {profile.role} · {profile.tagline}. {profile.location} based — strong in Java and
            full-stack development (React, Spring Boot), SAP ABAP Cloud certified, with AWS &amp;
            Azure fundamentals under my belt.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream font-semibold px-6 py-3 text-sm sm:text-base hover:bg-accent transition-colors"
            >
              View My Work <FiArrowDown className="rotate-[-45deg]" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink font-semibold px-6 py-3 text-sm sm:text-base hover:bg-ink/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid place-items-center h-11 w-11 rounded-full border border-ink/15 bg-white/60 text-ink hover:bg-ink hover:text-cream transition-colors"
              >
                <s.icon className="text-lg" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto md:mx-0 w-56 sm:w-72 md:w-full max-w-xs"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-blob bg-accent animate-blob" />
          <ProfileImage className="relative aspect-square w-full rounded-blob border-4 border-ink/90 shadow-xl animate-blob" />
          <div className="absolute -bottom-4 -left-4 sm:-left-8 rounded-2xl bg-ink text-cream px-4 py-3 shadow-lg animate-float">
            <p className="font-display text-xl sm:text-2xl font-semibold">8.86</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wide text-cream/70">CGPA</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
