import { profile } from '../content'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-avatar" aria-hidden="true">{profile.avatarInitials}</div>
      <h1>{profile.name}</h1>
      <p className="hero-title">{profile.title}</p>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">View my work</a>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
        {profile.resumeUrl && (
          <a href={profile.resumeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
            Resume
          </a>
        )}
      </div>
    </section>
  )
}

export default Hero
