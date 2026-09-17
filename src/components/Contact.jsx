import { contact } from '../content'

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get in touch</h2>
      <p className="contact-intro">
        Have a project in mind or just want to say hi? My inbox is open.
      </p>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`} className="btn btn-primary">
          Email me
        </a>
        {contact.github && (
          <a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitHub
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
            LinkedIn
          </a>
        )}
        {contact.twitter && (
          <a href={contact.twitter} target="_blank" rel="noreferrer" className="btn btn-secondary">
            Twitter
          </a>
        )}
        {contact.phone && (
          <a href={`tel:${contact.phone}`} className="btn btn-secondary">
            {contact.phone}
          </a>
        )}
      </div>
    </section>
  )
}

export default Contact
