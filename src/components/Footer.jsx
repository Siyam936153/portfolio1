import { profile } from '../data/resumeData'

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-6 bg-ink text-cream/50 text-center text-xs sm:text-sm border-t border-cream/10">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </p>
    </footer>
  )
}
