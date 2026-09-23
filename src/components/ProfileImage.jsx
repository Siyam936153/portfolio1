import { useState } from 'react'
import { profile } from '../data/resumeData'

export default function ProfileImage({ className = '' }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-accent to-accent2 text-cream font-display font-semibold ${className}`}
      >
        <span className="text-5xl sm:text-6xl">{profile.initials}</span>
      </div>
    )
  }

  return (
    <img
      src="/profile.jpg"
      alt={profile.name}
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  )
}
