import { about, profile } from '../content'

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {profile.location && <p className="about-location">📍 {profile.location}</p>}
      </div>
    </section>
  )
}

export default About
