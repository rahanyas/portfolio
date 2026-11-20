import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, Layers } from 'lucide-react'
import TiltCard from './TiltCard'

const projects = [
  {
    title: 'Repeato',
    subtitle: 'Question Paper Intelligence',
    description:
      'A full-stack platform that turns uploaded question papers into structured, searchable information — extracting questions, sub-questions, marks, sections, and year/subject metadata.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    category: 'fullstack',
    featured: true,
    gradient: 'linear-gradient(135deg, #15181d 0%, #4b5560 45%, #9aa5b1 100%)',
    glyph: 'R',
    live: 'https://repeato-eight.vercel.app',
    code: 'https://github.com/rahanyas/repeato',
  },
  {
    title: 'COZA Store',
    subtitle: 'E-Commerce Platform',
    description:
      'A full-stack clothing store with separate customer and admin workflows — authentication, product browsing, cart, orders, user management, admin CRUD, and Cloudinary uploads.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    category: 'fullstack',
    gradient: 'linear-gradient(135deg, #1b1f25 0%, #46505c 45%, #7d8894 100%)',
    glyph: 'C',
    live: 'https://e-commerce-sigma-two-32.vercel.app',
    code: 'https://github.com/rahanyas/e-commerce',
  },
  {
    title: 'Port Scanner',
    subtitle: 'Network Security Utility',
    description:
      'A focused Python tool for identifying open ports on a target host — part of my hands-on Linux, networking, and web-security work.',
    tags: ['Python', 'Networking', 'Security', 'CLI'],
    category: 'security',
    gradient: 'linear-gradient(135deg, #20242a 0%, #525b66 45%, #aeb6bf 100%)',
    glyph: 'P',
    live: null,
    code: 'https://github.com/rahanyas/port_scanner',
  },
  {
    title: 'APix CLI',
    subtitle: 'Terminal HTTP Client',
    description:
      'A terminal-native HTTP client to make requests, save them, and replay them with one command — with colored responses, a local collection, and automatic request history.',
    tags: ['Node.js', 'CLI', 'REST', 'Developer Tools'],
    category: 'tooling',
    gradient: 'linear-gradient(135deg, #14171b 0%, #3d454f 45%, #717b87 100%)',
    glyph: 'A',
    live: null,
    code: 'https://github.com/rahanyas/apix-cli',
  },
]

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'security', label: 'Security' },
  { id: 'tooling', label: 'Tools' },
]

const card = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.2 } },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="eyebrow"><Layers size={16} /> Projects</div>
          <h2 className="section-title">Selected work & featured builds</h2>
          <p className="section-subtitle">
            Real projects from my GitHub — full-stack applications, security tooling, and developer
            utilities. Filter by focus area to explore.
          </p>
        </motion.div>

        <motion.div
          className="filter-bar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
            >
              {f.label}
              <span style={{ opacity: 0.6, marginLeft: 6 }}>
                {f.id === 'all' ? projects.length : projects.filter((p) => p.category === f.id).length}
              </span>
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <TiltCard
                key={project.title}
                layout
                className={`project-card glass ${project.featured ? 'featured' : ''}`}
                max={6}
                variants={card}
                exit="exit"
              >
                <span className="project-badge">{String(index + 1).padStart(2, '0')}</span>
                <div className="project-visual" style={{ background: project.gradient }}>
                  <span className="project-shine" />
                  <span className="glyph">{project.glyph}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live && (
                    <a className="icon-link" href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={15} /> Live
                    </a>
                  )}
                  <a className="icon-link" href={project.code} target="_blank" rel="noreferrer">
                    <Github size={15} /> Code
                  </a>
                </div>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
