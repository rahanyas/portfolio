import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'


const socials = [
  { label: 'GitHub', href: 'https://github.com/rahanyas', icon: <Github size={18} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rahanyas', icon: <Linkedin size={18} /> },
  { label: 'Twitter / X', href: 'https://twitter.com/rahanyas', icon: <Twitter size={18} /> },
  { label: 'Instagram', href: 'https://instagram.com/rahanyas', icon: <Instagram size={18} /> },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-status">
          <span className="status-dot" />
          ALL SYSTEMS OPERATIONAL
          <span className="footer-sep">//</span>
          OPEN FOR OPPORTUNITIES
          <span className="footer-sep">//</span>
          END OF TRANSMISSION
        </div>

        <div className="footer-inner">
          <div>
            <div className="brand" style={{ marginBottom: '0.35rem' }}>
              <span className="brand-mark">R</span>
              <span>rahanyas<span style={{ color: 'var(--accent-2)' }}>_</span></span>
            </div>
            <div style={{ fontSize: '0.95rem' }}>
              © {year} Rahanyas. Built with Python, Node.js &amp; a security-first mindset.
            </div>
          </div>

          <div className="footer-links" aria-label="Footer links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="social-row" aria-label="Social accounts">
            {socials.map((s) => (
              <a
                key={s.label}
                className="social-pill"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
