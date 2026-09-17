import { education } from '../content'

function Education() {
  if (education.length === 0) return null

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((entry) => (
          <div key={entry.school} className="timeline-item">
            <div className="timeline-header">
              <h3>{entry.school}</h3>
              {entry.period && <span className="timeline-period">{entry.period}</span>}
            </div>
            <p className="timeline-org">{entry.degree}</p>
            {entry.detail && <p className="timeline-detail">{entry.detail}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
