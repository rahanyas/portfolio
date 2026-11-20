import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, Layers } from 'lucide-react'
import TiltCard from './TiltCard'

const projects = [
  {
    title: 'Atlas API Monitor',
    description:
      'A developer-focused monitoring interface for tracking endpoint health, latency trends, and incident history in real time.',
    tags: ['Python', 'Linux', 'AWS', 'Cybersecurity'],
    category: 'security',
    featured: true,
    gradient: 'linear-gradient(135deg, #15181d 0%, #4b5560 45%, #9aa5b1 100%)',
    glyph: 'A',
    live: '#',
    code: '#',
  },
  {
    title: 'Aurora Analytics Dashboard',
    description:
      'A data-rich analytics platform with real-time charts, role-based views, and a polished dark UI for tracking business metrics.',
    tags: ['Python', 'Node.js', 'AWS', 'REST API'],
    category: 'backend',
    gradient: 'linear-gradient(135deg, #1b1f25 0%, #46505c 45%, #7d8894 100%)',
    glyph: 'A',
    live: '#',
    code: '#',
  },
  {
    title: 'Nova Commerce Experience',
    description:
      'A modern e-commerce storefront featuring smooth product browsing, cart flows, and conversion-focused responsive design.',
    tags: ['Node.js', 'Vercel', 'Performance', 'Payments'],
    category: 'cloud',
    gradient: 'linear-gradient(135deg, #20242a 0%, #525b66 45%, #aeb6bf 100%)',
    glyph: 'N',
    live: '#',
    code: '#',
  },
  {
    title: 'Pulse Task Manager',
    description:
      'A collaborative productivity app with drag-and-drop boards, filters, and delightful micro-interactions for daily workflows.',
    tags: ['Node.js', 'Python', 'Linux', 'Security'],
    category: 'backend',
    gradient: 'linear-gradient(135deg, #14171b 0%, #3d454f 45%, #717b87 100%)',
    glyph: 'P',
    live: '#',
    code: '#',
  },
  {
    title: 'Orbit Portfolio CMS',
    description:
      'A content-driven portfolio system enabling easy updates to case studies, blogs, and media with a clean editorial layout.',
    tags: ['AWS', 'Node.js', 'Linux', 'SEO'],
    category: 'cloud',
    gradient: 'linear-gradient(135deg, #191c21 0%, #49525d 45%, #8d98a4 100%)',
    glyph: 'O',
    live: '#',
    code: '#',
  },
  {
    title: 'Lumen Landing Studio',
    description:
      'High-converting landing pages with bold typography, animated sections, and A/B-test-friendly modular components.',
    tags: ['Vercel', 'Render', 'Node.js', 'Marketing'],
    category: 'cloud',
    gradient: 'linear-gradient(135deg, #1e2228 0%, #565f6a 45%, #b7c0c9 100%)',
    glyph: 'L',
    live: '#',
    code: '#',
  },
]

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'backend', label: 'Backend' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'security', label: 'Security' },
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
            A collection of projects spanning backend systems, cloud deployments, and security-minded
            tooling. Filter by focus area to explore.
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
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="icon-link" href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={15} /> Live
                  </a>
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
