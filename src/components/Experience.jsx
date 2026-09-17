import { experience } from '../content'

function Experience() {
  if (experience.length === 0) return null

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.role + job.org} className="timeline-item">
            <div className="timeline-header">
              <h3>{job.role}</h3>
              <span className="timeline-period">{job.period}</span>
            </div>
            <p className="timeline-org">{job.org}</p>
            <ul>
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
