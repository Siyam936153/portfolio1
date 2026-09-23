import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'
import { profile } from '../data/resumeData'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6">
      <div
        className={`mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border border-ink/10 bg-cream/90 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 transition-shadow ${
          scrolled ? 'shadow-[0_8px_30px_rgba(22,21,19,0.12)]' : ''
        }`}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            handleClick('#top')
          }}
          className="font-display text-lg sm:text-xl font-semibold text-ink"
        >
          Siyamala<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                handleClick(l.href)
              }}
              className="px-3 py-2 rounded-full text-sm font-medium text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-ink text-cream text-sm font-semibold px-4 py-2.5 hover:bg-accent transition-colors"
        >
          Resume <FiArrowUpRight />
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ink text-2xl p-1"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-5xl mt-2 rounded-3xl border border-ink/10 bg-cream shadow-xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                handleClick(l.href)
              }}
              className="px-4 py-3 rounded-2xl text-base font-medium text-ink/80 hover:bg-ink/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeFile}
            download
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-ink text-cream text-base font-semibold px-4 py-3"
          >
            Download Resume <FiArrowUpRight />
          </a>
        </div>
      )}
    </header>
  )
}
