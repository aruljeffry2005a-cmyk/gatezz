import { profile } from '../content'

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
    </footer>
  )
}

export default Footer
