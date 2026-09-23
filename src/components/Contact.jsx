import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { profile } from '../data/resumeData'
import SectionHeading from './SectionHeading'

const contactInfo = [
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: FiMapPin, label: profile.location, href: null },
]

const socials = [
  { icon: FiGithub, label: 'GitHub', href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', href: profile.linkedin },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-4 sm:px-6 py-20 sm:py-28 bg-ink text-cream relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading eyebrow="Contact" title="Let's build something together" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed">
              Have an internship, project, or opportunity in mind? My inbox is always open — I'll get back to you
              as soon as I can.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-full bg-cream/10">
                    <c.icon />
                  </span>
                  {c.href ? (
                    <a href={c.href} className="text-sm sm:text-base hover:text-accent transition-colors">
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-sm sm:text-base">{c.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center h-11 w-11 rounded-full border border-cream/20 hover:bg-cream hover:text-ink transition-colors"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-2xl bg-cream/5 border border-cream/15 px-4 py-3 text-sm sm:text-base placeholder:text-cream/40 focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-2xl bg-cream/5 border border-cream/15 px-4 py-3 text-sm sm:text-base placeholder:text-cream/40 focus:outline-none focus:border-accent"
            />
            <textarea
              required
              rows={4}
              placeholder="Tell me about your project or opportunity"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-2xl bg-cream/5 border border-cream/15 px-4 py-3 text-sm sm:text-base placeholder:text-cream/40 focus:outline-none focus:border-accent resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink font-semibold px-6 py-3 text-sm sm:text-base hover:bg-cream transition-colors"
            >
              Send Message <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
