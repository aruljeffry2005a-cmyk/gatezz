import { certifications } from '../content'

function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <ul className="cert-list">
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  )
}

export default Certifications
